import { Routes } from '@angular/router';
import { AboutComponent } from './componants/about/about.component';
import { ContactComponent } from './componants/contact/contact.component';
import { ServicesComponent } from './componants/services/services.component';

export const routes: Routes = [
    {path: '', component: AboutComponent },
    {path: 'contact', component: ContactComponent},
    {path: 'service', component: ServicesComponent}

];
