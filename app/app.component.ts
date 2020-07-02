import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    log(paran: string): void {
        console.log(paran);
    }
}