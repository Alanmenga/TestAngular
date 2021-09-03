import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PostResponse } from '../interfaces/post.interfaces';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private url: string = 'https://jsonplaceholder.typicode.com/posts/';

  constructor( private http: HttpClient) { }

  getAllPosts():Observable<PostResponse[]>{
    return this.http.get<PostResponse[]>(this.url);
  }

  getPost( postId:string ):Observable<PostResponse>{
    return this.http.get<PostResponse>(this.url + postId);
  }

}
