import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intercepcion',
  templateUrl: './intercepcion.component.html',
  styleUrls: ['./intercepcion.component.css']
})
export class IntercepcionComponent implements OnInit {

  public numeros_intercepcion: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  calcular(a: any, b: any) {

    let values = this.findCircleCollisions(a, b);
    this.numeros_intercepcion = values;
    console.log(values);
  }

  findCircleCollisions(a: any, b: any) {
    var setA = new Set(a);
    var setB = new Set(b);
    var intersection = new Set([...setA].filter(x => setB.has(x)));
    return Array.from(intersection);
  }
}
