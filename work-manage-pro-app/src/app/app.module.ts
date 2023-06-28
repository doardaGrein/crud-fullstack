import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './components/employees/employee-details/employee-details.component';
import { EmployeeFormComponent } from './components/employees/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './components/employees/employee-update/employee-update.component';
import { AccountingComponent } from './components/finances/accounting/accounting.component';
import { ProductDetailsComponent } from './components/inventory/product-details/product-details.component';
import { ProductFormComponent } from './components/inventory/product-form/product-form.component';
import { ProductListComponent } from './components/inventory/product-list/product-list.component';
import { SupplierDetailsComponent } from './components/suppliers/supplier-details/supplier-details.component';
import { SupplierFormComponent } from './components/suppliers/supplier-form/supplier-form.component';
import { SupplierListComponent } from './components/suppliers/supplier-list/supplier-list.component';
import { EmployeeService } from './services/employee.service';
import { I18nService } from './services/i18n.service';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChangePasswordComponent } from './components/users/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeFormComponent,
    SupplierListComponent,
    SupplierDetailsComponent,
    SupplierFormComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    AccountingComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeUpdateComponent,
    UserFormComponent,
    LoginComponent,
    DashboardComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    I18nService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
