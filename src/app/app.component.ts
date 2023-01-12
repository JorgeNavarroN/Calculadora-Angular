import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';

  booleanIdOperation:boolean = true;
  booleanIdIqual:boolean = true;

  punto:string = ".";
  uno:number = 1;
  dos:number = 2;
  tres:number = 3;
  cuatro:number = 4;
  cinco:number = 5;
  seis:number = 6;
  siete:number = 7;
  ocho:number = 8;
  nueve:number = 9;
  cero:number = 0;

  suma:string = "+";
  resta:string = "-";
  multiplicacion = "*";
  division:string = "/";

  inputPlaceNumber:string = "";
  labelPlaceNumber: string[] = ["","",""];


  numero1:number=0;
  numero2:number=0;
  resultado:number=0;

  sumar():void {
    this.guardandoNumerosIngresados();
    this.labelPlaceNumber[1] = this.suma;
    this.inputPlaceNumber = "";
  }

  restar():void {
    this.guardandoNumerosIngresados();
    this.labelPlaceNumber[1] = this.resta;
    this.inputPlaceNumber = "";

  }

  multiplicar():void {
    this.guardandoNumerosIngresados();
    this.labelPlaceNumber[1] = this.multiplicacion;
    this.inputPlaceNumber = "";

  }

  dividir():void {
    this.guardandoNumerosIngresados();
    this.labelPlaceNumber[1] = this.division;
    this.inputPlaceNumber = "";

  }

  allClean():void {
    this.inputPlaceNumber = "";
    this.labelPlaceNumber[0] = "";
    this.labelPlaceNumber[1] = "";
    this.labelPlaceNumber[2] = "";
    this.numero1 = 0;
    this.numero2 = 0;
  }

  delete():void {
    this.inputPlaceNumber = this.inputPlaceNumber.slice(-this.inputPlaceNumber.length,-1);
  }

  retornarNumero(numero:number){
    this.inputPlaceNumber = this.inputPlaceNumber + numero.toString();
    if (this.booleanIdIqual == false) {
      this.inputPlaceNumber = numero.toString();
      this.booleanIdIqual = true;
    }
  }

  retornarPunto(punto:string){
    this.inputPlaceNumber = this.inputPlaceNumber + punto;
  }

  guardandoNumerosIngresados(){

    if (this.booleanIdOperation == true) {
      this.numero1 = Number(this.inputPlaceNumber);
      this.labelPlaceNumber[0] = this.numero1.toString();
      this.labelPlaceNumber[2] = "";
      //console.log(this.numero1);
      this.booleanIdOperation = false;
    } else {
      this.numero2 = Number(this.inputPlaceNumber);
      this.labelPlaceNumber[2] = this.numero2.toString();
      //console.log(this.numero2);
      this.booleanIdOperation = true;
    }
  }

  iqualOparation(){

    this.guardandoNumerosIngresados();

    if (this.labelPlaceNumber[1] == "+") {
      this.resultado = this.numero1 + this.numero2;
      //console.log(this.resultado);
      this.inputPlaceNumber = this.resultado.toString();

    } else if (this.labelPlaceNumber[1] == "-") {
      this.resultado = this.numero1 - this.numero2;
      //console.log(this.resultado);
      this.inputPlaceNumber = this.resultado.toString();

    } else if (this.labelPlaceNumber[1] == "*") {
      this.resultado = this.numero1 * this.numero2;
      //console.log(this.resultado);
      this.inputPlaceNumber = this.resultado.toString();

    } else if (this.labelPlaceNumber[1] = "/") {
      this.resultado = this.numero1 / this.numero2;
      //console.log(this.resultado);
      this.inputPlaceNumber = this.resultado.toString();
    }
    this.booleanIdIqual = false;

  }

}
