import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BusScheduleModule } from './components/bus-schedule/bus-schedule.module';
import { CopyMatrixPipeModule } from './shared/pipes/copy-matrix/copy-matrix.module';
import { PipesTestingModule } from './shared/pipes/testing/pipes.testing.module';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyMatrixPipeModule, PipesTestingModule, BusScheduleModule],
      declarations: [AppComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  describe('Component', () => {
    it('should create the app', () => {
      expect(app).toBeTruthy();
    });

    it("should have pageTitle 'app.pageTitle'", () => {
      expect(app.pageTitle).toEqual('app.pageTitle');
    });
  });

  describe('View', () => {
    it('should render title', () => {
      fixture.detectChanges();
      const element = fixture.debugElement.nativeElement;
      expect(element.querySelector('.js-page-title').textContent).toContain('fake-copy-matrix__app.pageTitle');
    });

    it('should display Bus Schedule Component on init', () => {
      expect(fixture.debugElement.nativeElement.innerHTML).toContain('app-bus-schedule');
    });
  });
});
