import {Component, inject, Input, numberAttribute, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {ProjectService} from '../../services/project.service';
import {Observable} from 'rxjs';
import {Project} from '../../infrastructure/types/project';
import {ProjectCardComponent} from '../../shared/components/project-card.component';

@Component({
  selector: 'app-project-details',
  template: `
    <div class="project-details">
      <h3>Project Details</h3>
      <div *ngIf="project$ | async as project">
        <span>Project Name: {{ project.name }}</span>
        <span>Project Description: {{ project.description }}</span>
        <span>Logo: {{ project.logo }}</span>
        <div class="subprojects">
          <span>Subprojects:</span>
          <app-project-card
            *ngFor="let subprojectId of project.subprojectIds"
            [projectId]="subprojectId"
          >
          </app-project-card>
        </div>
      </div>
    </div>
  `,
  imports: [
    NgIf,
    NgForOf,
    AsyncPipe,
    ProjectCardComponent
  ],
  standalone: true
})
export class ProjectDetailsComponent implements OnChanges {
  @Input({transform: numberAttribute}) id!: number;
  private readonly projectService = inject(ProjectService);
  project$: Observable<Project> | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['id']) {
      this.project$ = this.projectService.getProject(this.id);
    }
  }
}
