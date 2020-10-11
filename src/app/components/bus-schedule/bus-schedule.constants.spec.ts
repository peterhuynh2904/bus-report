import { IBusDataExtended } from './bus-schedule.interface';

export const MOCK_TRANSFORMED_BUSDATA: IBusDataExtended[] = [
  {
    busId: '42612',
    routeVariant: '891 2 1',
    deviationFromTimetable: 77,
    variantLabel: '<b>891</b> 2 1',
    deviation: {
      id: 'onTime',
      label: 'schedule.table.deviation.onTime',
      badge: 'success'
    }
  },
  {
    busId: '29016',
    routeVariant: '400 1 1',
    deviationFromTimetable: 340,
    variantLabel: '<b>400</b> 1 1',
    deviation: {
      id: 'early',
      label: 'schedule.table.deviation.early',
      badge: 'primary'
    }
  },
  {
    busId: '90467',
    routeVariant: '393 1 1',
    deviationFromTimetable: 220,
    variantLabel: '<b>393</b> 1 1',
    deviation: {
      id: 'onTime',
      label: 'schedule.table.deviation.onTime',
      badge: 'success'
    }
  },
  {
    busId: '88836',
    routeVariant: 'M20 1 0',
    deviationFromTimetable: -287,
    variantLabel: '<b>M20</b> 1 0',
    deviation: {
      id: 'late',
      label: 'schedule.table.deviation.late',
      badge: 'danger'
    }
  },
  {
    busId: '79367',
    routeVariant: 'L21 2 1',
    deviationFromTimetable: 347,
    variantLabel: '<b>L21</b> 2 1',
    deviation: {
      id: 'early',
      label: 'schedule.table.deviation.early',
      badge: 'primary'
    }
  }
];
