import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'el-health-care',
    template: '<router-outlet></router-outlet>',
    styleUrls: ['app.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    name = 'el-health-care';
}
