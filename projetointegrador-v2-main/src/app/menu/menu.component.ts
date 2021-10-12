import { PostagemService } from './../service/postagem.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { AuthService } from '../service/auth.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   nome = environment.nome
   foto = environment.foto
   id = environment.id
   tituloPost: string
   tituloTema: string

  /* tema */

  listaTema: Tema[]
  tema: Tema = new Tema()
  alertas: any;



  constructor(
    private router : Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    /*tema*/

    this.findAllTema()
  }

  /*sair*/

  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nome = ''
    environment.id = 0
    environment.foto = ''
  }

  /* tema*/
  findAllTema(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
      this.listaTema = resp
    })
  }


  /*Pesquisar */
  pesquisarTema() {
    localStorage.setItem('tituloTema', this.tituloTema)
    localStorage.setItem('filtroOk', 'true')
    this.router.navigate(['/minhas-postagens'])
    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 50)
  }

  pegarTema(event: any) {
    this.tituloTema = event.target.value
  }
}

