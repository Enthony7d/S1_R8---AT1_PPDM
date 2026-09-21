import { IMAGE_BASE_URL } from '../services/api';

export function getImageUrl(path) {
  return path ? `${IMAGE_BASE_URL}${path}` : null;
}

export function formatDate(dateString) {
  if (!dateString) return 'Não informada';
  const [year, month, day] = dateString.split('-');
  return `${day}/${month}/${year}`;
}

export function formatRating(value) {
  return value ? value.toFixed(1) : 'N/A';
}

export function formatRuntime(minutes) {
  if (!minutes) return 'Não informada';
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}min`;
}

export function formatMoney(value) {
  if (!value) return 'Não informado';
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}
