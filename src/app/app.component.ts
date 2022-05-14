import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectName';
  productsList: {id: number, name: string,price: number,status: boolean}[]=[
    {
      id:1,
      name: 'Project Name',
      price: 1,
      status: false
    },
    {
      id:2,
      name: 'Project Name B',
      price: 1,
      status: true
    }
  ]
}
