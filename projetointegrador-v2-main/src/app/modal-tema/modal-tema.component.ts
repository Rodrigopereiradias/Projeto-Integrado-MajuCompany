import { Router } from '@angular/router';
import { AlertasService } from './../service/alertas.service';
import { TemaService } from 'src/app/service/tema.service';
import { Tema } from 'src/app/model/Tema';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-tema',
  templateUrl: './modal-tema.component.html',
  styleUrls: ['./modal-tema.component.css']
})
export class ModalTemaComponent implements OnInit {

  listaTema: Tema[]
  tema: Tema = new Tema()

  constructor (
    private temaService: TemaService,
    private alertas: AlertasService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findAllTema()
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema) =>{
      this.tema = resp
      this.alertas.showAlertSuccess('Tema cadastrado com sucesso!')
      this.findAllTema()
      this.tema = new Tema()
      this.router.navigate(['/minhas-postagens'])
      setTimeout(() => {
        this.router.navigate(['/home'])
      }, 50)
    })
  }

  findAllTema(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
      this.listaTema = resp
    })
  }
}
