import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { ListaComponent } from './comp/lista/lista.component';
import { NotFoundComponent } from './comp/not-found/not-found.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './comp/login/login.component';
import { acessando } from './guards/auth.guard';
import { FilhoComponent } from './comp/filho/filho.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'  },  
  { path: 'home', component: ListaComponent },  
  { path: 'serie/:id', component: ListaComponent },
  { path: 'filho',canActivate: [acessando] ,component: FilhoComponent },
  { path: '**',component: NotFoundComponent }, 
 { path: 'login',
    loadChildren: () => import('./login/login-routing.module').then(m => m.LoginRoutingModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
