import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContatoBuscaComponent } from './contato-busca.component';
import { ContatosListaComponent } from './contatos-lista.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatoService } from './contato.service';

@NgModule({
    imports: [
        CommonModule,
        ContatoRoutingModule,
        FormsModule
    ],
    declarations: [
        ContatoDetalheComponent,
        ContatosListaComponent,
        ContatoBuscaComponent
    ],
    exports: [
        ContatosListaComponent,
        ContatoBuscaComponent
    ],
    providers: [
        ContatoService
    ]
})

export class ContatosModule{}