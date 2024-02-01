import { Routes } from '@angular/router';
import { HubComponent } from './hub/hub.component';

export const routes: Routes = [
    { path: 'hub', component: HubComponent },
    { path: '', redirectTo: '/hub', pathMatch: 'full' } // Redirect to 'hub' as the default route
];