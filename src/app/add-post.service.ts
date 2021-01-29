import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostPayload } from './add-post/post-payload';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private _httpClient: HttpClient) { }

  addPost(postPayload: PostPayload) {
    return this._httpClient.post('http://localhost:8082/api/posts', postPayload);
  }
}
