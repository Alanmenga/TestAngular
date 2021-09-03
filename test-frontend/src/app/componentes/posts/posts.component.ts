import { Component, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/interfaces/post.interfaces';
import { PostService } from 'src/app/servicios/post.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts : PostResponse [] = [];

  constructor( private postService: PostService, private router:Router ) { }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData() {
    this.postService.getAllPosts()
        .subscribe( respuesta => {
          this.posts = respuesta;
        })
  }

  verPost( id:number ){
    this.router.navigate( ['/post',id + 1] );
  }

}
