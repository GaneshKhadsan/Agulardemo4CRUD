import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainbodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
