import { Component, OnInit } from '@angular/core';

import { User } from '../../../../_models';
import { UserService, AuthenticationService } from '../../../../_services';

import { FomentoUsuarioModel, FomentoUsersModel } from './../../../../_models/fomento';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-listarbyuser',
  templateUrl: './listarbyuser.component.html',
  styles: []
})
export class ListarbyuserComponent implements OnInit {

  currentUser: User;
  userFromApi: User;
  reporteDiario =  [];

  ngOnInit(): void {  }

}
