import { IBusDeviationStatus } from './bus-schedule.interface';

export const BUS_SCHEDULE_URL = 'assets/data/bus-services-data.json';
export const BUS_SEND_NOTE_URL = 'assets/data/send-note.json';

export const MIN_DEVIATION_THRESHOLD = 0;
export const MAX_DEVIATION_THRESHOLD = 220;

export const DEVIATION_LATE: IBusDeviationStatus = { id: 'late', label: 'schedule.table.deviation.late', badge: 'danger' };
export const DEVIATION_EARLY: IBusDeviationStatus = { id: 'early', label: 'schedule.table.deviation.early', badge: 'primary' };
export const DEVIATION_ONTIME: IBusDeviationStatus = { id: 'onTime', label: 'schedule.table.deviation.onTime', badge: 'success' };
