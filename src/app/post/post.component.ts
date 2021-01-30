import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddPostService } from '../add-post.service';
import { PostPayload } from '../add-post/post-payload';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: PostPayload = new PostPayload();
  paramLink: number;

  constructor(private _activatedRoute: ActivatedRoute, private _postService: AddPostService) {
    this.post.content = "";
    this.post.title = "";
    this.post.username = "";
    this.post.id = "";
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(data => {
      this.paramLink = data["id"];
    });

    this._postService.getPost(this.paramLink).subscribe((postData: PostPayload) => {
      this.post = postData;
    }, (err: any) => {
      console.log("Failure in response!")
    })
  }

}
