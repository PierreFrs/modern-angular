﻿import {Component, Input, OnChanges, SimpleChanges, Type} from '@angular/core';
import {NgComponentOutlet} from '@angular/common';
import {Candidate} from '../../infrastructure/types/candidate';

@Component({
  selector: 'app-candidate-details',
  template: `
    <div class="candidate-details">
      <div>
        <h2>{{ candidate.firstName }} {{ candidate.lastName }}</h2>
        <p>Email: {{ candidate.email }}</p>
        <p>{{ candidate.position }}</p>
      </div>
      <ng-container *ngComponentOutlet="actionsSection; inputs: {candidateId: candidate.id}">
      </ng-container>
    </div>
  `,
  standalone: true,
  imports: [NgComponentOutlet, NgComponentOutlet],
})
export class CandidateDetailsComponent implements OnChanges {
  @Input() candidate!: Candidate;
  actionsSection: Type<any> | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['candidate']) {
      this.actionsSection =
        this.selectActionsComponent();
    }
  }

  private selectActionsComponent(): Type<any> {
    switch (this.candidate.status) {
      case 'CV evaluation':
        return CvEvaluationComponent;
      case 'Interview preparation':
        return InterviewPreparationComponent;
      case 'Interview Feedback':
        return InterviewFeedbackComponent;
      case 'Rejected':
        return RejectionLetterComponent;
      case 'Approved':
        return this.candidate.offerAccepted
          ? OnboardingPreparationComponent
          : CandidateFinalizationComponent;
      default:
        throw new Error(`Unknown candidate status: ${this.candidate.status}`);
    }
  }
}
