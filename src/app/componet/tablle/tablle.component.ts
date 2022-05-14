import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablle',
  templateUrl: './tablle.component.html',
  styleUrls: ['./tablle.component.css']
})
export class TablleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'projectName';
  productStatus: boolean = false;
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
  onclick(){
    console.log('Đã click')
    this.productStatus= !this.productStatus
  }
  onremove(id:number){
    console.log(id)
    this.productsList= this.productsList.filter(item => item.id !==id);
    
  }
  onHandleKeyPress(event: any) {
    console.log(event.target.value);
    this.title = event.target.value;
  }
}
