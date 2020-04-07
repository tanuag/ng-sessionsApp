import { Component } from '@angular/core'

@Component({
    selector:'events-list',
    template: `
        <div>
            <h2>Upcoming Angular Events</h2>
            <hr/>
            <event-thumbnail [event]="event1"></event-thumbnail>
        </div>
    `
})

export class EventsListComponent{
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2027',
        time: '9:00 AM',
        price: 786.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1777 DT',
            city: 'Mckinney',
            country: 'United States'
        }
    }


}