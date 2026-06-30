# 🏛️ LLM Council — "Cotiza con IA"

Un **consejo de criterios** para evaluar el proyecto desde múltiples ángulos.
Cada miembro es una *persona* (un prompt de sistema) con su propia experiencia,
prioridades y sesgos. La idea es lanzar la misma pregunta o entregable al
consejo y contrastar las opiniones para tomar mejores decisiones de producto,
diseño y arquitectura.

> Contexto del proyecto: frontend en **React + Vite + Tailwind v4** de un
> *multicotizador de seguros* ("Cotiza con IA", SeriousTech) con estética
> *liquid glass*.

## ¿Para qué sirve?

- **Revisar un entregable** (un PR, un diseño, una feature) con voces que
  normalmente no están en la misma sala.
- **Tomar decisiones**: precio, roadmap, prioridades técnicas, mensajes de
  marketing, seguridad de datos.
- **Detectar puntos ciegos**: cada perfil ve lo que a los demás se les escapa.

## Cómo se usa

1. Define el **tema** (ej. "¿Lanzamos el dictado por voz en v1?" o
   "Revisen este diseño de la pantalla de cotización").
2. Pásalo a cada miembro usando su `system_prompt` (ver `council.json`).
3. El **Moderador** sintetiza: consensos, desacuerdos y una recomendación.

## Miembros del consejo (9)

| # | Persona | Rol | Pregunta que siempre hace |
|---|---------|-----|---------------------------|
| 1 | **Dra. Elena Park** | Experta en IA / ML | ¿La IA aporta valor real o es humo? |
| 2 | **Marcus Vidal** | Arquitecto de software | ¿Esto escala y se mantiene? |
| 3 | **Roberto Salas** | Director de fábrica de software | ¿Cabe en presupuesto, plazo y equipo? |
| 4 | **Nadia Ferreira** | Programadora full stack | ¿Quién implementa esto el lunes? |
| 5 | **Don Gustavo Méndez** | Cliente comprador | ¿Esto me resuelve el problema y cuánto cuesta? |
| 6 | **Camila Ortega** | Marketing (ex-fábricas de software) | ¿Cómo lo vendo y a quién? |
| 7 | **Theo Lindqvist** | Diseñador UX/UI de producto | ¿El usuario entiende y confía? |
| 8 | **Sofía Benavides** | Ciberseguridad y privacidad | ¿Dónde se filtran los datos? |
| 9 | **Act. Hugo Reyna** | Actuario / experto en seguros | ¿La cotización es correcta y legal? |

> Los tres últimos (UX, seguridad y dominio asegurador) son los perfiles que
> añadí por iniciativa propia: en un producto de seguros con IA son los que más
> riesgo cubren — confianza del usuario, fuga de datos sensibles y exactitud
> regulatoria de las cotizaciones.

## Cómo delibera el consejo

1. **Ronda de aperturas** — cada miembro emite su juicio (1–2 párrafos) y una
   nota `RIESGO` / `OPORTUNIDAD`.
2. **Cruce** — cada miembro responde al que más lo contradice.
3. **Veredicto del Moderador** — consensos, tensiones abiertas y una
   recomendación accionable con su nivel de confianza.

Ver la rúbrica completa en `rubric.md` y los prompts en `council.json`.
