import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

@Input() sideNavStatus: boolean = false;

list = [
  {
    number:'1',
    name:'project',
    icon:'fa-regular fa-rectangle-list fa-xl',
    routerLink:'/project'
  }
]
}
