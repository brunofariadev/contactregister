import { Injectable } from '@angular/core'

@Injectable()
export class DialogoService {

    confirm(mensagem?: string) {
        return new Promise(resolve =>
            resolve(window.confirm(mensagem || "Confirmar?")));
    }
}