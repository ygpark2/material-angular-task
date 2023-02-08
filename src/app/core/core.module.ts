import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  imports: [
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: []
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import CoreModule modules in the AppModule only.`);
    }
  }

}
