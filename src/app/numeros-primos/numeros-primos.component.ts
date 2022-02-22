import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros-primos',
  templateUrl: './numeros-primos.component.html',
  styleUrls: ['./numeros-primos.component.css']
})
export class NumerosPrimosComponent implements OnInit {

  public numeros_primos: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  calcular(max: any) {

    var c = 100;
    var j = 2;
    var numerosPrimos = [];

    for (; j < c; j++) {


      if (numerosPrimos.length < max) {
        if (this.printPrimes(j)) {
          numerosPrimos.push(j);

        }

      } else {
        break;
      }

    }

    console.log(numerosPrimos);
    this.numeros_primos = numerosPrimos;
  }

  public printPrimes(num: any) {
    for (let i = 2; i * i <= num; i++)
      if (num % i === 0)
        return false;
    return num > 1;
  }

}
