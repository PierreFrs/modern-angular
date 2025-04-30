import {Component, inject, OnInit} from '@angular/core';
import {CandidateService} from '../../services/candidate.service';
import {FormControl} from '@angular/forms';
import {createSearch} from '../../shared/functions/create-search';

@Component({
  selector: 'app-candidates-list',
  template: ``,
  standalone: true
})
export class CandidatesListComponent implements OnInit {
  private readonly candidateService = inject(CandidateService);
  candidates$ = this.candidateService.getCandidates();
  searchControl = new FormControl('');
  search$ = createSearch(this.searchControl)

  ngOnInit() {
    this.search$.subscribe((value) => {
      if (value) {
        this.candidates$ = this.candidateService.getCandidatesByName(value);
      } else {
        this.candidates$ = this.candidateService.getCandidates();
      }
    })
  }
}
