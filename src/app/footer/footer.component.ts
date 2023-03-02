import { Component } from '@angular/core';
import { faCheckDouble, faHome, faMessage } from '@fortawesome/free-solid-svg-icons';
import {  faFacebook } from "@fortawesome/fontawesome-free-brands";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  home=faHome;
  facebook=faFacebook;
  message=faMessage;
  check=faCheckDouble;
}
