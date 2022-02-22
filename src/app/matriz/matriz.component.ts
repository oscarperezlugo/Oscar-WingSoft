import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css']
})
export class MatrizComponent implements OnInit {

  public numeros_matriz: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  calcular(elementos: any, t: any){
      
      this.printMatrix(elementos, t);
  }

  printMatrix(list: [], elementsPerSubArray: any) {
    var matrix = [], i, k;
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    console.log(matrix);

    this.numeros_matriz = matrix;
  }

}
