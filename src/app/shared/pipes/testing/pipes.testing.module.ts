import { NgModule, Pipe, PipeTransform } from '@angular/core';

export abstract class FakePipe {
  abstract getPipeName(): string;
  transform(value: unknown): string {
    return `${this.getPipeName()}__${value}`;
  }
}

@Pipe({ name: 'copyMatrix' })
export class FakeCopyMatrix extends FakePipe implements PipeTransform {
  getPipeName(): string {
    return 'fake-copy-matrix';
  }
}

@NgModule({
  declarations: [FakeCopyMatrix],
  exports: [FakeCopyMatrix]
})
export class PipesTestingModule {}
