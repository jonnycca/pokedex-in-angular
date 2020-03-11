import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  selectedPkm = null;//variavel que vai pegar o pokemon selecionado
  //array que armazena os pokemons
  pokemonList = [
    { name: 'Bulbasaur', number: 1},
    { name: 'Charmander', number: 4},
    { name: 'Squirtle', number: 7},
    { name: 'Pikachu', number: 25}
  ]
  //funcao que vai retornar a imagem do pokemon
  get pkmSprite(){
    const number = ('000' + this.selectedPkm.number).slice(-3);//armazenando numero do pokemon em 3 digitos
    return `//serebii.net/sunmoon/pokemon/${number}.png`;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  selectPokemon(pkm){
    this.selectedPkm = pkm;
  }

}
