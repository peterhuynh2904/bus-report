import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MOCK_BUS_SCHEDULE_RESPONSE } from '../../../shared/constants/shared.constants.spec';
import { IBusSchedule } from '../../../shared/interfaces/shared.interface';
import { CopyMatrixPipeModule } from '../../../shared/pipes/copy-matrix/copy-matrix.module';
import { PipesTestingModule } from '../../../shared/pipes/testing/pipes.testing.module';

import { MOCK_TRANSFORMED_BUSDATA } from '../bus-schedule.constants.spec';
import { BusScheduleService } from '../bus-schedule.service';

import { BusScheduleDetailComponent } from './bus-schedule-detail.component';

describe('BusScheduleDetailComponent', () => {
  let component: BusScheduleDetailComponent;
  let fixture: ComponentFixture<BusScheduleDetailComponent>;
  let service: BusScheduleService;
  let MOCK: IBusSchedule;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BrowserAnimationsModule, MatExpansionModule, CopyMatrixPipeModule, PipesTestingModule],
      declarations: [BusScheduleDetailComponent],
      providers: [BusScheduleService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusScheduleDetailComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(BusScheduleService);
    MOCK = MOCK_BUS_SCHEDULE_RESPONSE[0];
    component.busSchedule = MOCK;
  });

  describe('Component', () => {
    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    describe('On Init', () => {
      it('should transform busData to Extended busData', () => {
        component.ngOnInit();
        expect(component.extendedBusData).toBeTruthy();
      });

      it('should transform busData correctly', () => {
        component.ngOnInit();
        expect(component.extendedBusData).toEqual(MOCK_TRANSFORMED_BUSDATA);
      });
    });
  });

  describe('View', () => {
    it('should render organisation name', () => {
      fixture.detectChanges();
      const element = fixture.debugElement.nativeElement;
      expect(element.querySelector('.js-bus-organisation').textContent).toContain(MOCK.organisation);
    });

    it('should render table header name', () => {
      fixture.detectChanges();
      const element = fixture.debugElement.nativeElement;
      expect(element.querySelector('.js-table-header').textContent).toContain('fake-copy-matrix__schedule.table.busId');
      expect(element.querySelector('.js-table-header').textContent).toContain('fake-copy-matrix__schedule.table.variant');
      expect(element.querySelector('.js-table-header').textContent).toContain('fake-copy-matrix__schedule.table.status');
    });

    describe('busData', () => {
      it('should render when is busData provided', () => {
        fixture.detectChanges();
        const element = fixture.debugElement.nativeElement;
        expect(element.querySelector('.js-bus-data')).toBeTruthy();
      });

      it('should render correct data', () => {
        fixture.detectChanges();
        const element = fixture.debugElement.nativeElement;
        expect(element.querySelector('.js-bus-data').textContent).toContain(MOCK.busData[0].busId);
        expect(element.querySelector('.js-bus-data').textContent).toContain('fake-copy-matrix__schedule.table.deviation');
        expect(element.querySelector('.js-bus-data').textContent).toContain(MOCK.busData[0].routeVariant);
      });
    });
  });
});
