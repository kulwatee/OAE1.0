import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './module/login/login.component';
import { ProjectComponent } from './module/project/project.component';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './module/header/header.component';
import { SidenavComponent } from './module/sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { DataComponent } from './module/data/data.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectComponent,
    HeaderComponent,
    SidenavComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FontAwesomeModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatChipsModule
 
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
