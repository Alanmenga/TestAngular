import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Comment } from '../interfaces/cooment.interfaces';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private urlCom: string = 'https://jsonplaceholder.typicode.com/comments/';

  constructor( private http: HttpClient ) { }

  getAllComments():Observable<Comment[]>{
    return this.http.get<Comment[]>(this.urlCom);
  }
}
