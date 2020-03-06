import { FomentoService } from './../../../_services/fomento.service';
import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: import-spacing
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosListaAdminComponent implements OnInit {

  usuarios  = [];
  constructor(
    private fomentoService: FomentoService) { }

    ngOnInit() {

    }
  }

