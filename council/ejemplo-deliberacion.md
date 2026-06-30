# 🎙️ Ejemplo de deliberación

**TEMA:** ¿Incluimos el botón de **dictado por voz** (🎤) en la v1 de "Cotiza con IA"?
**CONTEXTO:** El input del hero tiene un botón de micrófono para dictar
"vehículo - marca, modelo, año".

---

## Fase 1 — Aperturas

**Dra. Elena Park (IA):** El reconocimiento de voz para marca/modelo/año es un
caso acotado y resuelto; no necesitas un modelo propio, una API de speech-to-text
basta. El riesgo es el manejo de acentos y ruido en una correduría. Define un
fallback a texto desde el primer día. `OPORTUNIDAD: diferenciador barato si el reconocimiento es robusto.`

**Marcus Vidal (Arquitectura):** Es una integración aislada, bajo acoplamiento,
fácil de encapsular tras un hook `useVoiceInput`. No compromete la arquitectura.
`OPORTUNIDAD: feature desacoplable, se puede apagar con un flag.`

**Roberto Salas (Fábrica):** Suma costo de integración + pruebas en dispositivos.
Para v1 no veo que mueva el contrato. `RIESGO: esfuerzo que no factura, mételo a v1.1.`

**Nadia Ferreira (Full stack):** La Web Speech API funciona dispar entre
navegadores y en móvil es inconsistente; el permiso de micrófono asusta a usuarios.
Implementarlo bien con fallback es más trabajo del que parece. `RIESGO: 'parece un botón, es un proyecto'.`

**Don Gustavo Méndez (Cliente):** Suena bonito en la demo, pero mis agentes
cotizan en oficina con ruido y teléfono al hombro. Si falla, prefieren teclear.
No pago más por esto en v1. `RIESGO: feature de demo, no de uso diario.`

**Camila Ortega (Marketing):** "Cotiza dictando, sin escribir" es un gran gancho
de venta y refuerza el mensaje de IA. Pero si en el piloto falla, quema credibilidad.
`OPORTUNIDAD: titular de campaña — solo si funciona.`

**Theo Lindqvist (UX):** Hoy el micrófono es decorativo y no comunica estado
(escuchando/error). Sin feedback claro genera desconfianza. `RIESGO: affordance sin estados = frustración.`

**Sofía Benavides (Seguridad):** El audio probablemente sale a un servicio de
terceros: necesitas consentimiento explícito y saber dónde se procesa la voz
(datos personales). Sin eso, no sale a producción. `RIESGO crítico: consentimiento y procesamiento de voz de terceros.`

**Act. Hugo Reyna (Seguros):** Mientras el dictado solo llene marca/modelo/año
y el usuario confirme antes de cotizar, no hay riesgo de tarifación. Exijo un
paso de confirmación. `OPORTUNIDAD: aceptable con confirmación previa a la cotización.`

---

## Fase 2 — Cruce (extracto)

- **Camila ↔ Nadia/Theo:** Camila quiere el gancho; Nadia y Theo advierten que
  sin estados de UI y pruebas en móvil, el gancho se vuelve en contra.
- **Sofía ↔ Roberto:** Roberto lo mandaría a v1.1 por costo; Sofía señala que el
  costo real está en cumplimiento, no en el código.

---

## Veredicto del Moderador

**CONSENSOS (7/9):** La voz es valiosa como diferenciador, pero **no está lista
para v1 tal como está** (botón sin estados, sin fallback, sin consentimiento).

**TENSIONES:** Marketing (Camila) la quiere ya por su valor de venta; Fábrica
(Roberto) la pospone por costo. Se resuelve a favor de seguridad/UX.

**RECOMENDACIÓN:**
1. v1: dejar el micrófono **detrás de un feature flag, apagado**. Enviar v1 solo
   con input de texto sólido.
2. v1.1: implementar `useVoiceInput` con (a) fallback a texto, (b) estados UI
   escuchando/error (Theo), (c) consentimiento explícito y due diligence del
   proveedor de speech-to-text (Sofía), (d) confirmación antes de cotizar (Hugo).
3. Marketing usa la voz como mensaje **solo** tras validarla en piloto.

**CONFIANZA:** alta.
**QUÉ FALTA SABER:** qué proveedor de speech-to-text y su política de datos;
distribución de navegadores/dispositivos de los agentes.
