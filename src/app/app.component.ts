import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss', '../assets/mainTheme/mainTheme.css']
})
export class AppComponent {
    title = 'cb-ng_16-template';

    layoutMode = 'overlay';
    staticMenuInactive = true;
    overlayMenuActive = true;
    mobileMenuActive = true;
    ripple = true;
    inputStyle = 'filled';
    layoutColorMode = 'light';
    wrapperClass() {
        return {
            'layout-overlay': this.layoutMode === 'overlay',
            'layout-static': this.layoutMode === 'static',
            'layout-static-sidebar-inactive': this.staticMenuInactive && this.layoutMode === 'static',
            'layout-overlay-sidebar-active': this.overlayMenuActive && this.layoutMode === 'overlay',
            'layout-mobile-sidebar-active': this.mobileMenuActive,
            'p-input-filled': this.inputStyle === 'filled',
            'p-ripple-disabled': this.ripple === false,
            'layout-theme-light': this.layoutColorMode === 'light'
        };
    }
}
