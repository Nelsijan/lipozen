export function getFutureDate(daysFromNow: number): string {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  return date.toLocaleDateString('pt-BR');
}

export function getCurrentDate(): string {
  return new Date().toLocaleDateString('pt-BR');
}