export function getRandomViewerCount(): number {
  return Math.floor(Math.random() * (5000 - 500 + 1)) + 500;
}

export function formatNumber(num: number): string {
  return num.toLocaleString('pt-BR');
}