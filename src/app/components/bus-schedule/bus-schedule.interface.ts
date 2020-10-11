export interface IBusSchedule {
  organisation: string;
  date: string;
  busData: IBusData[];
}

export interface IBusData {
  busId: string;
  routeVariant: string;
  deviationFromTimetable: number;
}
