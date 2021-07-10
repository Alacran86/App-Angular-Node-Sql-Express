import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/services/swal.service';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private service: RegistroService, private swal: SwalService, private router: Router) { }
  loaded: boolean = false;
  formObject: any = {
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    pass: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    mail: new FormControl('', [
      Validators.email,
      Validators.minLength(3),
      Validators.maxLength(30)
    ])
  }
  form: FormGroup = new FormGroup(this.formObject);

  ngOnInit(): void {
    this.form = new FormGroup(this.formObject);
    setTimeout(() => this.loaded = true, 2000);

  }
  async register() {
    try {
      const result: any = await this.service.new(this.form.value);
      console.log(result);
      this.swal.normalMessage({ html: 'Registrado chequee su mail', timer: 5000 });
      this.router.navigate(['login']);
    }
    catch (e) {
      this.swal.normalMessage({ html: 'Error con el registro', icon: 'error', timer: 5000 });
    }
  }
  verifyInput(field: string): string {
    const input = this.form.controls[field];
    let message = ''
    input.status === 'INVALID' && input.touched ? (message = `${field} es obligatorio`) : '';
    return message;
  }

}
