import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Servicios


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/compartido/navbar/navbar.component';
import { PostsComponent } from './componentes/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
