import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

menuStatus: boolean = false;
@Output() sideNavToggled = new EventEmitter<boolean>();

SideNavToggle(){
  this.menuStatus = !this.menuStatus;
  this.sideNavToggled.emit(this.menuStatus);
}

}



