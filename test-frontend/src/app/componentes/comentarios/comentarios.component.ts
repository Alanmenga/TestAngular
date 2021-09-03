import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from 'src/app/interfaces/cooment.interfaces';
import { CommentService } from "src/app/servicios/comment.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  public comments : Comment [] = [];
  public id!: number;
  public commentsFilt : Comment [] = [];

  @Output() cambiarFecha:EventEmitter<void>;

  constructor( private activatedRoute:ActivatedRoute, private commentService:CommentService) { 
    this.cambiarFecha = new EventEmitter();
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'] ;
    })
  }

  ngOnInit(): void {
    this.cargarComments();
  }

  emitir(){
    this.cambiarFecha.emit()
  }


  public cargarComments() {
    this.commentService.getAllComments()
        .subscribe( respuesta => {
          this.comments = respuesta;
          this.commentsFilt = this.comments.filter( c => c.postId == this.id)
          //console.log(this.commentsFilt);
        })
  }
}
