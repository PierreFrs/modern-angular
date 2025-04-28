import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-file-upload',
  template: `
    <div class="file-upload">
      <label for="upload">{{ label }}</label>
      <input type="file" id="upload" (change)="onFileSelected($event)" />
      <span class="error" *ngIf="errorMessage">
        {{ errorMessage }}
        Only the following file types are permitted:
        <ul>
          <li *ngFor="let type of acceptArray">
            {{ type}}
          </li>
        </ul>
      </span>
    </div>
  `,
  standalone: true,
  imports: []
})
export class FileUploadComponent {
  @Input({required: true}) label!: string;
  @Input({
    transform: (value: string) => value.split('.'),
  }) accept = '';
  @Output() selected = new EventEmitter<FileList>();
  errorMessage = '';

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    this.errorMessage = Array.from(files)
      .every(f => this.accept.includes(f.type))
      ? '' : 'Invalid file type';

    if (this.errorMessage === '') {
      this.selected.emit(files);
    }
  }
}
