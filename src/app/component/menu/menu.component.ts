import {Component, Input} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {


  items = [

    {label : 'Home',routerLink : 'home',icon : 'pi pi-home' },
    {label : 'About',routerLink : 'about/about',icon : '' },


    {label : 'Tools', icon: 'pi pi-wrench',items : [

        {label : 'Calculator', icon : 'pi pi-calculator',routerLink : 'calc'},

      ]},
    {label : 'Cart', icon : 'pi pi-shopping-cart',routerLink : 'cart'},
    {label : 'Setting', icon : 'pi pi-cog',routerLink : 'setting'}
  ];



}
