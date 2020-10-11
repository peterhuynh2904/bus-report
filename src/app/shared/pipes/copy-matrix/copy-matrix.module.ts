import { NgModule } from '@angular/core';

import { CopyMatrixPipe } from './copy-matrix.pipe';

@NgModule({
  declarations: [CopyMatrixPipe],
  exports: [CopyMatrixPipe],
  providers: [CopyMatrixPipe]
})
export class CopyMatrixPipeModule {}
