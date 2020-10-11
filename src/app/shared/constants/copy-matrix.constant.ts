export const COPY_MATRIX_MAPPING: Record<string, unknown> = {
  eng: {
    app: {
      pageTitle: 'Bus Report'
    },
    schedule: {
      table: {
        busId: 'Bus ID',
        variant: 'Ruote Variant',
        status: 'Status',
        deviation: {
          early: 'Early',
          late: 'Late',
          onTime: 'On Time'
        }
      }
    },
    error: {
      technical: 'Something unexpected happen. Please try again later.'
    }
  }
};
