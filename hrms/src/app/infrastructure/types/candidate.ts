export type Candidate = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  position: 'Developer' | 'Designer' | 'QA' | 'Manager';
  status: 'CV evaluation' | 'Interview preparation' | 'Interview Feedback' | 'Rejected' | 'Approved';
  offerAccepted: boolean;
}
