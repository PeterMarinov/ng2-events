import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
        <div (click)="toggleContent()" class="well pointable">
            <h4 class="well-title">{{title}}</h4>
            <ng-content *ngIf="visible"></ng-content>
        </div>
    `
})
export class CollapsibleWellCompomnent {
    @Input()
    title: string;
    visible: boolean = true;

    toggleContent(): void {
        this.visible = !this.visible;
    }
}