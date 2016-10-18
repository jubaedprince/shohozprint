import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent }   from './app.component';
import { MainMenuComponent } from './main-menu.component';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MainMenuComponent, HomeComponent, SliderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
