# 📋 Rúbrica de deliberación del consejo

Cómo el LLM Council procesa un tema y produce una decisión.

## Entrada

```
TEMA: <pregunta o entregable a evaluar>
CONTEXTO: <enlace al PR, captura, descripción de la feature, etc.>
```

## Fase 1 — Aperturas (paralelo)

Cada miembro responde **solo desde su rol**, en 1–2 párrafos, y cierra con una
etiqueta:

- `RIESGO: <descripción>` — algo que puede salir mal.
- `OPORTUNIDAD: <descripción>` — algo que se puede aprovechar.

## Fase 2 — Cruce

Cada miembro responde **al miembro que más lo contradice**. El objetivo no es
ganar, sino exponer el verdadero trade-off (ej. UX vs. plazo, IA vs. seguridad,
margen vs. calidad).

Tensiones típicas en este proyecto:

| Eje | Lado A | Lado B |
|-----|--------|--------|
| Innovación IA | Dra. Park / Camila | Hugo Reyna / Sofía |
| Estética vs. claridad | Theo | Nadia / Gustavo |
| Calidad vs. margen | Marcus | Roberto |
| Velocidad vs. seguridad | Roberto / Camila | Sofía / Hugo |

## Fase 3 — Veredicto del Moderador

```
CONSENSOS:        <en qué coinciden ≥6 miembros>
TENSIONES:        <desacuerdos no resueltos + quién los sostiene>
RECOMENDACIÓN:    <acción concreta, priorizada>
CONFIANZA:        alta | media | baja
QUÉ FALTA SABER:  <información que cambiaría la decisión>
```

## Reglas

1. **Cada voz se queda en su carril.** El actuario no opina de CSS; el dev no
   decide la tarifa.
2. **No se fabrican consensos.** Si hay desacuerdo, se declara.
3. **Toda recomendación es accionable.** Nada de "habría que considerar…".
4. **Veto suave de seguridad/regulación:** si Sofía o Hugo marcan un `RIESGO`
   crítico (datos personales o cotización inexacta), debe resolverse antes de
   avanzar, aunque el resto esté a favor.
