import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//interface criada para tipar a funcao listAll
interface PokeListResponse{
  created: string,
  modified: string,
  name: string,
  pokemon: any[],
  resource_uri: string
}

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private url = '//dev.treinaweb.com.br/pokeapi/'; //url que sera feito a requisicao para obter os dados dos pokemons

  //array que armazena os pokemons
  pokeList = [];
  constructor(
    private http: HttpClient
  ) { }

  //funcao que lista todos os pokemons de 
  listAll(){
    this.http.get<PokeListResponse>(`${this.url}/pokedex/1`)
      .subscribe(
        response =>{
          response.pokemon.forEach(pokemon =>{
            pokemon.number = this.getNumberFromUrl(pokemon.resource_uri);
          })
          this.pokeList = this.sortPokemon(response.pokemon).filter(pokemon => pokemon.number < 100);
        }
      )
  }

  //funcao para pegar o numero do pokemon na url
  private getNumberFromUrl(url){
    return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
  }

  //funcao para ordenar a lista de pokemons
  private sortPokemon(pokemonList){
    return pokemonList.sort((a, b) => {
      return (a.number > b.number ? 1 : -1);
    })
  }

}
