import {Routes} from '@angular/router';
import {ProjectDetailsComponent} from './project-details.component';

export const routes: Routes = [
  {path: 'projects/:id', component: ProjectDetailsComponent}
]
