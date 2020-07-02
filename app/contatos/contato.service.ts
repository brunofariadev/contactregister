import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { CONTATOS } from './contatos-mock'
import { Contato } from './contato.model'
import { ServiceInterface } from './../interfaces/service.interface'

@Injectable()
export class ContatoService implements ServiceInterface<Contato>{

    private contatosUrl: string = 'app/contatos';
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    findAll(): Promise<Contato[]> {
        return this.http.get(this.contatosUrl)
            .toPromise()
            .then(resposta => resposta.json().data as Contato[])
            .catch(this.handleError);
    }

    create(contato: Contato): Promise<Contato> {
        return this.http
            .post(this.contatosUrl, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then((resposta: Response) => resposta.json().data as Contato)
            .catch(this.handleError);
    }

    update(contato: Contato): Promise<Contato> {
        const url = `${this.contatosUrl}/${contato.id}`;
        return this.http
            .put(url, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(() => contato as Contato)
            .catch(this.handleError);
    }

    delete(contato: Contato): Promise<Contato> {
        const url = `${this.contatosUrl}/${contato.id}`;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => contato as Contato)
            .catch(this.handleError);
    }

    handleError(err: any): Promise<any> {
        console.log("Error:", err);
        return Promise.reject(err.message || err);
    }

    find(id: number): Promise<Contato> {
        return this.findAll()
            .then((contatos: Contato[]) => contatos.find(contato => contato.id === id));
    }

    getContatosSlowly(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 2000);
        })
            .then(() => {
                console.log("primeiro then");
                return "Teta";
            })
            .then((texto: string) => {
                console.log("segundo then");
                console.log(texto);

                return new Promise((resolve2, reject2) => {
                    setTimeout(() => {
                        console.log("Continuando dps de 4 segundos");
                        resolve2();
                    }, 4000);
                });
            })
            .then(() => {
                console.log("terceiro then");
                return this.findAll();
            });
    }

    search(term: string): Observable<Contato[]> {
        return this.http
            .get(`${this.contatosUrl}/?nome=${term}`)
            .map((resposta) => resposta.json().data);
    }
}