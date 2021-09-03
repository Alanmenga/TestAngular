import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

//Servicios


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/compartido/navbar/navbar.component';
import { PostsComponent } from './componentes/posts/posts.component';
import { PostComponent } from './componentes/post/post.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    PostComponent,
    ComentariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
