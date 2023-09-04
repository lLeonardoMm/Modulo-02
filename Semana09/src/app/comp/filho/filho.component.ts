import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.scss']
})
export class FilhoComponent {
  @Input() filho: any;
  @Output() filhoProPai = new EventEmitter<any>();
  isLogIn= true
  constructor(){
    setTimeout(()=>{
      this.filhoProPai.emit('bom dia')
    }, 3000)
  } 
}
