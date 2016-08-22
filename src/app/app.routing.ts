import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MainCmp} from './dynamic-component/mainComponent'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'dyna', component: MainCmp}
];

export const routing = RouterModule.forRoot(routes);
