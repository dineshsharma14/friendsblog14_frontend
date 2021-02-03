import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddPostService } from '../add-post.service';
import { PostPayload } from './post-payload';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addPostForm: FormGroup;
  title = new FormControl('');
  body = new FormControl('');
  postPayload: PostPayload;

  constructor(public _addPostService: AddPostService, public _router: Router) {
    this.addPostForm = new FormGroup(
      {
        title: this.title,
        body: this.body
      }
    );

    this.postPayload = {
      id: '',
      content: '',
      title: '',
      username: ''
    };
  }

  ngOnInit() {
  }

  addPost() {
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this._addPostService.addPost(this.postPayload).subscribe(data => {
      this._router.navigateByUrl("/");
    }, error => {
      console.log("Error in posting the post");

    });
  }

}
