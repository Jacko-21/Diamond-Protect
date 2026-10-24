# Maquette du site Diamond Protect

Version 0.1 : la page d'accueil. Prévisualisation publiée (privée) : https://claude.ai/artifact/FrePLXeLV4UzmMSeBg5N8A

## Lancer la maquette

```bash
cd maquette
npm install
npm run dev      # http://localhost:4321
npm run build    # sortie statique dans dist/
```

Astro en sortie statique, sans framework JavaScript côté client. Les faits affichés viennent tous de `src/data/site.ts` : c'est le seul fichier à modifier quand un chiffre, une adresse ou un statut change.

## Identité visuelle (validée le 24/10/2026)

- **Couleurs** : bleu nuit `#0a1a22` (fond), turquoise du logo d'origine `#239995`, turquoise clair `#3cc8c1` pour les accents sur fond sombre, turquoise profond `#15706c` sur fond clair, sections claires gris acier `#eef2f3`. Tokens dans `src/styles/global.css`.
- **Typographie** : Archivo (titres en largeur condensée, texte en largeur normale), JetBrains Mono pour les étiquettes façon rapport d'intervention.
- **Motifs** : diamant taille brillant en filaire (`src/components/Diamant.astro`), coins de viseur de caméra autour des visuels, carte de France en points.

## Conventions de maquette

- `À confirmer` (étiquette ambre en pointillés) : information que Diamond Protect doit fournir ou valider. Aucune valeur plausible n'est inventée à la place.
- `Visuel provisoire` : photo à remplacer, marquée `data-photo="provisoire"` dans le code. Voir [`BRIEF-PHOTO.md`](BRIEF-PHOTO.md).
- Le bandeau « Maquette v0.1 » en bas de page rappelle que textes et visuels sont des propositions.
- `noindex, nofollow` sur toutes les pages.

## Références Mobbin utilisées

| Section | Référence |
|---|---|
| Accroche en trois temps | [Seasats](https://mobbin.com/sites/sections/406cb54e-8880-46ed-9b74-6bc6a60201ae) |
| Bandeau de conformité à filets | [Attio](https://mobbin.com/sites/sections/e084ac8f-73d7-47e5-b1e9-22a7bd938f82) |
| Chiffres clés | [Legora](https://mobbin.com/sites/sections/2cf16054-0dd8-4dcc-8358-a8fbb6dad125), [Rows](https://mobbin.com/sites/sections/ef0775fe-e5c9-4e69-84d8-45998572233f) |
| Grille des expertises à étiquettes | [The Performance Lab](https://mobbin.com/sites/sections/f2bb0fbb-64b3-4dc1-bc90-fa473d2c42f1) |
| Carte des implantations en points | [Cloudflare](https://mobbin.com/sites/sections/4a3af847-6d8c-4930-b00d-04ff8d11c2cd) |
| Étude de cas : citation et résultats | [Granola](https://mobbin.com/sites/sections/6fe5dee9-b811-4e60-82f3-ad7024090784), [Ease](https://mobbin.com/sites/sections/31bea308-7577-4169-a7e6-402ec0c10fdc) |
| Étapes de la méthode | [Beside](https://mobbin.com/sites/sections/2cfd3169-f61f-4ca5-bd2a-67627febbc84) |
