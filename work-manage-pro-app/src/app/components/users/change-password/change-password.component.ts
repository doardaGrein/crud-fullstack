import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  changePasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.changePasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.changePasswordForm.invalid) {
      return;
    }

    const email = this.changePasswordForm.value.email;
    const oldPassword = this.changePasswordForm.value.oldPassword;
    const newPassword = this.changePasswordForm.value.newPassword;
    const confirmPassword = this.changePasswordForm.value.confirmPassword;

    if (newPassword !== confirmPassword) {
      console.log('As senhas não correspondem');
      return;
    }

    this.userService.changePassword(email, oldPassword, newPassword).subscribe(
      {
        next: (success) => {
          if (success) {
            // Senha alterada com sucesso
            console.log('Senha alterada com sucesso');
          } else {
            // Falha ao alterar a senha
            console.log('Falha ao alterar a senha');
          }
        },
        error: (error) => {
          console.log('Erro ao alterar a senha:', error);
        }
      }
    );

    // Limpar os campos do formulário
    this.changePasswordForm.reset();
  }

}
