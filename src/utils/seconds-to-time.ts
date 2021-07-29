export function secondsToTime(sec: number): string {
  const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, '0');
  const minutes = zeroLeft((sec / 60) % 60);
  const seconds = zeroLeft((sec % 60) % 60);
  return `${minutes}: ${seconds}`;
}
