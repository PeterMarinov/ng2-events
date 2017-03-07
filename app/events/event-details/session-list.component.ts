import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISession } from '../shared/index';


@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(SortByNameAsc) : this.visibleSessions.sort(SortByVotesDesc);
        }
    }

    filterSessions(filter: string): void {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions
                .filter(s => s.level.toLocaleLowerCase() === filter);
        }
    }
}

export function SortByNameAsc(s1: ISession, s2: ISession): number {
    if (s1.name > s2.name)
        return 1;
    else if (s1 === s2)
        return 0;
    else
        return -1;
}

export function SortByVotesDesc(s1: ISession, s2: ISession): number {
    return s2.voters.length - s1.voters.length;
}