import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

//dieser Service muss in die module.ts in providers eingefügt werden
export class CommonConditionService {
  //normalerweise sind das BE Daten, fest für alle Verträge
  paymentCondition = 'netto 30 Tage';

  constructor() {}
}
