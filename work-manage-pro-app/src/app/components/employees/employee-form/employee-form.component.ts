import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { I18nService } from 'src/app/services/i18n.service';

import { Employee } from './../../../models/employee.model';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee;
  employeeForm: FormGroup;
  currentLanguage: string;

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private router: Router,
    public i18nService: I18nService
  ) {
    this.employee = new Employee();
    this.currentLanguage = 'TRANSLATIONS_PT';
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      department: ['', Validators.required],
      position: ['', Validators.required],
      salary: [0, Validators.required],
      age: [0, Validators.required],
    });
  }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      position: ['', Validators.required],
      salary: [0, Validators.required],
      age: [0, Validators.required],
      active: [false]
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const employee: Employee = this.employeeForm.value;
      alert(JSON.stringify(employee));
      this.employeeService.save(employee).subscribe(
        {
          next: () => {
            console.log('Employee created successfully!');
            this.router.navigate(['/employees/list']);
          },
          error: (err: any) => {
            console.log('Error creating employee: ', err);
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
