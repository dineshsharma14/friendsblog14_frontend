import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPayload } from './add-post/post-payload';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private _httpClient: HttpClient) { }

  addPost(postPayload: PostPayload) {
    return this._httpClient.post('http://localhost:8082/api/posts/', postPayload);
  }

  getAllPosts(): Observable<Array<PostPayload>> {
    return this._httpClient.get<Array<PostPayload>>("http://localhost:8082/api/posts/all");
  }

  getPost(paramLink: number): Observable<PostPayload> {
    return this._httpClient.get<PostPayload>("http://localhost:8082/api/posts/get/" + paramLink);
  }
}
