import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
 
import {module} from './angularjsapp';
import {UpgradeModule} from '@angular/upgrade/static'; // for hybrid
import {setUpLocationSync} from '@angular/router/upgrade'; // Устанавливает синхронизацию местоположения.

@Component({template: `page net`})
export class EmptyComponent {}
 
@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    UpgradeModule,
    RouterModule.forChild([ //не включает службу маршрутизатора
      {path: 'angularjs_a', component: EmptyComponent}
    ])
  ]
})
export class AngularJSModule {
  // The constructor is called only once, so we bootstrap the application
  // only once, when we first navigate to the legacy part of the app.
  constructor(upgrade: UpgradeModule) { 
    upgrade.bootstrap(document.body, [module.name]); // Bootstrap an AngularJS application from this NgModule
    setUpLocationSync(upgrade);
  }
}