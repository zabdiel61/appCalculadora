import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

   num:number = 0;
   num2:number = 0;
   total:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  suma(){
    this.total = Number(this.num) + Number(this.num2);
  }

}
