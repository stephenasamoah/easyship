import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../_models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  latestShipmentStatus$: boolean;
  private userShipmentSubject$ = new BehaviorSubject<boolean>(this.latestShipmentStatus$);
  userShipmentChanged = this.userShipmentSubject$.asObservable();

  private userSubject$ = new Subject<User>();
  userChanged = this.userSubject$.asObservable();

  setShipmentData(shipmentStatus: boolean) {
    this.latestShipmentStatus$ = shipmentStatus;
    this.userShipmentSubject$.next(shipmentStatus);
  }

  setUserData(user: User) {
    this.userSubject$.next(user);
  }
}
