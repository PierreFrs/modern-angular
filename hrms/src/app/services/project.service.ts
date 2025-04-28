import {Injectable} from '@angular/core';
import {Project} from '../infrastructure/types/project';
import {Observable, of} from 'rxjs';

@Injectable()
export class ProjectService {
  public getProjects(): Observable<Project[]> {
    const project: Project = {
      id: 1,
      name: "Project 1",
      description: "Project 1 description",
      logo: "",
      image: "",
      subprojectIds: []
    }
    const projectArray = [project]
    return of(projectArray);
  }

  public getProject(id: number): Observable<Project> {
    const project: Project = {
      id: 1,
      name: "Project 1",
      description: "Project 1 description",
      logo: "",
      image: "",
      subprojectIds: []
    }
    return of(project);
  }
}
