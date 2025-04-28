import {Component, inject} from '@angular/core';
import {ProjectCardComponent} from '../../shared/components/project-card.component';
import {AsyncPipe, NgForOf} from '@angular/common';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  template: `
    <div class="row">
      <app-project-card *ngFor="let project of projects$ | async" [projectId]="project.id"></app-project-card>
    </div>
  `,
  standalone: true,
  imports: [
    ProjectCardComponent,
    NgForOf,
    AsyncPipe
  ]
})
export class ProjectListComponent {
  private readonly projectService = inject(ProjectService);
  projects$ = this.projectService.getProjects();
}
