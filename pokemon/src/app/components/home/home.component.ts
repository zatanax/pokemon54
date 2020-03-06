import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import dayGridPlugin from '@fullcalendar/daygrid';
import { User } from '../../_models';
import { UserService, AuthenticationService } from '../../_services';
import { PokemonService} from './../../_services/pokemon-service.service';

@Component({
  /// selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent {
    loading = false;
    currentUser: User;
    userFromApi: User;
    pokemones = [];

    calendarPlugins = [dayGridPlugin]; // important!

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private pokemonService: PokemonService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

        // tslint:disable-next-line: use-lifecycle-interface
        ngOnInit() {
        this.loading = true;
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });
        this.pokemonService.getAllPokemon()
            .subscribe((data: any[]) => {
            console.log(data);
            // console.log(busqueda);
            this.pokemones = data;
        });
    }
}
