import { Input, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginComponent } from '../comp/login/login.component';
import { ListaComponent } from '../comp/lista/lista.component';
import { FilhoComponent } from '../comp/filho/filho.component';

export const acessando: CanActivateFn = (route, state) => {
  
  if(inject(FilhoComponent).isLogIn){
  return false
  }
  return true;
};
