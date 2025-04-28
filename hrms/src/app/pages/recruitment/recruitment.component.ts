import {Component, inject} from '@angular/core';
import {RecruitmentService} from '../../services/recruitment.service';
import {InterviewService} from '../../services/interview.service';

@Component({
  selector: 'app-recruitment',
  template: ``,
  standalone: true
})
export class RecruitmentComponent {
  recruitmentService = inject(RecruitmentService);
  interviewService = inject(InterviewService);
}
