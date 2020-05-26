import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { RegisterComponent } from './components/login-register/register/register.component';
import { LoginComponent } from './components/login-register/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './components/admin/admin.component';

// api-services
import { ApiServices } from './components/shared/api/api.services';
import { ApiHelper } from './components/shared/api/api.helper';

// routing
import { AppRoutingModule } from './app-routing.module';

// auth guard
import { AuthGuardService } from './components/shared/guard/auth-guard.service';
import { AdminGuardService } from './components/shared/guard/admin-guard.service';

// fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// primeng
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { SectionsGuardService } from './components/shared/guard/sections-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LoginRegisterComponent,
    HeaderComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    TooltipModule,
    ToastModule,
    MultiSelectModule,
    ProgressSpinnerModule,
    BlockUIModule
  ],
  providers: [ApiServices, ApiHelper, MessageService, AuthGuardService, AdminGuardService, SectionsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
