import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiWizardComponent } from './ui-wizard/ui-wizard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [UiWizardComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
  ],
  exports: [
    UiWizardComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
  ]
})
export class UiModule {
}
