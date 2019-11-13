import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '../../ui-components/ui.module';
import { CompletedComponent } from './completed.component';

const routes: Routes = [
  { path: '', component: CompletedComponent }
];

@NgModule({
  declarations: [CompletedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule
  ],
  exports: [RouterModule]
})

export class CompletedModule {
}
