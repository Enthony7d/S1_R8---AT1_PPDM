import { IMAGE_BASE_URL } from '../services/api';

// Monta a URL completa da imagem
export function getImageUrl(path) {
  return path ? `${IMAGE_BASE_URL}${path}` : null;
}

// Converte data do formato ISO (YYYY-MM-DD) para o formato brasileiro (DD/MM/YYYY)
export function formatDate(dateString) {
  if (!dateString) return 'Não informada';
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
}

// Formata a nota/rating com apenas uma casa decimal
export function formatRating(value) {
  return value ? value.toFixed(1) : 'N/A';
}

// Converte minutos em um formato legível (ex: 125 min vira "2h 5min")
export function formatRuntime(minutes) {
  if (!minutes) return 'Não informada';
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}min`;
}

// Formata valores em dólar americano
export function formatMoney(value) {
  if (!value) return 'Não informado';
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}
