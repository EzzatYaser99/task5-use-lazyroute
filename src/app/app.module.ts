import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FooterModule} from "./component/footer/footer.module";

import { ScrollTopComponent } from './component/scroll-top/scroll-top.component';

import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import {HomeModule} from "./pages/home/home.module";
import {AboutModule} from "./pages/about/about.module";
import {CalcModule} from "./pages/calc/calc.module";
import { MenuComponent } from './component/menu/menu.component';
import {MenuModule} from "./component/menu/menu.module";
import { SettingComponent } from './pages/setting/setting.component';
import { CartComponent } from './pages/cart/cart.component';
import {MenuItem} from 'primeng/api';
import {MenubarModule} from "primeng/menubar";
@NgModule({
  declarations: [
    AppComponent,
    ScrollTopComponent,
    ScrollTopComponent,
    HomeComponent,
    ErrorComponent,
    MenuComponent,
    SettingComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FooterModule, MenuModule, HomeModule, AboutModule, CalcModule, MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {





}
