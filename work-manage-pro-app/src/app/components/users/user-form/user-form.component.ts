import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from 'src/app/models/user.model';
import {I18nService} from 'src/app/services/i18n.service';
import {UserService} from 'src/app/services/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  currentLanguage: string;
  model = new User();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    public i18nService: I18nService,
    public router: Router
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.currentLanguage = 'TRANSLATIONS_PT';
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    const user: User = {
      id: null || 0,
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      creationDate: this.userForm.value.creationDate,
      authStatus: ''
    };
    this.userService.createUser(user).subscribe(
      {
        next: (value) => {
          this.model = <any>value;
          window.sessionStorage.setItem("userdetails", JSON.stringify(value));
          this.model.authStatus = 'AUTH';
          console.log('Usuário cadastrado com sucesso!', value);
          this.router.navigate(['/dashboard']);
        },
        error(err) {
          console.log('Erro ao cadastrar usuário: ', err);
        },
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
