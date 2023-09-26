import { Component, OnInit } from '@angular/core';
import { RestclientService } from '../../services/restclient.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    welcomeImg = 'assets/media/welcome-banner.png';

    constructor(private httpClient: RestclientService) {}
    users = [];
    ngOnInit(): void {
        this.getUsers();
    }

    getUsers() {
        this.httpClient.get('/users').subscribe((data) => {
            console.log('data', data);
        });
    }
}
