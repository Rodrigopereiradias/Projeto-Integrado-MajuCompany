import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { OrderModule } from 'ngx-order-pipe';

import { InicioComponent } from './inicio/inicio.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { TemaComponent } from './tema/tema.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { PostagemComponent } from './postagem/postagem.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { MinhasPostagensComponent } from './minhas-postagens/minhas-postagens.component';
import { UteisComponent } from './uteis/uteis.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalTemaComponent } from './modal-tema/modal-tema.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,

    InicioComponent,
    SobreNosComponent,
    ContatoComponent,
    SobreNosComponent,
    InicioComponent,
    CadastrarComponent,
    HomeComponent,
    TemaComponent,
    TemaDeleteComponent,
    TemaEditComponent,
    PostagemComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    UserEditComponent,
    MinhasPostagensComponent,
    UteisComponent,
    AlertasComponent,
    ModalTemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
