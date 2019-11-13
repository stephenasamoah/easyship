import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../shared/_models/user.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../shared/_services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  form: FormGroup;
  user: User;

  constructor(
    private fb: FormBuilder,
    private us: UserService
  ) {
  }

  ngOnInit() {
    // this.subscription = this.us.userShipmentChanged.subscribe(shipmentStatus => {
    //   if (shipmentStatus) {
    //     this.form.patchValue({
    //       accepts_shipments: shipmentStatus
    //     });
    //     console.log(this.form.value);
    //   }
    // });
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
