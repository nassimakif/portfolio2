# Changements à apporter — LeftSidebar

Fichier cible : `components/LeftSidebar.tsx`

## Contexte

Le portfolio de Nassim Akif s'inspire du design de sawad.framer.website (Aaabad Ahmed).
La sidebar gauche contient une carte blanche avec photo, nom, badge, bio et icônes sociales.

## 3 modifications demandées

### 1. Photo style "photo d'identité"

**Avant :** la photo remplit toute la zone orange (pas de marge, overflow hidden).

**Après :** fond orange visible autour de la photo (marges sur le dessus et les côtés), et la photo elle-même a des coins arrondis en haut.

```tsx
// Zone photo
<div style={{
  background: "#f46c38",
  padding: "20px 20px 0",   // orange visible autour
  display: "flex",
  justifyContent: "center",
}}>
  <img
    src="/photo-nassim-processed.jpeg"
    alt="Nassim Akif"
    style={{
      display: "block",
      width: "100%",
      height: "220px",
      objectFit: "cover",
      objectPosition: "top center",
      borderRadius: "10px 10px 0 0",  // coins arrondis en haut seulement
    }}
  />
</div>
```

### 2. Nom plus large (letter-spacing)

**Avant :** `letterSpacing: "-0.02em"` (condensé)

**Après :** `letterSpacing: "0.06em"` (élargi) + `fontSize: 23`

```tsx
<h1 style={{
  fontSize: 23,
  fontWeight: 800,
  color: "#111111",
  letterSpacing: "0.06em",   // <-- changer ici
  marginBottom: 14,
  fontFamily: "var(--font-poppins)",
}}>
  Nassim Akif
</h1>
```

### 3. Arc décoratif (motifs)

Déjà présent et correct — ne pas modifier.

## Référence visuelle

- Original visé : sawad.framer.website (carte d'Aaabad Ahmed)
- Site local : localhost:3000
