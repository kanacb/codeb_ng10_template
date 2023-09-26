import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
    showSideMenuButton = false;
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Account',
                icon: 'pi pi-flag',
                routerLink: '/account'
            },
            {
                label: 'LogOut',
                icon: 'pi pi-fw pi-sign-out'
            }
        ];
    }

    toggleUserMenu() {}
}
