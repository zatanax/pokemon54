import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

// import { FullCalendarModule } from '@fullcalendar/angular';



import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './components/home/home.module';
// import { AdminComponent } from './components/admin/admin.component';
// import { AdminModule } from './components/admin/admin.module';
import { LoginComponent } from './components/login/login.component';
import { LoginModule } from './components/login/login.module';
import { ErrorComponent } from './components/pages/error/error.component';
import { AboutComponent } from './components/pages/about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule  }  from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TutorialComponent } from './components/pages/tutorial/tutorial.component';
import { ConfiguracionComponent } from './components/pages/configuracion/configuracion.component';
import { NuevoReporteDiarioComponent } from './components/reportes/reporte-diario/nuevo/nuevo.component';
import { EditarReporteDiarioComponent } from './components/reportes/reporte-diario/editar/editar.component';
import { ListarReporteDiarioComponent } from './components/reportes/reporte-diario/listar/listar.component';
import { EliminarReporteDiarioComponent } from './components/reportes/reporte-diario/eliminar/eliminar.component';
import { ReporteReporteDiarioComponent } from './components/reportes/reporte-diario/reporte/reporte.component';
import { ListarbyuserComponent } from './components/reportes/reporte-diario/listarbyuser/listarbyuser.component';
import { EditarComponent } from './components/admin/usuarios/editar/editar.component';
import { ListarComponent } from './components/admin/oficinas/listar/listar.component';
import { AgregarComponent } from './components/admin/oficinas/agregar/agregar.component';
import { AgregarUsuarioComponent } from './components/admin/usuarios/agregar/agregar.component';
import { ConfiguracionAdminComponent} from './components/admin/configuracion/configuracion.component';
import { ListarUsuariosAdminComponent} from './components/admin/usuarios/listar/listar.component';
import { BuscarporIdComponent } from './components/pokemon/buscarpor-id/buscarpor-id.component';
import { BuscarpornombreComponent } from './components/pokemon/buscarpornombre/buscarpornombre.component';
import { BuscarporlevelComponent } from './components/pokemon/buscarporlevel/buscarporlevel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   // AdminComponent,
    LoginComponent,
    ErrorComponent,
    AboutComponent,
    TutorialComponent,
    ConfiguracionComponent,
    NuevoReporteDiarioComponent,
    EditarReporteDiarioComponent,
    ListarReporteDiarioComponent,
    EliminarReporteDiarioComponent,
    ReporteReporteDiarioComponent,
    ListarbyuserComponent,
    EditarComponent,
    ListarComponent,
    AgregarComponent,
    AgregarUsuarioComponent,
    ConfiguracionAdminComponent,
    ListarUsuariosAdminComponent,
    BuscarporIdComponent,
    BuscarpornombreComponent,
    BuscarporlevelComponent,
   // FullCalendarModule,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSliderModule,
    MatCardModule,

  //  MaterialModule,
  ],
// exports:[MatFormFieldModule,MatInputModule,MatButtonModule,MatCardModule],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
