import { Formation } from './../../models/formation';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-formation',
  templateUrl: './card-formation.component.html',
  styleUrls: ['./card-formation.component.scss']
})
export class CardFormationComponent implements OnInit {

  public formation: Formation = null;

  @Input('passFormation') set passFormation(value: Formation){
    this.formation = value;
    console.log(this.formation);
  }

  @Output() public clickShare: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
