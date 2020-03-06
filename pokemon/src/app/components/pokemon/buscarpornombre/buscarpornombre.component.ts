import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/_services/pokemon-service.service';

@Component({
  selector: 'app-buscarpornombre',
  templateUrl: './buscarpornombre.component.html',
  styles: []
})
export class BuscarpornombreComponent implements OnInit {

  pokemon = [];
  constructor(
    private pokemonService: PokemonService

  ) { }

  ngOnInit(): void {
  }

  busquedaPorNombre(Nombre: string) {
    this.pokemonService.getPokemonbyName(Nombre)
    // tslint:disable-next-line: deprecation
    .subscribe((data: any[]) => {
      console.log(data);
      console.log(Nombre);
      this.pokemon = data;
    });
  }

}
