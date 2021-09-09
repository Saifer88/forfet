import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.less']
})
export class BaseComponent implements OnInit {

  irpefRadioButtonValues = 
  [
    {label:'5%', value:5},
    {label:'15%', value:15}]

  gross: string = '';
  coef: string = '';
  inps: string = '25,72';
  irpef: string = '';
  payedInps: number = 0;
  payedIrpef: number = 0;
  spese: string = '0';
  imponibile: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  net() {
    this.imponibile = (parseInt(this.gross) / 100 * parseInt(this.coef)) - parseInt(this.spese);
    this.payedInps = this.imponibile / 100 * parseInt(this.inps);
    this.payedIrpef = this.imponibile / 100 * parseInt(this.irpef);

    return (parseInt(this.gross) - this.payedInps) - this.payedIrpef;
  }


}
