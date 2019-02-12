import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //Создает модуль со всеми провайдерами и директивами маршрутизатора
  exports: [RouterModule]
})
export class AppRoutingModule { }
