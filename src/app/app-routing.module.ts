import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(module => module.WelcomeModule) },
  { path: 'setup', loadChildren: () => import('./setup/setup.module').then(module => module.SetupModule) },
  { path: 'completed', loadChildren: () => import('./completed/completed.module').then(module => module.CompletedModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
