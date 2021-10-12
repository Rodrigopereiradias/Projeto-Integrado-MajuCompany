import { AlertasService } from './../service/alertas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-uteis',
  templateUrl: './uteis.component.html',
  styleUrls: ['./uteis.component.css']
})
export class UteisComponent implements OnInit {

  constructor(
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.alertas.showAlertInfo('Sessão expirou')
      this.router.navigate(['/inicio'])
    }
  }
  }


