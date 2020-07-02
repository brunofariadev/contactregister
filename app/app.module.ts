import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import './util/rxjs-extensions';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ContatosModule } from './contatos/contatos.module';
import { AppRoutingModule } from './app-routing.module';
import { DialogoService } from './dialogo.service';

@NgModule({
    imports: [
        BrowserModule, 
        ContatosModule,
        AppRoutingModule,
        HttpModule,
        FormsModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [AppComponent],
    providers: [
        DialogoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }