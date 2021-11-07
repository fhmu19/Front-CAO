import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DesicionComponent } from './desicion/desicion.component';
import { DocumentsBenComponent } from './documents-ben/documents-ben.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RegisterBenComponent } from './register-ben/register-ben.component';
import { RegisterDonComponent } from './register-don/register-don.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { WeComponent } from './we/we.component';
import { CreateItemComponent } from './create-item/create-item.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'registerDon', component: RegisterDonComponent},    
  {path: 'registerBen', component: RegisterBenComponent},
  {path: 'desicion', component: DesicionComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'we', component: WeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'documentsBen', component: DocumentsBenComponent},
  {path: 'item-detail', component: ItemDetailComponent},
  {path: 'create-item', component: CreateItemComponent},
  {path: '**', component: Page404Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
