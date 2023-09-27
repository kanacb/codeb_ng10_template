import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeBridgeModule } from './code-bridge/codebridge.module';
import { AccountComponent } from './code-bridge/components/account/account.component';

import { PrimeModule } from './code-bridge/prime.module';
import { TopbarComponent } from './code-bridge/components/app/topbar/topbar.component';
import { FooterComponent } from './code-bridge/components/app/footer/footer.component';

@NgModule({
    declarations: [AppComponent, AccountComponent, TopbarComponent,FooterComponent],
    imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, PrimeModule, CodeBridgeModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
