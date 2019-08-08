import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  titleBlog : string ="Posts";
  
  constructor(){
  }

  posts = [
    
      {
        title : "Mon premier post",
        content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.",
        loveIts: 0,
        created_at: ""
      },


      {
        title : "Mon deuxième post",
        content: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
        loveIts: 0,
        created_at: ""
      },

      {
        title : "Encore un post",
        content: "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans.",
        loveIts: 0,
        created_at: ""
      },
      {
        title : "Encore un autre post",
        content: "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire.",
        loveIts: 0,
        created_at: ""
      }
  ]

}
