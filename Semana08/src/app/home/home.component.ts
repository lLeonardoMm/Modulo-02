import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
    listagem= [
      {
      index: 0,
       titulo: 'The Guard', 
       data: 2011, 
       subTitulo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      lido: false},
       
       {
      index: 1,
       titulo: 'Veronica Mars', 
       data: 2013, 
       subTitulo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
       lido: false},
   
      {
      index: 2,
       titulo: 'The Robocop', 
       data: 2014, 
       subTitulo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
       lido: false}
       ]
  
  
  @Input() homeFilho = ''
  @Output() homeFilhoChange = new EventEmitter<string>();
  
  pai(escrevendo: string){
      this.homeFilhoChange.emit(escrevendo)
  } 
  alerta(){
    console.log('funcionou');
    localStorage.setItem('teste', 'salvando')
  }
}
