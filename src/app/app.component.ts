import { Component } from '@angular/core';
import {FooterInfo} from "./component/footer/FooterInfo";
import {ScrollInfo} from "./component/scroll-top/ScrollInfo";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task5';

  scrollIconInformation: Array<ScrollInfo> = [
    { icon:'pi-cog',herf:'setting' },
    {icon:'pi-shopping-cart', herf : 'cart'},
  ];

  socialMediaInformation: Array<FooterInfo> = [
    { socialMediaIcon:'fa-facebook-f' },
    {socialMediaIcon:'fa-google'},
    {socialMediaIcon:'fa-linkedin-in' },
    {socialMediaIcon:'fa-twitter' }
  ];

  openDaysInformation: Array<FooterInfo> = [
    { openDays:'Monday 10 AM-9PM' },
    {openDays:'Tuesday 10 AM-9PM'},
    {openDays:'Thursday 10AM - 10PM' },
    {openDays:'Friday 10AM - 10PM' },
    {openDays : ' Weekends 10AM - 11PM'}
  ];
  contactDetailsInformation: Array<FooterInfo> = [
    { contactDetailsIcon:'fa-map-marker-alt' ,contactDetailsCommand : 'Manchester Road 123-78B,Great liverpool '},
    { contactDetailsIcon:'fa-phone-alt' ,contactDetailsCommand : ' +46 123 456 789 '},
    { contactDetailsIcon:'fa-envelope-open-text' ,contactDetailsCommand : 'hello@sitename.com'},
    { contactDetailsIcon:'fa-globe-asia' ,contactDetailsCommand : 'http://www.sitename.com '},

  ];

}



