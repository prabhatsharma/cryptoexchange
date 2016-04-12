import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './HomeComponent/home.component';
import {DataComponent} from './DataComponent/data.component';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, NgClass]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/data', name: 'Data', component: DataComponent }
])
export class AppComponent {
    name = "Prabhat Sharma";
}