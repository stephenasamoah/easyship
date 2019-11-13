import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../shared/_models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../shared/_models/address.model';
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
    this.form = this.createForm(this.user);
  }

  ngOnInit() {
    this.subscription = this.us.userShipmentChanged.subscribe(shipmentStatus => {
      if (shipmentStatus) {
        this.form.patchValue({
          accepts_shipments: shipmentStatus
        });
        console.log(this.form.value);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private createForm(user?: User): FormGroup {
    user = user || {} as User;
    user.address = user.address || {} as Address;

    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirm: ['', [Validators.required, Validators.minLength(8)]],
      date_of_birth: ['', [Validators.required]],
      gender: [''],
      address: ['', [Validators.required]],
      accepts_shipments: [user.accepts_shipments, [Validators.required]],
      plan_type: ['', [Validators.required]]
    });
  }
}
