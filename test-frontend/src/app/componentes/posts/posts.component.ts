import { Component, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/interfaces/post.interfaces';
import { PostService } from 'src/app/servicios/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts : PostResponse [] = [];

  constructor( private postService: PostService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData() {
    this.postService.getAllPosts()
        .subscribe( respuesta => {
          this.posts = respuesta;
        })
  }

}
