import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: FormGroup;
  emails=  '';
  senhas = ''; 
 ;
 
  constructor(private router: Router ){
    this.login = new FormGroup({
      'senha': new FormControl('',
      [Validators.required, Validators.minLength(3)]),
      'email': new FormControl('',
      [Validators.required, Validators.email]),
    })
  }
  
  
  enviarAvaliacao(){
    this.emails = this.login.get('email')?.value
    this.senhas = this.login.get('senha')?.value
    const dados = { email: this.emails, senha: this.senhas }
   let loginSalvoString = localStorage.getItem('login');

    if(loginSalvoString === null){
      let novoArray = [dados]
      localStorage.setItem('login', JSON.stringify(novoArray))
      }else{
      const loginSalvo = JSON.parse(loginSalvoString??'')
      loginSalvo.push(dados)
      localStorage.setItem('login', JSON.stringify(loginSalvo))      
      }

      const loginValidacao = JSON.parse(loginSalvoString??'')
     
      for(let loginValid of loginValidacao){
        if(this.emails == loginValid.email && this.senhas == loginValid.senha){
          this.router.navigate(['/filho'])
          
        }
    }
   
   
  }
}
