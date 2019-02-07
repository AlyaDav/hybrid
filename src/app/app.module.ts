import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AngularComponent } from './components/angular/angular.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'angular_a', pathMatch: 'full'},
      {path: 'angular_a', component: AngularComponent},
      {path: '', loadChildren: './angularjs.module#AngularJSModule'}
    ],
    {
      enableTracing: true,
      preloadingStrategy: PreloadAllModules // ADD THIS!
    }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
