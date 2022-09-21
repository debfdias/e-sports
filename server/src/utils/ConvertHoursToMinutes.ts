

export function ConvertHoursToMinutes(hour: string) {
  
  const [hours, minutes] = hour.split(':').map(Number);

  const result = (hours*60) + minutes;
  return result;
}