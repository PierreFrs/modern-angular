import {DestroyRef, inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

export function createSearch<T>(
  control: FormControl<T>,
  destroyRef = inject(DestroyRef),
  ) {
  return control.valueChanges.pipe(
    debounceTime(500),
    takeUntilDestroyed(destroyRef)
  );
}
