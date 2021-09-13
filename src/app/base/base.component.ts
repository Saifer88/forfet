import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.less']
})
export class BaseComponent implements OnInit {

  irpefValues = 
  [
    {label:'5%', value:'5'},
    {label:'15%', value:'15'}]

  gross: string = '50000';
  coef: string = '78.8';
  inps: string = '25,72';
  irpef: string = '5';
  spese: string = '0';

  constructor() { }

  ngOnInit(): void {
  }




}
