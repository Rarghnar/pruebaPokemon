import { Component, OnInit } from '@angular/core';
import { PokeService } from './provider/poke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokemon';

  public pokemones: any;

  constructor(private pokeService: PokeService) {

  }

  ngOnInit(): void {
    this.getPoke();
  }

  public async getPoke() {
    try {
      this.pokemones = await this.pokeService.getPoke().toPromise();
      console.log(this.pokemones);
      
    } catch (error) {
    }
  }


}
