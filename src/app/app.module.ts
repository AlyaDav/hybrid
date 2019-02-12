import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AngularComponent } from './components/angular/angular.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    PageNotFoundComponent
  ],
  imports: [
    MatInputModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'angular_a', pathMatch: 'full' },
      { path: 'angular_a', component: AngularComponent },
      { path: 'angularjs_a', loadChildren: './angularjs.module#AngularJSModule' },
      { path: '404', component: PageNotFoundComponent },
      { path: '**', redirectTo: '404' }
      
    ],
      {
        enableTracing: true,//трассировку, которая будет печатать каждое отдельное событие в консоли.
        preloadingStrategy: PreloadAllModules //стратегию предварительной загрузки
      }
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
