import { Component } from '@angular/core';

import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})

export class UncommonPageComponent {
  public name:string = 'Ornella';
  public gender: 'male'|'female'|'other' = 'female'; 
  public invitationMap = {
    'male' : 'man',
    'female' : 'woman'
  }
  public clientsMap = {
    '=0':'No clients left',
    '=1':'client',
    'other':'clients'
  }
  public clients:string[] = ["Ornella", "Paula", "Florencia", "Camila"];
  public person = {
    'name':'Ornella',
    'age':19
  }
  public changeClient(){
    this.name = 'Fernando'
    this.gender = 'male'
  }

  public removeClient(){
    this.clients.pop()
  }

  public myObservableTimer = interval(2000).pipe(
    tap((value)=>{console.log(value)})
  )
}
