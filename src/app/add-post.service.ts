import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostPayload } from './add-post/post-payload';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  baseUrl = environment.baseUrl;

  constructor(public _httpClient: HttpClient) { }

  addPost(postPayload: PostPayload) {
    return this._httpClient.post(this.baseUrl + 'api/posts/', postPayload);
  }

  getAllPosts(): Observable<Array<PostPayload>> {
    return this._httpClient.get<Array<PostPayload>>(this.baseUrl + "api/posts/all");
  }

  getPost(paramLink: number): Observable<PostPayload> {
    return this._httpClient.get<PostPayload>(this.baseUrl + "api/posts/get/" + paramLink);
  }
}
