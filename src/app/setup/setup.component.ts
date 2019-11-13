import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/_models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/_services/user.service';
import { Address } from '../../shared/_models/address.model';
import { Plan } from '../../shared/_models/plan.model';
import { PhoneNumberValidator, UserValidators } from '../../shared/_validators/user.validators';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  form: FormGroup;
  user: User;

  constructor(
    private fb: FormBuilder,
    private us: UserService,
    private uv: UserValidators
  ) {
    this.form = this.createForm(this.user);
  }

  ngOnInit() {
  }

  private createForm(user?: User): FormGroup {
    user = user || {} as User;
    user.address = user.address || {} as Address;
    user.plan_type = user.plan_type || {} as Plan;

    const confirmPassword = this.uv.matchPassword('password', 'password_confirm');

    return this.fb.group({
      account_info: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: this.fb.control('', {
          validators: [Validators.required, Validators.minLength(8)]
        }),
        password_confirm: this.fb.control('', {
          validators: [Validators.required]
        })
      }, {
        validators: confirmPassword
      }),
      personal_info: this.fb.group({
        date_of_birth: ['', [Validators.required]],
        gender: [''],
        phone_number: ['', [Validators.required, PhoneNumberValidator('US')]]
      }),
      address: this.fb.group({
        address_line_1: ['', [Validators.required]],
        address_line_2: ['', [Validators.required]],
        postal_code: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]]
      }),
      accepts_shipments: ['', [Validators.required]],
      plan_type: ['', [Validators.required]]
    });
  }
}
