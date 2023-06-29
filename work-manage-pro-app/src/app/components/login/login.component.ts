import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { I18nService } from 'src/app/services/i18n.service';
import { UserService } from 'src/app/services/user.service';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  currentLanguage: string;
  email: string = '';
  password: string  = '';
  errorMessage: string = '';
  authStatus: string = "";
  model = new User();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public i18nService: I18nService,
    private userService: UserService
  ) {
    this.currentLanguage = 'TRANSLATIONS_PT';
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit( ): void { }

  onSubmit() {

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (this.loginForm.invalid) {
      return;
    }

    this.userService.login(email, password).subscribe(
        {
          next: (success) => {
            if (success) {
              // Redirecionar para a página de dashboard após o login bem-sucedido
              // this.model = <any> responseData.body;
              window.sessionStorage.setItem("userdetails",JSON.stringify(this.model));
              this.model.authStatus = 'AUTH';
              this.router.navigate(['/dashboard']);
            } else {
              // Autenticação falhou
              console.log('Usuário ou senha inválidos');
            }
          },
          error(err) {
            console.log('Erro ao autenticar usuário: ', err);
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
