import {Component, Input} from '@angular/core';
import {FooterInfo} from "../footer/FooterInfo";
import {ScrollInfo} from "./ScrollInfo";

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent {

  @Input()
  ScrollIconData: Array<ScrollInfo> | undefined;
  topFunction($event: MouseEvent, myBtn: HTMLButtonElement) {
    $event.preventDefault();
     /* document.body.scrollTop = 0;*/

      document.documentElement.scrollTop = 0;
    }



}
