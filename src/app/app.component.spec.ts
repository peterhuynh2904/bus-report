import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CopyMatrixPipeModule } from './shared/pipes/copy-matrix/copy-matrix.module';
import { PipesTestingModule } from './shared/pipes/testing/pipes.testing.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyMatrixPipeModule, PipesTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  });

  describe('Component', () => {
    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it("should have pageTitle 'app.pageTitle'", () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.pageTitle).toEqual('app.pageTitle');
    });
  });

  describe('View', () => {
    it('should render title', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const element = fixture.debugElement.nativeElement;
      expect(element.querySelector('.js-page-title').textContent).toContain('fake-copy-matrix__app.pageTitle');
    });
  });
});
