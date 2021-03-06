import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events/shared/index';


@Component({
    selector: 'nav-bar',
    templateUrl: '/app/nav/nav-bar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        @media (max-width: 1200px) { #searchForm { display: none; }}
        li > a.active { color: #f97924; }
    `]
})
export class NavBarComponent {
    searchTerm: string = "";
    foundSessions: ISession[];

    constructor(
        private authService: AuthService,
        private eventService: EventService
    ) { }

    searchSessions(searchTerm): void {
        this.eventService.searchSessions(searchTerm)
            .subscribe(sessions => {
                this.foundSessions = sessions;
            });
    }

}