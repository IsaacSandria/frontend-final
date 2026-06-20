# Cotiza con IA — Multicotizador de Seguros

Recreación en código del panel "Cotiza con IA" (SeriousTech) con interfaz
estilo **liquid glass**: superficies translúcidas con desenfoque, reflejos
especulares y botones glaseados.

## Stack

- **Vite** + **React 18**
- **Tailwind CSS v4** (configuración CSS-first en `src/index.css`)
- **lucide-react** para iconografía

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de producción en dist/
```

## Estructura

- `src/App.jsx` — composición del panel principal (hero, búsqueda, CTA,
  carrusel, carriers, tarjetas y dock flotante).
- `src/components/` — `Sidebar`, `TopBar`, `StepDots`, `CarrierStatus`,
  `ActionCard`, `ContourBackground`.
- `src/index.css` — sistema *liquid glass* (`.glass`, `.glass-btn`,
  `.glass-copper`, `.glass-teal`) y tema de color.
