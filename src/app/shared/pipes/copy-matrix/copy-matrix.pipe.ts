import { Inject, Optional, Pipe, PipeTransform } from '@angular/core';

import { get } from 'lodash-es';

import { COPY_MATRIX } from '../../tokens/tokens';

@Pipe({ name: 'copyMatrix' })
export class CopyMatrixPipe implements PipeTransform {
  constructor(@Optional() @Inject(COPY_MATRIX) private copyMatrix: unknown) {}

  transform(path: string, returnKeyIfNotFound: boolean = true): string {
    return get(this.copyMatrix, path, returnKeyIfNotFound ? path : undefined);
  }
}
