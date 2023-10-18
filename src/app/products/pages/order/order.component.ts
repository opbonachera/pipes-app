import { Component } from '@angular/core';
import { Hero } from '../../interface/hero.interface';
import { Color } from '../../interface/hero.interface';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent {
  public name: string = 'ornella'
  public uppercase: boolean = false;
  public orderBy?: keyof Hero;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green,
    },
  ]
  toggleUpperCase(){
    this.uppercase = !this.uppercase
  }

  changeOrder( value: keyof Hero){
    this.orderBy = value;
  }
}
