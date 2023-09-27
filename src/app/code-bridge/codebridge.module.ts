import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeBridgeRoutingModule } from './codebridge-routing.module';
import { DashboardComponent } from './components/app/dashboard/dashboard.component';

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, CodeBridgeRoutingModule]
})
export class CodeBridgeModule {}
