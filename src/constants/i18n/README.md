# i18n Structure

This directory contains the internationalization (i18n) files for the portfolio.

## Structure

```
i18n/
├── en.ts       # English translations (default)
├── es.ts       # Spanish translations
├── index.ts    # Main export and language utilities
└── README.md   # This file
```

## Usage

Import translations in any Astro component:

```astro
---
import { getTranslations } from '@/constants/i18n'

const t = getTranslations() // Returns English by default
---

<h1>{t.hero.title}</h1>
```

## Adding a new language

1. Create a new file (e.g., `fr.ts`) with the same structure as `en.ts`
2. Import and add it to the `translations` object in `index.ts`:
   ```ts
   import { fr } from './fr'
   
   export const translations = {
     en,
     es,
     fr, // Add new language
   }
   ```

## Current structure

- `navbar`: Navigation bar texts
- `hero`: Hero section (main banner with code example)
- `stack`: Tech stack section
- `team`: Team section
- `footer`: Footer texts

## Future implementation

When implementing full i18n routing:
- Use `getTranslations(lang)` with the language parameter
- Store language preference in localStorage or URL
- Add language switcher component in the navbar
