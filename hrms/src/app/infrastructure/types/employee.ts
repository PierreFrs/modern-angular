﻿export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  position: 'Developer' | 'Designer' | 'QA' | 'Manager';
  level: 'Junior' | 'Middle' | 'Senior' | 'Lead';
  role: 'employee' | 'admin' | 'hr';
  isAvailable: boolean;
  profilePicture: string;
}
