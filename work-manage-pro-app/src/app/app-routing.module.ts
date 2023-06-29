import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './components/employees/employee-details/employee-details.component';
import { EmployeeFormComponent } from './components/employees/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './components/employees/employee-update/employee-update.component';
import { AccountingComponent } from './components/finances/accounting/accounting.component';
import { ProductDetailsComponent } from './components/inventory/product-details/product-details.component';
import { ProductFormComponent } from './components/inventory/product-form/product-form.component';
import { ProductListComponent } from './components/inventory/product-list/product-list.component';
import { LoginComponent } from './components/login/login.component';
import { SupplierDetailsComponent } from './components/suppliers/supplier-details/supplier-details.component';
import { SupplierFormComponent } from './components/suppliers/supplier-form/supplier-form.component';
import { SupplierListComponent } from './components/suppliers/supplier-list/supplier-list.component';
import { ChangePasswordComponent } from './components/users/change-password/change-password.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactComponent },

  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users/change-password', component: ChangePasswordComponent },
  { path: '', redirectTo: '/login', pathMatch:'full' },
  { path: 'users/register', component: UserFormComponent },
  { path: 'employees/list', component: EmployeeListComponent },
  { path: 'employees/details/:id', component: EmployeeDetailsComponent },
  { path: 'employees/form', component: EmployeeFormComponent },
  { path: 'employees/edit/:id', component: EmployeeUpdateComponent },

  { path: 'finances/accounting', component: AccountingComponent },

  { path: 'inventories/products/form', component: ProductFormComponent },
  { path: 'inventories/products/details', component: ProductDetailsComponent },
  { path: 'inventories/products/list', component: ProductListComponent },

  { path: 'suppliers/form', component: SupplierFormComponent },
  { path: 'suppliers/details', component: SupplierDetailsComponent },
  { path: 'suppliers/list', component: SupplierListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
