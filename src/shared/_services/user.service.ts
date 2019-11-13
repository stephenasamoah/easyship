import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  latestShipmentStatus$: boolean;
  private userShipmentSubject$ = new BehaviorSubject<boolean>(this.latestShipmentStatus$);
  userShipmentChanged = this.userShipmentSubject$.asObservable();

  setUserData(shipmentStatus: boolean) {
    this.latestShipmentStatus$ = shipmentStatus;
    this.userShipmentSubject$.next(shipmentStatus);
  }
}
