import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.less']
})
export class BaseComponent implements OnInit {



  invoice = new FormGroup({
      total : new FormControl(''),
      redditPerc : new FormControl(''),
      inpsLastYear : new FormControl('0'),
      type : new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
