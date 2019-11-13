import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/_models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/_services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  form: FormGroup;
  user: User;

  shipmentStatus: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private us: UserService
  ) {
    this.form = this.createForm(this.user);
  }

  ngOnInit(): void {
  }

  private createForm(user?: User): FormGroup {
    user = user || {} as User;

    return this.fb.group({
      accepts_shipments: [user.accepts_shipments, [Validators.required]]
    });
  }

  shipmentHandler() {
    if (!this.form.valid) {
      return;
    }

    this.shipmentStatus = this.form.controls.accepts_shipments.value;
    this.us.setShipmentData(this.shipmentStatus);

    this.router.navigate(['/setup']);
  }

}
