import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-forfet-result-view',
  templateUrl: './forfet-result-view.component.html',
  styleUrls: ['./forfet-result-view.component.less']
})
export class ForfetResultViewComponent implements OnInit, OnChanges {

  @Input() gross: string = '';
  @Input() coef: string = ''
  @Input() spese: string = '';
  @Input() inps: string = '';
  @Input() irpef: string = '';
  
  
  imponibile: number = 0;
  payedInps: number = 0;
  payedIrpef: number = 0;
  net: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("changing");
    
    this.imponibile = (parseInt(this.gross) / 100 * parseInt(this.coef)) - parseInt(this.spese);
    this.payedInps = this.imponibile / 100 * parseInt(this.inps);
    this.payedIrpef = this.imponibile / 100 * parseInt(this.irpef);

    this.net =  (parseInt(this.gross) - this.payedInps) - this.payedIrpef;
  }

}
