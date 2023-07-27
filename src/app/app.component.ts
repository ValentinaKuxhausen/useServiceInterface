import { Component } from '@angular/core';
//hier werden die Klassen importiert, damit diese Component darauf zugreifen kann
import { Contract1 } from './models/contract1';
import { Contract2 } from './models/contract2';
//hier wird der Service mit derselben Konditionen für alle Verträge im portiert
import { CommonConditionService } from './services/common-condition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'useServiceInterface';

  //Details recherchieren, auf diese properties kann ich im html-Template zugreifen
  contract1Data: Contract1;
  contract2Data: Contract2;

  //Service-property muss public sein
  constructor(public commonconditionservice: CommonConditionService) {
    this.contract1Data = new Contract1();
    this.contract2Data = new Contract2();

    this.contract1Data.deliveryCondition;
    this.contract2Data.deliveryCondition;
  }
}
