
import { Component, OnInit, HostBinding } from '@angular/core';
import { FomentoService } from '../../../../_services/fomento.service';
import { User } from '../../../../_models';
import { UserService, AuthenticationService } from '../../../../_services';
import { first, delay } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

// import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styles: ['.example-full-width {width: 100%;}'],
  // providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-CL'}]
})
export class NuevoReporteDiarioComponent implements OnInit {

  estados = [];
  instrumentos = [];
  lineamientos = [];
  reportes = [];
  usuarios = [];
  currentUser: User;
  userFromApi: User;
  empadronados = [];
  empadronado = [];
  productor = '';
  faena = '';
  rut = '';
  idusuario: number ;





  // busquedaEmpadronado = 'tello';

 ;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private fomentoService: FomentoService,
    private http: HttpClient,
    private router: Router // redireccionar
    ) {
      this.currentUser = this.authenticationService.currentUserValue;
      // this.currentUser.id
    }


  ngOnInit() {



}
}





    // this.fomentoService.getFomentoEmpadronado(this.busquedaEmpadronado)
    //  .subscribe((data: any[]) => {
    //   console.log(data);
    //   this.empadronados = data;
    //  });

/*     this.fomentoService.getAllUsuarios()
     .subscribe((data: any[]) => {
       console.log(data);
       this.usuarios = data;
     }); */
/*     this.fomentoService.getUsuario(3)
     .subscribe((data: any) => {
       console.log(data);
       this.usuarios = data;
     }); */
