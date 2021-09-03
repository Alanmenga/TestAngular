import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { PostResponse } from 'src/app/interfaces/post.interfaces';
import { PostService } from 'src/app/servicios/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public fecha!: Date;
  public id!: string;
  public post! : PostResponse ;

  constructor( private activatedRoute:ActivatedRoute, private postService:PostService, private router:Router) {

    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'] ;
    })
  }

  ngOnInit(): void {
    this.cargarPost();
  }

  public cargarPost() {
    this.postService.getPost(this.id)
        .subscribe( respuesta => {
          this.post = respuesta;
        })
  }

  volver( ){
    this.router.navigate( ['/posts'] );
  }

  emitir(){
    this.fecha = new Date();
  }

}
