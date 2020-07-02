import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Contato } from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService {

    createDb(): {} {
        debugger;
        let contatos: Contato[] = [
            { id: 1, nome: "Bruno Oliveira", email: "bruno@gmail.com", telefone: "(62) 85568460" },
            { id: 2, nome: "Tiao", email: "tiao@gmail.com", telefone: "(62) 95568460" },
            { id: 3, nome: "Joao", email: "joao@gmail.com", telefone: "(62) 81568460" },
            { id: 4, nome: "Sarah", email: "sarah@gmail.com", telefone: "(62) 82268460" },
            { id: 5, nome: "Marieta", email: "mari@gmail.com", telefone: "(62) 89568460" },
        ];

        return {'contatos' : contatos};
    }
}
