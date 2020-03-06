import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../_services/pokemon-service.service';
@Component({
  selector: 'app-buscarporlevel',
  templateUrl: './buscarporlevel.component.html',
  styles: []
})
export class BuscarporlevelComponent implements OnInit {

  pokemon = [];
  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
  }
  busquedaPorLevel(Level: string) {
    this.pokemonService.getPokemonbyLevel(Level)
    // tslint:disable-next-line: deprecation
    .subscribe((data: any[]) => {
      console.log(data);
      console.log(Level);
      this.pokemon = data;
    });
  }

}
