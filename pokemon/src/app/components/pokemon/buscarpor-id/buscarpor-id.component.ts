import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../_services/pokemon-service.service';

@Component({
  selector: 'app-buscarpor-id',
  templateUrl: './buscarpor-id.component.html',
  styles: []
})
export class BuscarporIdComponent implements OnInit {

  pokemon = [];
  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
  }

  busquedaPorId(id: number) {
    this.pokemonService.getPokemonbyId(id)
    // tslint:disable-next-line: deprecation
    .subscribe((data: any[]) => {
      console.log(data);
      console.log(id);
      this.pokemon = data;
    });
  }
}
