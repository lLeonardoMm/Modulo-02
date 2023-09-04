import { Component } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  usuario = ''
  personagem = ''
  classe = ''
  reactForm: FormGroup;
  caracteresEspeciais = ['$', '%', '&', '*']

  constructor(){
    this.reactForm = new FormGroup({
      'usuarioR': new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]),
      'personagemR': new FormControl('', [Validators.required, this.proibido()]),
      'classeR': new FormControl('MagoLeal'),
    })
  }
  onSubmitR(){
    console.log(
    this.reactForm.get("usuarioR")?.value,
    this.reactForm.get("personagemR")?.value,
    this.reactForm.get("classeR")?.value)
  }
  proibido(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.caracteresEspeciais.some(caractere => control.value.includes(caractere))){
        return {'caractereEspecial': true}
      }else{
        return null
      }
    }
  }
  onSubmit(){
    console.log(this.usuario,this.personagem, this.classe)
  }
}
