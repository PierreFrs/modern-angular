import {Component, inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../../infrastructure/types/project';
import {ProjectService} from '../../services/project.service';
import {AsyncPipe, NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-project-card',
  template: `
    <div *ngIf="project$ | async as project" class="card">
      <img [ngSrc]="project.image" width="100" height="100" loading="eager" sizes="100vw, 50vw"/>
      <div class="card-body">
        <h3>{{ project.name }}</h3>
      </div>
    </div>
  `,
  imports: [
    NgIf,
    AsyncPipe,
    NgOptimizedImage
  ],
  standalone: true,
})
export class ProjectCardComponent implements OnChanges {
  private readonly projectService = inject(ProjectService);

  @Input({required: true}) projectId!: number;
  project$: Observable<Project> | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['projectId']) {
      this.project$ = this.projectService.getProject(this.projectId);
    }
  }
}
