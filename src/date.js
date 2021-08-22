export function timeConverter(UNIX_timestamp){
    const a = new Date(UNIX_timestamp * 1000);
    const days = ['Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',];
    const day = days[a.getDay()];
    const time = day ;
    return time;
  }