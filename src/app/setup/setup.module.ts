import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SetupComponent } from './setup.component';
import { UiModule } from '../../ui-components/ui.module';

const routes: Routes = [
  { path: '', component: SetupComponent }
];

@NgModule({
  declarations: [
    SetupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule
  ],
  exports: [RouterModule]
})
export class SetupModule {
}
