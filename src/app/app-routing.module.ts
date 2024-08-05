import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from "./views/home-page/home-page.component";
import { ProductPageComponent } from "./views/product-page/product-page.component";
import {ProductCreateComponent} from "./components/product/product-create/product-create.component";
import {ProductUpdateComponent} from "./components/product/product-update/product-update.component";
import {ProductDeleteComponent} from "./components/product/product-delete/product-delete.component";
import {ClientPageComponent} from "./views/client-page/client-page.component";
import {ClientCreateComponent} from "./components/client/client-create/client-create.component";
import {ClientUpdateComponent} from "./components/client/client-update/client-update.component";
import {ClientDeleteComponent} from "./components/client/client-delete/client-delete.component";
import {LoginComponent} from "./components/login/login/login.component";
import {RegisterComponent} from "./components/register/register/register.component";
import {AuthGuard} from "./components/auth/auth.guard";

const routes: Routes = [
  { path: "", component: HomePageComponent, canActivate: [AuthGuard] },
  { path: "products", component: ProductPageComponent, canActivate: [AuthGuard] },
  { path: "clients", component: ClientPageComponent, canActivate: [AuthGuard] },
  { path: "products/create", component: ProductCreateComponent, canActivate: [AuthGuard] },
  { path: "clients/create", component: ClientCreateComponent, canActivate: [AuthGuard] },
  { path: "products/update/:id", component: ProductUpdateComponent, canActivate: [AuthGuard] },
  { path: "clients/update/:id", component: ClientUpdateComponent, canActivate: [AuthGuard] },
  { path: "products/delete/:id", component: ProductDeleteComponent, canActivate: [AuthGuard] },
  { path: "clients/delete/:id", component: ClientDeleteComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
