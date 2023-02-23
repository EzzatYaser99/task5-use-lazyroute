import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {config} from "rxjs";
import {HomeComponent} from "./pages/home/home.component";
import {CalcComponent} from "./pages/calc/calc.component";
import {AboutComponent} from "./pages/about/about.component";
import {ErrorComponent} from "./pages/error/error.component";
import {SettingComponent} from "./pages/setting/setting.component";
import {CartComponent} from "./pages/cart/cart.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'calc', loadChildren: () => import('./pages/calc/calc.module').then(m => m.CalcModule)},
  {path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)},
  {path: 'cart',loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)},
  {path: 'setting', component: SettingComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'error'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
