export interface RandomTimeOptions {
  startHour: number;
  startMinute: number;
  minuteRange: number;
}

export function generateRandomTime(time: RandomTimeOptions, nextDay = false) {
  const randomMinutes = Math.floor(Math.random() * time.minuteRange);

  const randomTime = new Date();
  randomTime.setHours(time.startHour, time.startMinute, 0, 0);
  randomTime.setMinutes(randomTime.getMinutes() + randomMinutes);

  if (new Date() > randomTime || nextDay) {
    randomTime.setHours(randomTime.getHours() + 24);
  }

  return randomTime;
}
