import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

import { Employee } from './../../../models/employee.model';
import { I18nService } from 'src/app/services/i18n.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  selectedEmployee: Employee | undefined;
  currentLanguage: string;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    public i18nService: I18nService,
  ) {
    this.currentLanguage = 'TRANSLATIONS_PT';
  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getAll().subscribe(
      {
        next: (employees: Employee[]) => {
            this.employees = employees;
        },
        error(err: any): void {
          console.log('Erro ao buscar dados: ', err);
        }
      }
    );
  }

  openEditForm(employee: Employee) {
    const editUrl = '/employees/edit/' + employee.id;
    this.router.navigate([editUrl]);
  }

  showDetails(employee: Employee) {
    const edtailsUrl = '/employees/details/' + employee.id;
    this.router.navigate([edtailsUrl]);
  }

  // INTERNACIONALIZACAO
  changeLanguage(language: string, event: Event): void {
    event.preventDefault();
    this.i18nService.setCurrentLanguage(language);
  }

  getTranslation(key: string): string {
    return this.i18nService.getTranslation(key);
  }

}
