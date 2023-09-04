import { Component, Input } from '@angular/core';
import { environment } from './../../../environments/environment.development';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  @Input() listas: any;
  textoLidoPaiPraFilho(index: number) { 
    for(let lista of this.listas){
      console.log(lista)
      if(lista.index == index){
        lista.lido = true
      }
    }
     
  }

  notfs = environment.listagem

  textoLido(index: number) { 
    for(let notf of this.notfs){
      console.log(notf)
      if(notf.index == index){
        notf.lido = true
      }
    }
     
  }
}
