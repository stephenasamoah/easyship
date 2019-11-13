import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlLink } from '../../shared/_models/control-link';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserValidators } from '../../shared/_validators/user.validators';

@Component({
  selector: 'app-ui-wizard',
  templateUrl: './ui-wizard.component.html',
  styleUrls: ['./ui-wizard.component.scss']
})
export class UiWizardComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  @Input() form: FormGroup;

  stepsTracker: Array<() => boolean> = [];

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

  private personalInfoValidator() {
    return this.form.get('personal_info').valid;
  }

  private addressValidator() {
    return this.form.get('address').valid;
  }

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

  maskDob(e: any) {
    const dateInput = e.target.value;

    if (dateInput.match(/^\d{2}$/) !== null) {
      e.target.value = dateInput + '/';
    } else if (dateInput.match(/^\d{2}\/\d{2}$/) !== null) {
      e.target.value = dateInput + '/';
    }
  }

  register() {
    console.log(this.form.value);
  }
}
