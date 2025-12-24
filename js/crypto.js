/* =========================
   FONCTION UTILE
========================= */
async function hashPassword(password) {
  // Crée un encodeur pour transformer le texte en données binaires
  const encoder = new TextEncoder();

  // Encode le mot de passe en format utilisable par l’API crypto
  const data = encoder.encode(password);

  // Génère le hash SHA-256 à partir des données (asynchrone)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);

  // Transforme le buffer en tableau d’octets
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // Convertit chaque octet en hexadécimal et les assemble en une chaîne
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
