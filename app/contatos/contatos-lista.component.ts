import { Component, OnInit } from '@angular/core';

import { Contato } from './contato.model'
import { ContatoService } from './contato.service'
import { DialogoService } from '../dialogo.service'

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html'
})

export class ContatosListaComponent implements OnInit {
    contatos: Contato[] = [];
    mensagem: {};
    classesCss: {};
    currentTimeout: any;

    constructor(private contatosService: ContatoService,
        private dialogoService: DialogoService) { }

    ngOnInit(): void {
        this.contatosService.findAll()
            .then((contatos: Contato[]) => {
                this.contatos = contatos;
            }).catch(err => this.mostrarMensagem({
                tipo: 'danger',
                texto: 'Ocorreu um erro ao buscar a lista de contatos!'
            }));
    }

    onDelete(contato: Contato) {
        this.dialogoService.confirm("Deseja deletar o contato " + contato.nome + "?")
            .then((podeDeletar: boolean) => {
                if (podeDeletar) {
                    this.contatosService.delete(contato)
                        .then(() => {
                            this.contatos = this.contatos.filter(c => c.id != contato.id);
                            this.mostrarMensagem({
                                tipo: 'success',
                                texto: 'Contato deletado!'
                            });
                        }
                        ).catch(erro => this.mostrarMensagem({
                            tipo: 'danger',
                            texto: 'Ocorreu um erro ao deletar o contato!'
                        }));
                }
            });
    }

    private mostrarMensagem(mensagem: { tipo: string, texto: string }): void {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if (mensagem.tipo != 'danger') {
            if (this.currentTimeout) {
                clearTimeout(this.currentTimeout);
            }
            this.currentTimeout = setTimeout(() => this.mensagem = null, 3000);
        }
    }

    private montarClasses(tipo: string) {
        this.classesCss = {
            'alert': true
        }
        this.classesCss['alert-' + tipo] = true;
    }

}