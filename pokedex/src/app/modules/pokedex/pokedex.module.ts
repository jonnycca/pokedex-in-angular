import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './views/list/list.component';
import { MyNumberPipe } from 'src/app/pipes/my-number.pipe';


//lista de componentes que serao importados
const compList = [
  ListItemComponent,
  ListComponent
];

@NgModule({
  declarations: [
    ...compList, /* USANDO OPERADOR ... PARA PERMITIR USAR O ARRAY E OUTROS ITENS*/
    MyNumberPipe
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    FormsModule
  ],
  exports: compList /* DECLARANDO MODULOS QUE SERAO EXPORTADOS*/
})
export class PokedexModule { }
