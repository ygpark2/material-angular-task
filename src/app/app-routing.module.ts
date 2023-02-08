import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {NotFoundComponent} from './layouts/not-found/not-found.component';

import {CONTENT_ROUTES} from './shared';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/tasks'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [], // Should be replaced with actual auth guard
    children: CONTENT_ROUTES
  },
  // Fallback when no prior routes is matched
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
