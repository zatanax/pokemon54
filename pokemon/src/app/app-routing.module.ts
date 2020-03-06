import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
// import { AdminComponent } from './components/admin/admin.component';
import { UsuariosListaAdminComponent} from './components/admin/usuarios/usuarios.component';
import { ConfiguracionComponent} from './components/pages/configuracion/configuracion.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TutorialComponent } from './components/pages/tutorial/tutorial.component';
import { BuscarporIdComponent } from './components/pokemon/buscarpor-id/buscarpor-id.component';
import { BuscarporlevelComponent  } from './components/pokemon/buscarporlevel/buscarporlevel.component';
import { BuscarpornombreComponent  } from './components/pokemon/buscarpornombre/buscarpornombre.component';
import { ListarbyuserComponent } from './components/reportes/reporte-diario/listarbyuser/listarbyuser.component';
import { AgregarUsuarioComponent } from './components/admin/usuarios/agregar/agregar.component';
import { ListarUsuariosAdminComponent } from './components/admin/usuarios/listar/listar.component';
import { ConfiguracionAdminComponent} from './components/admin/configuracion/configuracion.component';
import { AuthGuard } from './_helpers';
import { Role } from './_models';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
},
 {
     path: 'admin',
     component: ConfiguracionAdminComponent,
     canActivate: [AuthGuard],
     data: { roles: [Role.Admin] }
 },
 {
    path: 'pokemon/buscar/id',
    component: BuscarporIdComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
},
{
    path: 'pokemon/buscar/nombre',
    component: BuscarpornombreComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
},
{
    path: 'pokemon/buscar/nivel',
    component: BuscarporlevelComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
},



{
    path : 'admin/usuarios',
    component: UsuariosListaAdminComponent,
    canActivate : [AuthGuard],
    data: {roles: [Role.Admin]}

},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'Configuracion',
    component: ConfiguracionComponent
},
{
    path: 'about',
    component : AboutComponent
},
{
    path: 'tutorial',
    component : TutorialComponent
},



{path: 'admin/usuarios/agregar' , component: AgregarUsuarioComponent},
{path: 'admin/usuarios' , component: ListarUsuariosAdminComponent},

    // otherwise redirect to home
    { path: '**', component: LoginComponent}

];

// export class AppRoutingModule { }

export const AppRoutingModule = RouterModule.forRoot(routes);
