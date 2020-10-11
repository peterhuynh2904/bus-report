export interface IBusDeviationStatus {
  id: 'onTime' | 'late' | 'early';
  label: string;
  badge: string;
}

export interface IBusDataExtended {
  busId: string;
  routeVariant: string;
  deviationFromTimetable: number;
  variantLabel: string;
  deviation: IBusDeviationStatus;
}
