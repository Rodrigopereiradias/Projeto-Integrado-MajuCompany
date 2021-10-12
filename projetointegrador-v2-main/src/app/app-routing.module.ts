import { UteisComponent } from './uteis/uteis.component';
import { MinhasPostagensComponent } from './minhas-postagens/minhas-postagens.component';
import { HomeComponent } from './home/home.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaComponent } from './tema/tema.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';

const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},

  {path:'inicio', component:InicioComponent},
  {path:'cadastrar', component:CadastrarComponent},

  {path:'rodape', component:RodapeComponent},
  {path:'menu', component:MenuComponent},

  {path:'sobre', component:SobreNosComponent},
  {path:'contato', component:ContatoComponent},
  {path:'home', component:HomeComponent},
  {path:'minhas-postagens',component:MinhasPostagensComponent},
  {path:'uteis',component:UteisComponent},

  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path:'postagem-delete/:id',component:PostagemDeleteComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'user-edit/:id', component: UserEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
