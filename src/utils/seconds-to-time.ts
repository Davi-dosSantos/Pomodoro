export function secondsToTime(sec: number): string {
  const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, '0');
  const hours = zeroLeft(sec / 3600);
  const minutes = zeroLeft((sec / 60) % 60);
  const seconds = zeroLeft((sec % 60) % 60);
  return `${hours}h${minutes}m${seconds}s`;
}
