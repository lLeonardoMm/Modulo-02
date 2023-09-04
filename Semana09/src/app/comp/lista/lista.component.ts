import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  
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
     mostrando(event: any){
      console.log(event)
     }
}
