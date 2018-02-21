export default function getBaseUrl() {
  const inDevelpment = window.location.hostname === 'localhost';
  return inDevelpment ? 'http://localhost:3001/' : '/';
}
