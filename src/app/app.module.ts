import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { RegisterDonComponent } from './register-don/register-don.component';
import { RegisterBenComponent } from './register-ben/register-ben.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DesicionComponent } from './desicion/desicion.component';
import { ItemsComponent } from './items/items.component';
import { CardsComponent } from './cards/cards.component';
import { WeComponent } from './we/we.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { DocumentsBenComponent } from './documents-ben/documents-ben.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CreateItemComponent } from './create-item/create-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Page404Component,
    RegisterDonComponent,
    RegisterBenComponent,
    NavBarComponent,
    CarouselComponent,
    DesicionComponent,
    ItemsComponent,
    CardsComponent,
    WeComponent,
    ContactComponent,
    FooterComponent,
    DocumentsBenComponent,
    ItemDetailComponent,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
