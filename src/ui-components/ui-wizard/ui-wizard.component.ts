import { Component, Input, OnInit } from '@angular/core';
import { ControlLink } from '../../shared/_models/control-link';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/_models/user.model';
import { Address } from '../../shared/_models/address.model';
import { Plan } from '../../shared/_models/plan.model';
import { UserValidators } from '../../shared/_validators/user.validators';

@Component({
  selector: 'app-ui-wizard',
  templateUrl: './ui-wizard.component.html',
  styleUrls: ['./ui-wizard.component.scss']
})
export class UiWizardComponent implements OnInit {
  @Input() user: User;
  form: FormGroup;

  currentIndex = 0;
  steps: ControlLink[] = [];

  constructor(
    private fb: FormBuilder,
    private uv: UserValidators
  ) {
    this.form = this.createForm(this.user);
    this.steps = [
      { title: 'Account information' },
      { title: 'Personal info' },
      { title: 'Addresses' },
      { title: 'Subscription plan' }
    ];
  }

  ngOnInit() {
  }

  private createForm(user?: User): FormGroup {
    user = user || {} as User;
    user.address = user.address || {} as Address;
    user.plan_type = user.plan_type || {} as Plan;

    const confirmPassword = this.uv.matchPassword('password', 'password_confirm');

    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      password_confirm: this.fb.control('', {
        validators: [Validators.required],
        updateOn: 'blur'
      }),
      date_of_birth: ['', [Validators.required]],
      gender: [''],
      phone_number: ['', [Validators.required]],
      address: this.fb.group({
        address_line_1: [user.address.address_line_1, [Validators.required]],
        address_line_2: [user.address.address_line_2, [Validators.required]],
        postal_code: [user.address.postal_code, [Validators.required]],
        city: [user.address.city, [Validators.required]],
        state: [user.address.state, [Validators.required]]
      }),
      accepts_shipments: [user.accepts_shipments, [Validators.required]],
      plan_type: ['', [Validators.required]]
    }, {
      validators: confirmPassword
    });
  }

  register() {
    console.log(this.form.value);
  }
}
