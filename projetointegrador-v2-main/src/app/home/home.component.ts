import { AlertasService } from './../service/alertas.service';
import { AuthService } from './../service/auth.service';
import { User } from 'src/app/model/User';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from './../service/tema.service';
import { PostagemService } from './../service/postagem.service';
import { Postagem } from './../model/Postagem';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema
  listaTemas: Tema[]
  idTema: number

  user: User = new User()
  idUser = environment.id

  key = 'data'
  reverse = true

  /*tema*/
  listaTema: Tema[]
  temaOk: boolean = false

 /*menu*/
  nome = environment.nome
   foto = environment.foto
   id = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.alertas.showAlertInfo('Sessão expirou')
      this.router.navigate(['/inicio'])
    }

    if(localStorage.getItem('filtroOk') == 'true') {
      this.getByTituloTema()
    }

    this.getAllTemas()
    this.getAllPostagens()

    /*tema*/
    this.findAllTema()
    /* this.getByTituloTema() */

  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
      console.log(this.listaPostagens)
    })
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }

  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })

  }
  /*tema*/


  findAllTema(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
      this.listaTema = resp
    })
  }
  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema) =>{
      this.tema = resp
      this.alertas.showAlertSuccess('tema cadastrado com sucesso!')
      this.findAllTema()
      this.tema = new Tema()
    })
  }

/*tema-delete*/
  sair(){
  this.router.navigate(['/inicio'])
  environment.token = ''
  environment.nome = ''
  environment.id = 0
  environment.foto = ''
  }

  getByTituloTema() {
    let titulo = localStorage.getItem('tituloTema')!
    localStorage.setItem('filtroOk', 'false')
    if(titulo == '' || titulo == null) {
      this.getAllPostagens()
      this.temaOk = false
    } else {
      this.temaOk = true
      this.temaService.getByTituloTema(titulo).subscribe((resp: Tema[]) => {
        this.listaTemas = resp
        this.listaTemas.forEach((item) => {
          if(item.postagem.length == 0) {
            this.alertas.showAlertInfo('Não existe postagens com esse Tema!')
            this.getAllPostagens()
          }
        })
      })
    }

  }

}
