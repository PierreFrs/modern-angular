import {Injectable} from '@angular/core';
import {Candidate} from '../infrastructure/types/candidate';

@Injectable()
export class CandidateService {

  private candidate1: Candidate = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: '',
    position: 'Developer',
    status: 'CV evaluation',
    offerAccepted: false,
  }

  private candidate2: Candidate = {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    email: '',
    position: 'Developer',
    status: 'CV evaluation',
    offerAccepted: true,
  }

  private candidatesArray: Candidate[] = [this.candidate1, this.candidate2];
  getCandidates() {
    return this.candidatesArray;
  }

  getCandidatesByName(name: string) {
    return this.candidatesArray.filter(candidate =>
      candidate.firstName.toLowerCase().includes(name.toLowerCase())
    );
  }
}
