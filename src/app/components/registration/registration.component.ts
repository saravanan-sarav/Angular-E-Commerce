import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  errors: string = 'Hellow';
  constructor(private storageService: StorageService) {}
  regForm = new FormGroup({
    userType: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  onSubmit() {
    console.log(this.regForm.value);
  }

  get firstName() {
    // console.log(this.firstName);

    return this.regForm.get('firstName');
  }
  get lastName() {
    return this.regForm.get('lastName');
  }
  get email() {
    return this.regForm.get('email');
  }
  get phoneNumber() {
    return this.regForm.get('phoneNumber');
  }
  get userType() {
    return this.regForm.get('userType');
  }
  get password() {
    return this.regForm.get('password');
  }
  get confirmPassword() {
    return this.regForm.get('confirmPassword');
  }

  registerUser(): void {
    let tempReg: User = { ...this.regForm.value, id: 2 } as User;
    this.storageService.registerUser(tempReg);
  }
}
