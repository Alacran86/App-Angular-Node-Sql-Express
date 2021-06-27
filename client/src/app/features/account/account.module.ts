import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoadingComponent } from './../../core/common/loading/loading.component';




@NgModule({
  declarations: [LoginComponent, RegistroComponent, LoadingComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  exports: [LoginComponent, RegistroComponent, LoadingComponent]
})
export class AccountModule { }
