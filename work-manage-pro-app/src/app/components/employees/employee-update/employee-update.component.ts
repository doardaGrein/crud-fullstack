import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { I18nService } from 'src/app/services/i18n.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employee: Employee;
  employeeId: number;
  isEditable: boolean = true;
  isActive: boolean = true;
  currentLanguage: string;
  departmentPlaceholder: string = '';

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    public i18nService: I18nService
  ) {
    this.employee = new Employee();
    this.employeeId = 0;
    this.currentLanguage = 'TRANSLATIONS_PT';
  }

  ngOnInit(): void {
    this.departmentPlaceholder = this.i18nService.getTranslation('enterYourDepartment');
    this.route.paramMap.subscribe(params => {
      this.employeeId = Number(params.get('id'));
      this.loadEmployee();
    });
  }

  loadEmployee(): void {
    this.employeeService.getEmployee(this.employeeId).subscribe(
      {
        next: (employee: Employee) => {
          this.employee = employee;
        // Verificar se o funcionário está ativo ou não
        this.isActive = employee.active;
        this.isEditable = this.isActive;
        },
        error: (error: any) => {
          console.log(`{ i18nService.getTranslation('errorRetrievingEmployee') }`, error)
        }
      }
    );
  }

  onSubmit(): void {
    if (this.employeeId > 0) {
      this.employeeService.updateEmployee(this.employee).subscribe(
        {
          next: () => {
            console.log(`{ i18nService.getTranslation('employeeUpdatedSuccessfully') }`);
            this.router.navigate(['/employees/list']);
          },
          error: (error: any) => {
            console.log(`{ i18nService.getTranslation('errorUpdatingEmployee') }`, error);
          }
        }
      );
    }
  }

  goToList(): void {
    this.router.navigate(['/employees/details', this.employee.id]);
  }

  deactivateEmployee(): void {
    if (this.employee) {
      // Definir o campo 'active' como falso
      this.employee.active = false;
      this.employeeService.updateEmployee(this.employee).subscribe(
        {
          next: () => {
            console.log(`{ i18nService.getTranslation('employeeDeactivatedSuccessfully') }`);
            this.isActive = false;
          },
          error: (error: any) => {
            console.log(`{ i18nService.getTranslation('errorDeativatingEmployee') }`, error);
          }
        }
      );
    }
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
