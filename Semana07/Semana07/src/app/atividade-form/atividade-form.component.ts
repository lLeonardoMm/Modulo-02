import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-atividade-form',
  templateUrl: './atividade-form.component.html',
  styleUrls: ['./atividade-form.component.css']
})
export class AtividadeFormComponent {
  
  avaliacoesFilmes: FormGroup;
    clicado = false

    

    constructor(  ){
      this.avaliacoesFilmes = new FormGroup({
        'nome': new FormControl('',
        [Validators.required, Validators.minLength(3)]),
        'email': new FormControl('',
        [Validators.required, Validators.email]),
        'nomeFilme': new FormControl('',
        [Validators.required, Validators.minLength(3)]),
        'avaliacao': new FormControl(0, Validators.required,)
      })
    }

    enviarAvaliacao(){
      console.log(this.avaliacoesFilmes.get('nome')?.value)
      console.log(this.avaliacoesFilmes.get('email')?.value)
      console.log(this.avaliacoesFilmes.get('nomeFilme')?.value)
      console.log(this.avaliacoesFilmes.get('avaliacao')?.value)
       this.clicado = true
      
      
    }
}
