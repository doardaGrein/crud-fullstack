import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

import { I18nService } from './../../../services/i18n.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;

  currentLanguage: string = 'TRANSLATIONS_PT';

  constructor(
    public i18nService: I18nService,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.employee = new Employee();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const employeeId = Number(params.get('id'));
      this.getEmployeeDetails(employeeId);
    });
  }

  // obter detalhes do funcionário
  getEmployeeDetails(employeeId: number): void {
    this.employeeService.getEmployee(employeeId).subscribe(
      {
        next: (employee: Employee) => {
          this.employee = employee;
        },
        error: (error: any) => {
          console.log('Error retrieving employee details:', error);
        }
      }
    );
  }

  // botão editar funcionário por id
  editEmployee(): void {
    if (this.employee) {
      this.router.navigate(['/employees/edit', this.employee.id]);
    }
  }

  // botão voltar para a lista de funcionários
  goToList(): void {
    this.router.navigate(['/employees/list']);
  }

  // alterar o status do funcionário
  toggleEmployeeStatus(): void {
    const employeeId = this.employee.id;
    if (this.employee.active) {
      this.deactivateEmployee(employeeId);
    } else {
      this.activateEmployee(employeeId);
    }
  }

  activateEmployee(employeeId: number): void {
    this.employeeService.activateEmployee(employeeId)
      .subscribe(
        {
          next: (employee: Employee) => {
            this.employee = employee;
          },
          error: (error: any) => {
            console.log('Error activating employee:', error);
          }
        }
      );
  }

  deactivateEmployee(employeeId: number): void {
    this.employeeService.deactivateEmployee(employeeId)
      .subscribe(
        {
          next: (employee: Employee) => {
            this.employee = employee;
          },
          error: (error: any) => {
            console.log('Error deactivating employee:', error);
          }
        }
      );
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
