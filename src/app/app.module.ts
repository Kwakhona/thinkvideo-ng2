import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AppComponent} from './app.component';
import {ComponentsModule} from './components/components.module';
import {routes} from './app.routes';
import {RouterModule} from '@angular/router';
import {SharedModule} from './components/shared.module';
import {LocalStorageModule} from 'angular-2-local-storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes, {useHash: true}),
    ComponentsModule,
    SharedModule,
    LocalStorageModule.withConfig({
      storageType: 'localStorage'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ComponentsModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
