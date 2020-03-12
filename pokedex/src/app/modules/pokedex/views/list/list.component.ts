import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  nameFilter = '';  //variavel usava para filtrar os pokemons
  selectedPkm = null; //variavel que vai pegar o pokemon selecionado
  //funcao que retorna os pokemons pesquisados na variavel nameFilter
  get pokemonList(){
    return this.pokeapi.pokeList.filter(pokemon =>{
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    });
  }
  //funcao que vai retornar a imagem do pokemon
  get pkmSprite(){
    const number = ('000' + this.selectedPkm.number).slice(-3); //armazenando numero do pokemon em 3 digitos
    return `//serebii.net/sunmoon/pokemon/${number}.png`;
  }
  
  constructor(
    private pokeapi: PokeapiService
  ) { }

  ngOnInit(): void {
    this.pokeapi.listAll();
  }

  selectPokemon(pkm){
    this.selectedPkm = pkm;
  }

}
