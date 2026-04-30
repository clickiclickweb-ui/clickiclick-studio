# CLICKICLICK.studio — SESSION CONTEXT

> Documento operativo. Complementa BRIEF.md (estrategia), INSPIRATIONS.md (visual), PROJECT_GUIDE.md (workflow skills) y FIRMA-ASSET.md (isotipo). Este archivo responde a los bloqueantes de ejecución y documenta el estado real del proyecto al 23 de Abril 2026. Se actualiza al cerrar cada fase.

---

## Sobre Diego y cómo trabaja

**Perfil:** Diego Puelles es diseñador con fuerte criterio visual y estratégico, pero necesita acompañamiento técnico cercano cuando hay que ejecutar en terminal, git, o configuración de dependencias.

**Reglas de colaboración no negociables:**

1. **Explica antes de pedir**. Nunca ejecutar un comando sin explicar qué hace y por qué. Diego ha dicho explícitamente "no entiendo todo al completo" y eso es honestidad valiosa, no debilidad.
2. **Un paso cada vez**. No dar 5 comandos seguidos para copiar-pegar a ciegas. Dar 1 comando, esperar resultado, verificar, dar el siguiente.
3. **Cuando Diego dice "decide tú"**, hay que explicar la decisión tomada y por qué, no darla por hecha.
4. **Español directo, sin paja, sin bullets excesivos en respuestas conversacionales**.
5. **Honestidad sobre halago**. Si algo está mal, decirlo. Si algo es bueno, decirlo claro sin adornos.
6. **Párate si algo contradice el brief**. Los 5 documentos maestros mandan. Si una propuesta los contradice, hay que levantar la bandera antes de ejecutar.

---

## Cómo se usa Claude (3 frentes, 3 roles)

Este proyecto tiene tres instancias distintas de Claude activas, con responsabilidades separadas. Conviene entender la división para no mezclar.

### Claude del Proyecto (chat web, claude.ai)
- **Rol:** estratégico.
- **Qué hace:** decisiones de copy, paleta, narrativa, revisión de resultados contra el brief, actualización de documentos maestros.
- **Limitación:** no puede escribir archivos en el Mac ni ejecutar comandos directamente. Ve lo que Diego le pega, responde con archivos generados o instrucciones paso a paso.
- **Cuándo:** siempre antes de arrancar una fase nueva. Siempre al cerrar una fase.

### Claude Code (terminal, instalado en Mac)
- **Rol:** ejecutor.
- **Qué hace:** lee el sistema de archivos del proyecto, edita código, ejecuta comandos bash, corre `npm` scripts, hace commits.
- **Plan activo:** Max 5x del usuario Diego Puelles.
- **Cuándo usarlo:**
  - Debugging de código (cuando hay que ver varios archivos en paralelo)
  - Creación de componentes React nuevos
  - Refactors de código existente
  - Configuración de Vite, Tailwind, dependencias
  - Implementación de animaciones GSAP, shaders, Three.js
  - Commits y gestión de git
- **Cuándo NO usarlo:**
  - Decisiones de copy o paleta (ahí manda Claude del Proyecto)
  - Discusión estratégica
  - Revisiones de fase

### Claude for Chrome (extensión navegador, beta)
- **Rol:** testing visual automatizado.
- **Qué hace:** navega, interactúa con la web en localhost, captura DOM, ve consola del navegador.
- **Cuándo usarlo:** sólo cuando Diego pida verificación visual explícita. No se activa por defecto.

### Flujo óptimo por tarea

| Tarea | Chat web | Claude Code | Claude Chrome |
|---|---|---|---|
| Decidir copy hero | ✅ | | |
| Escribir JSX hero | | ✅ | |
| Debugar render roto | | ✅ | |
| Revisar si algo contradice brief | ✅ | | |
| Screenshot comparativo con referencia | | | ✅ |
| Implementar GSAP animation | | ✅ | |
| Actualizar documentos maestros | ✅ | | |

### Prompt mínimo para invocar Claude Code en este proyecto

Cuando se abra Claude Code, primer prompt recomendado (acotado al bocado que toca, no "lee todo"):

```
Soy Diego Puelles. Proyecto CLICKICLICK.studio, rama reset/v2-foundation, Fase 3.

Contexto imprescindible (leer solo lo necesario para esta tarea):
- SESSION-CONTEXT.md (estado y reglas de colaboración)

Tarea concreta: [DESCRIBIR AQUÍ EL BOCADO, ACOTADO]

Reglas:
- Explícame antes de ejecutar cualquier comando.
- Un paso cada vez.
- Español directo, sin paja.
- Párate si algo contradice SESSION-CONTEXT.md o el brief.
- No leas documentos que no necesitas para esta tarea; ahorra contexto.
```

---

## Fases completadas

### ✅ FASE 1 — Preparación estratégica (Abril 22)
- Brief estratégico cerrado (BRIEF.md)
- Sistema cromático definido con jerarquía semántica
- Sistema dual de color (marco general vs identidades por proyecto en Acto II)
- Manifiesto narrativo de 3 actos escrito (INSPIRATIONS.md)
- 12 skills instaladas y auditadas: clickiclick-web-design (global), emil-design-eng, 10 threejs-*, playwright-cli
- Stack técnico locked
- PROJECT_GUIDE.md redactado

### ✅ FASE 2 — Identidad visual (Abril 23)
- Firma manuscrita vectorizada desde foto original
- Decisión: versión gruesa manuscrita como isotipo principal (mantiene alma del trazo real)
- Sistema de 4 variantes cromáticas configurado con `currentColor`
- Archivo colocado en `public/brand/firma-diego.svg` (4.5 KB)
- FIRMA-ASSET.md con SVG embebido + guía de implementación React

---

## Estado real del código (al 23 Abril 2026, actualizado en sesión de tarde)

### Ubicación local
```
/Users/andreapuelles/CLICKICLICK/clickiclick-studio/
```

### Stack instalado (de package.json)

**Dependencies:**
- `react` 19.2.5 + `react-dom` 19.2.5
- `vite` 8.0.9
- `tailwindcss` 3.4.19
- `gsap` 3.15.0
- `lenis` 1.3.23
- `framer-motion` 12.38.0
- `three` 0.184.0
- `@react-three/fiber` 9.6.0
- `@react-three/drei` 10.7.7
- `@react-three/postprocessing` 3.0.4
- `react-router-dom` (añadido en Fase 3)
- `split-type` (añadido en Fase 3)

**DevDependencies:**
- `eslint` 9.39 + plugins React
- `@playwright/cli` 0.1.8 + `playwright` 1.60-alpha
- `@vitejs/plugin-react` 6.0.1
- `autoprefixer` 10.5, `postcss` 8.5

### Fuentes instaladas (self-hosted en `public/fonts/`)

**Fraunces (Google Fonts → Display editorial serif):**
- `public/fonts/fraunces/Fraunces-500.woff2`
- `public/fonts/fraunces/Fraunces-500italic.woff2`
- `public/fonts/fraunces/Fraunces-700.woff2`
- `public/fonts/fraunces/Fraunces-900.woff2`

**Switzer (Fontshare → Body sans-serif):**
- `public/fonts/switzer/Switzer-Light.woff2` (weight 300)
- `public/fonts/switzer/Switzer-Regular.woff2` (weight 400)
- `public/fonts/switzer/Switzer-Medium.woff2` (weight 500)

**Gambarino (Fontshare → Display accent):**
- `public/fonts/gambarino/Gambarino-Regular.woff2` (weight 400)

### Carpetas ya correctas
```
public/
├── brand/
│   └── firma-diego.svg   ✅ 4.5 KB, listo para importar
└── fonts/
    ├── fraunces/         ✅ 4 archivos .woff2
    ├── switzer/          ✅ 3 archivos .woff2
    └── gambarino/        ✅ 1 archivo .woff2
```

### Git
- Repo: `clickiclickweb-ui/clickiclick-studio` en GitHub
- Branch de trabajo activa: `reset/v2-foundation`
- `main` sigue apuntando a la versión deployada en Vercel (no tocar hasta merge)

---

## Decisiones LOCKED para Fase 3

### 1. Tipografía → Fraunces + Switzer + Gambarino

**Decisión:** Fraunces como display principal (reemplaza la mención errónea a PP Editorial New en INSPIRATIONS.md).

**Razones:**
- PP Editorial New es de Pangram Pangram, free solo para uso personal. CLICKICLICK.studio es web comercial.
- Fraunces es Google Fonts, **free para uso comercial**.
- Si en Septiembre 2026 (salto a USA) Diego quiere invertir ~$100 en PP Editorial New, el swap es 5 minutos porque estará abstraído en CSS variables.

**Corrección de nomenclatura pendiente:** INSPIRATIONS.md menciona "Gambarino Italic" como accent. Gambarino solo existe en Regular. Al cerrar Fase 3 se actualiza INSPIRATIONS.md para decir "Gambarino (Regular)" como "display accent", no "italic accent".

**Sistema tipográfico final:**

| Rol Tailwind | Fuente | Licencia | Uso |
|-----|--------|----------|-----|
| **font-display** | Fraunces (500, 700, 900 + 500italic) | Google Fonts — free comercial | H1, hero, titulares grandes |
| **font-body** | Switzer (300, 400, 500) | Fontshare — free comercial | Párrafos, UI |
| **font-accent** | Gambarino Regular | Fontshare — free comercial | Citas "signature", frases manifiesto |

**Self-hosted obligatorio.** Fuentes servidas desde `public/fonts/` con `@font-face` + `font-display: swap`. No se usa CDN de Google ni de Fontshare. Razón: Lighthouse >90 requiere no tener third-party requests bloqueantes.

### 2. Git branch → `reset/v2-foundation`

Rama nueva para todo el trabajo de Fase 3. `main` sigue desplegando la web vieja en producción (Vercel auto-deploy). Merge a main solo cuando Fase 3 esté estable y revisada.

### 3. Arquitectura → Single-page home + rutas por case study

Home como single-page long-scroll. Cada case study como página independiente.

**Estructura de rutas:**
```
/                    → home (Hero + Philosophy + Selected Work preview + Process + Services + Signature + Contact + Footer)
/work/cyper          → case study CYPER Botanical Oils
/work/velox          → case study VELOX Urban Bikes
/work/salon-luna     → case study Salón Luna
/work/primaria-stk   → case study Primaria Stk (cuando Ana cierre)
```

### 4. Navegación → Nav fija minimalista

```
┌─────────────────────────────────────────────────────┐
│ [firma-diego.svg]        work · studio · contact   │
└─────────────────────────────────────────────────────┘
```

Isotipo a la izquierda (~36px), 3 anchors a la derecha (lowercase, separados por `·`), fondo `backdrop-filter: blur(20px)`, altura ~64px. Font body Switzer 400, tamaño 14px.

### 5. Paleta CSS — Aproach dual (CSS vars + Tailwind)

Variables CSS en `:root` + extensión en `tailwind.config.js` referenciándolas. Permite usarlas como clases Tailwind (`bg-ink`, `text-garnet`) **y** en CSS puro para shaders GLSL, animaciones GSAP, transiciones cromáticas entre actos.

### 6. Lenis + ScrollTrigger — Sincronización manual

Hook custom `useSmoothScroll` que conecta Lenis con ScrollTrigger. Se monta una sola vez en `App.jsx`.

### 7. Signature.jsx — Componente desde día uno

Crear `<Signature />` React component en Fase 3 aunque no se use hasta Hero (Fase 4). Implementación: SVG inline con `currentColor` para poder cambiar color vía `className` de Tailwind.

---

## Progreso de Fase 3 (checklist)

### Completado
- ✅ Paso 1 — Rama reset/v2-foundation creada y pusheada
- ✅ Paso 2 — src/ limpiado (blob 3D y paleta cream/terracotta fuera)
- ✅ Paso 3 — Dependencias react-router-dom y split-type instaladas
- ✅ Paso 4 — Sistema cromático + tipografía Fraunces/Switzer/Gambarino self-hosted (Fraunces y Gambarino cargando OK tras debugging de @font-face)
- ✅ Paso 5 — Smooth scroll hook (useSmoothScroll.js, después migrado a Context en Paso 8)
- ✅ Paso 6 — Signature component (SVG inline con currentColor)
- ✅ Paso 7 — Layout base con nav fija
- ✅ Paso 8 — React Router con rutas / y /work/:slug + cross-route nav

### Pendiente
- ⏳ Fase 4 (Hero) — abrir conversación nueva en chat web
- ⏳ Reemplazar 4 placeholders del Home (#hero, #work, #studio, #contact) con contenido real durante Fases 4–10
- ⏳ Merge reset/v2-foundation → main al cerrar Fase 3 (solo si Vercel preview pasa verificación visual)
- ⏳ Corregir INSPIRATIONS.md: "Gambarino Italic" → "Gambarino (Regular, accent)"

---

## Workflow de colaboración en Fase 3

### Flujo por cada entregable

1. **Claude del Proyecto** (chat web) genera el plan y/o archivo completo
2. Si es cambio pequeño → Diego lo pega manualmente en VS Code
3. Si requiere correlacionar varios archivos o ejecutar comandos → Claude Code
4. **Diego** verifica el resultado (localhost, `git status`, lo que toque)
5. **Diego** reporta resultado o problema
6. **Claude del Proyecto** ajusta si hace falta y avanza al siguiente paso

### Reglas de ejecución

- Comando por mensaje, no bloques de 10 comandos seguidos.
- Cada vez que se crea/modifica un archivo relevante, commit con mensaje descriptivo.
- Al terminar bloque grande (paleta, fuentes, layout), verificar en localhost:5173 antes de avanzar.
- No mezclar cambios de paleta con cambios de layout en el mismo commit.

---

## Pendiente al cerrar Fase 3

- Diego abre nueva conversación en el Proyecto Claude para Fase 4 (Hero).
- El documento SESSION-CONTEXT.md se actualiza con "✅ FASE 3 completada" + resumen de entregables.
- Se actualiza también INSPIRATIONS.md corrigiendo la nomenclatura "Gambarino Italic" → "Gambarino (Regular, accent)".
- Merge de `reset/v2-foundation` → `main` solo si todo pasa verificación visual y no rompe Vercel.

---

## Referencias rápidas

- **BRIEF.md** → qué somos, qué no somos, criterios de éxito
- **INSPIRATIONS.md** → sistema cromático completo, narrativa 3 actos, patterns técnicos decodificados
- **PROJECT_GUIDE.md** → workflow de skills, estructura de carpetas, fases del proyecto
- **FIRMA-ASSET.md** → SVG del isotipo embebido + guía implementación
- **SESSION-CONTEXT.md** (este) → estado real del código, decisiones locked para Fase 3, workflow de colaboración con los 3 frentes de Claude

---

### ✅ FASE 3 PASO 5 — Smooth scroll hook (Abril 24)
- Creado src/hooks/useSmoothScroll.js
- Lenis + GSAP ScrollTrigger sincronizados vía gsap.ticker (un solo clock)
- duration 1.8 para inercia cinematográfica (Royal Palace pattern, INSPIRATIONS §4)
- useRef guard añadido para neutralizar React 18 StrictMode double-mount
  (patrón obligatorio para librerías con ciclo de vida propio: Lenis, GSAP, Three.js)
- lagSmoothing(0) desactivado para evitar desincronización GSAP↔Lenis
- window.__lenis expuesto solo en DEV para debugging desde consola
- Integrado en App.jsx + bloque smoke test scroll temporal (eliminar en Fase 4)
- Verificado en localhost:5173 — inercia visible, consola limpia
- Commit: fda50f3 en reset/v2-foundation

**Aprendizaje importante para futuras fases:**
La "U" de VS Code puede ser engañosa. Fuente de verdad = `cat` desde terminal.
Librerías con ciclo de vida (Lenis, GSAP, R3F) siempre necesitan ref guard en StrictMode.

### ✅ FASE 3 PASO 6 — Signature component (Abril 24)
- Creado src/components/brand/Signature.jsx
- SVG inline con fill="currentColor" → color heredado vía Tailwind text-*
- Props: className (sizing + color), aria-label (default "Diego Puelles"),
  aria-hidden (para uso decorativo), ...rest spread
- Decisión: sizing vía clases Tailwind (w-9, w-32) en lugar de prop size numérico
  — mantiene consistencia con el sistema y permite responsive nativo
- Decisión: color vía className text-* en lugar de prop variant — más explícito,
  menos magia, legible al instante en JSX
- Verificado en localhost:5173 con tres firmas (cream, garnet, gold-aged)
- Bloque de prueba retirado tras verificación; import mantenido para Paso 7
- Commit: 742387a en reset/v2-foundation

**Aprendizaje importante para futuras fases:**
JSX fuera del return NO es error de sintaxis — es código muerto silencioso.
Vite/Babel compilan a React.createElement() y descartan el resultado. Cero
errores en consola, cero render. La regla operativa: cualquier JSX que escribas
debe estar DENTRO de un return de un componente que efectivamente se monta.

**Aprendizaje sobre división de tareas:**
Crear componente nuevo desde cero → chat web suficiente.
Debuggear "no se ve" cuando no hay errores en consola → Claude Code obligatorio
(necesita correlacionar imports + estructura del return + wrapper padres).
Aplicado correctamente en este Paso tras una falsa salida.

###  ✅ FASE 3 PASO 7 — Layout base con nav fija (Abril 27)
- Creado src/components/layout/Layout.jsx (wrapper global con Nav + main#top + footer placeholder)
- Creado src/components/layout/Nav.jsx (fija top, h-16, isotipo izquierda + 3 anchors right work/studio/contact con separadores middle-dot)
- Modificado src/styles/global.css (anadidos scroll-padding-top: 4rem y .nav-anchor con transition + hover en media query hover/pointer-fine)
- Modificado src/App.jsx (envuelto en Layout, eliminado import Signature ahora vive en Nav)
- Creado .vscode/settings.json (silencia warnings @tailwind del linter CSS de VS Code)
- Modificado .gitignore (anadida excepcion !.vscode/settings.json + limpieza de bloque Claude skills duplicado x3)
- Verificado en localhost:5173: nav fija visible, blur al scrollear, isotipo cream, anchors cream-soft con hover a cream, scroll suave con Lenis intacto
- Commits en reset/v2-foundation:
  - 8dc68d9 feat(layout): nav fija + Layout wrapper (Paso 7)
  - 65d5da1 fix(vscode): restore settings.json content (overwritten by gitignore content during heredoc paste)
- Pendiente Paso 8: cross-route nav (TODO marcado en Nav.jsx) cuando llegue React Router

**Aprendizaje critico sobre transmision de JSX por chat:**
Las etiquetas JSX con atributos partidos en multiples lineas se corrompen al copiar
desde el render del chat al terminal/VS Code: las aperturas tipo `<a` seguidas de
salto-de-linea + indentacion + atributo `href` se PIERDEN silenciosamente. Sintoma:
output del cat muestra `href="..."` huerfano sin la `<a` que lo abria, tambien
duplicaciones en bucle como `{i < NAV_LINKS.leng              {i < NAV_LINKS.leng...`.
Causa probable: el render del bloque de codigo en la app de Claude pierde caracteres
en patrones especificos de JSX multilinea.
Regla operativa para todo el proyecto: TODO JSX que se transmita por chat debe
escribir cada elemento con sus atributos en UNA SOLA LINEA, aunque visualmente
quede menos elegante. La fiabilidad de transmision pesa mas que la legibilidad
del codigo fuente. Verificar SIEMPRE con `cat` despues de pegar.

**Aprendizaje critico sobre heredocs grandes y redireccion:**
Un heredoc largo puede acabar redirigiendose al archivo equivocado si hay sugerencias
de autocompletado activas o estado raro en terminal. Sintoma: cat al archivo destino
muestra contenido COMPLETO de otro archivo distinto al que se pretendia escribir.
Caso real: `cat > .gitignore << EOF` con contenido de gitignore acabo escribiendo
en `.vscode/settings.json` (probablemente por sugerencia de path al pegar).
Regla operativa: para archivos pequeños (< 10 lineas tipo settings.json, configs JSON
cortas) usar heredoc es seguro. Para archivos medianos o grandes, preferir editar
en VS Code y verificar con cat. Tras CUALQUIER heredoc, hacer cat del archivo
destino antes de continuar.

**Aprendizaje sobre editores de terminal:**
macOS Terminal abre `pico` cuando se pide `nano`, no nano real. pico tiene bugs
conocidos con paste de texto largo y guardado silencioso fallido. La barra inferior
del editor delata cual estas usando: si pone `^O Write Out` puede ser cualquiera de
los dos, pero la pestana del terminal en VS Code lo identifica explicitamente
("pico" o "nano"). Para ediciones criticas de configs, preferir VS Code o heredoc
corto sobre pico/nano.

**Aprendizaje sobre `cat` como juez supremo:**
VS Code, pico, nano y otros editores pueden mostrar buffers obsoletos o cache stale.
`cat ARCHIVO` siempre lee desde disco. Cada vez que se dude del estado de un archivo,
cat. Aplica especialmente despues de heredocs, paste largos, o cuando un editor
muestra "modified" indicators dudosos.


### ✅ FASE 3 PASO 8 — React Router + cross-route nav (Abril 27)
- Creado src/context/SmoothScrollContext.jsx (Lenis migrado de hook a Context Provider)
- Eliminado src/hooks/useSmoothScroll.js (reemplazado por el Context)
- Creado src/components/ScrollToTop.jsx (gestión scroll en cambios de ruta + hash navigation)
- Creado src/pages/Home.jsx (4 secciones placeholder: #hero, #work, #studio, #contact)
- Creado src/pages/CaseStudy.jsx (placeholder con useParams para /work/:slug)
- Reescrito src/components/layout/Nav.jsx (cross-route: pathname + useNavigate condicional)
- Reescrito src/App.jsx (BrowserRouter + SmoothScrollProvider + Routes)
- Configuración Lenis preservada exactamente del hook viejo (duration 1.8, easing custom,
  smoothWheel, wheelMultiplier 1, touchMultiplier 2). Refactor de ubicación, no de comportamiento.
- Verificado en localhost:5173: las 6 rutas funcionan, cross-route nav resuelve en un click,
  refresh sobre /work/:slug no rompe (Vite SPA fallback), consola limpia.
- Commits en reset/v2-foundation:
  - 05e8c1f refactor(scroll): mover Lenis a Context Provider
  - 3cb3895 feat(routing): ScrollToTop doble RAF + lenis.resize
  - 69307b0 feat(pages): Home y CaseStudy placeholders
  - 0f1d118 feat(nav): comportamiento cross-route
  - 19d6df8 feat(routing): React Router / y /work/:slug

**Aprendizaje critico sobre timing en route changes con smooth scroll:**
Cuando una accion combina cambio de pathname Y hash en una sola navegacion
(navigate('/#studio') desde /work/cyper), el scroll-to-hash NO puede ejecutarse
de inmediato ni con setTimeout fijo. React necesita tiempo para desmontar la
ruta vieja, montar la nueva, y que el browser haga layout del nuevo DOM antes
de que existan los anchors. Un setTimeout(100) funciona "a veces" porque el
margen es ajustado y depende del peso del componente que se monta.
Patron correcto: doble requestAnimationFrame anidado.
- Primer RAF: en cola tras el commit de React, pero el layout aun no esta confirmado.
- Segundo RAF: garantiza que el browser ha hecho al menos un layout pass.
Antes del scrollTo final, llamar a lenis.resize() para forzar recalculo de
alturas del documento, y pasar el nodo resuelto (no el selector) a lenis.scrollTo.
Aplicable a cualquier futura fase con transiciones entre rutas que dependan
de elementos del DOM nuevo.

**Aprendizaje sobre exposicion de instancias de librerias con ciclo de vida:**
Cuando una libreria con ciclo de vida propio (Lenis, GSAP timelines, R3F scenes)
necesita ser accedida desde multiples componentes hermanos, el patron correcto
es Context, no window globals ni prop drilling. window.__lenis se mantiene en
DEV para debugging desde consola, pero la fuente de verdad para componentes
React es el Context. Coste: 10 lineas mas. Beneficio: arquitectura limpia que
escala cuando otras secciones necesiten controlar el scroll (boton back-to-top
en footer, pause/resume durante transicion Three.js, etc).

**Aprendizaje sobre commits atomicos durante refactors:**
Cuando un refactor toca varios archivos de forma logicamente independiente
(mover hook a Context, crear componente nuevo, reescribir nav, anadir router),
mejor 5 commits atomicos por unidad logica que 1 commit gigante. El historial
cuenta la historia real del trabajo y permite git bisect si algo se rompe en
el futuro. Coste minimo (estructurar git add por archivos), beneficio enorme
en mantenibilidad.

**Aprendizaje sobre commits que cuentan historia real vs historia inventada:**
Si un archivo se escribio mal y se corrigio antes de llegar a produccion (caso
ScrollToTop.jsx con setTimeout que nunca llego a main), commitear solo la
version final es mas honesto que commitear la version rota + el fix encima.
La regla: el historial de git debe contar lo que efectivamente paso en
produccion, no el proceso interno de desarrollo. El proceso vive en
SESSION-CONTEXT.md, donde si tiene sentido documentar el bug y el fix.

**Versión:** 1.2
**Fecha:** 27 Abril 2026
**Cambios v1.2:** cierre Paso 8 con 5 commits, aprendizajes sobre timing en route changes, exposicion de instancias via Context, commits atomicos, historial honesto.
**Próxima actualización:** al cerrar Fase 3 (merge de reset/v2-foundation a main).

---

## APRENDIZAJES PROYECTO AFFARY (Sesión 29-30 Abril 2026)

Sesión maratónica de 14+ horas construyendo propuesta comercial
premium en Figma para clienta Ana Rafaele (Lima, Perú). Aunque el
proyecto Affary no es directamente CLICKICLICK.studio, los
aprendizajes metodológicos son aplicables a TODO proyecto futuro
con Claude Code o agentes de IA similares.

### Configuración Figma + MCP

- Los límites del MCP se calculan según donde está alojado el
  archivo, NO según los planes de la cuenta. Archivos en
  "Borradores personales" usan plan personal (Starter View = 6
  calls/mes). Para usar plan Education con 3000 créditos/mes, el
  archivo DEBE estar dentro de un proyecto del equipo Education.
- Whoami funciona aunque use_figma esté bloqueado. Sirve para
  verificar autenticación sin gastar créditos.
- El comando `claude.ai` dentro de la app Claude Desktop activa
  Claude for Chrome tools. No documentado pero funciona.
- Font Helper de Figma no funciona en Mac Intel 2015 con macOS
  Monterey. Solución: Inter como fallback de Switzer/Gambarino.
- Figma Desktop consume mucha RAM. En Macs viejos, trabajar en
  Figma web vía Chrome.

### Metodología de trabajo con Claude Code (clave)

Probamos tres filosofías:

1. Coordenadas exactas estrictas: funciona pero las skills no
   aportan, resultado correcto pero sin alma editorial
2. Libertad creativa total: fracasa rotundamente. Claude Code
   replica páginas anteriores sin innovar y comete errores
   técnicos (solapamientos de título, decisiones inconsistentes)
3. **Híbrida (coordenadas + invitación a sugerir)**: óptima

**La metodología híbrida es replicable a cualquier proyecto futuro**.
Estructura del prompt:

- Bloque 1: Restricciones técnicas fijas (frame, paleta, fuentes)
- Bloque 2: Contenido literal fijo (no parafraseable)
- Bloque 3: Composición con coordenadas exactas
- Bloque 4: Invitación a sugerir mejoras (técnicas y editoriales)
- Bloque 5: Proceso en 2 fases (proponer → confirmar → construir)

El patrón "consultar antes de ejecutar" es lo que diferencia
trabajo correcto de trabajo excelente. Claude Code reporta
sugerencias antes de aplicar, espera confirmación humana.

### Diseño editorial premium - técnicas validadas

- Drop cap editorial (letra inicial gigante en Fraunces Italic
  granate sobre el primer párrafo) diferencia documento comercial
  de objeto editorial premium tipo Wallpaper o Monocle.
- Standfirst italic granate como bisagra entre título y cuerpo es
  técnica de revistas premium que aporta sofisticación.
- Romanos en gold-aged como anclas tipográficas que se repiten en
  páginas distintas crean ritmo visual del documento completo.
- Eliminar títulos redundantes en páginas continuación
  (manteniendo solo subtítulo italic) crea sensación de spread
  editorial y diferencia un documento de propuesta comercial
  estándar.
- Punto final después de títulos editoriales ("entendido.",
  "trabajar.", "marca.") es detalle fino que pocos diseñadores
  aplican.

### Sistema cromático refinado

- Granate oscuro #A31E38 NO funciona en textos pequeños sobre
  fondo ink. Pierde legibilidad. Para precios pequeños y tags de
  condiciones legales usar granate luminoso #C42548 (mismo matiz,
  +luminosidad ~10%).
- El gold-aged #8A7046 apaga el documento si se usa demasiado.
  Mejor reservarlo para acentos puntuales (romanos, números de
  página, autoría). El granate da más vida.
- Diferenciación cream brillante #EDE4CE / cream-soft #B8AB90
  entre títulos y descripciones es clave para sensación premium.
  Es exactamente lo que separa "amateur" de "senior".

### Tipografía y composición

- Letter-spacing inversamente proporcional a longitud de palabra:
  - Tags cortos (10-12 caracteres): 20-25%
  - Tags largos (15+ caracteres): 10% máximo
  - Tags muy largos rompen cohesión de lectura con spacing alto
- Width insuficiente con letter-spacing alto corta palabras
  (ejemplo real: "PLAZO" → "PLAZ", "INVERSIÓN" → "INVERS").
  Verificar siempre que el width sea suficiente.
- Footer DEBE ser invariable en todas las páginas de un documento
  multipágina (excepto portada que puede tener footer más
  relajado).
- Header DEBE ser invariable en todas las páginas de un documento
  multipágina.

### Errores y patrones a evitar

- Texto crítico (títulos, contenido legal) NUNCA dejarlo a libertad
  creativa total de Claude Code. Genera solapamientos.
- Variar el footer página a página rompe coherencia editorial.
- Dejar texto sobre fondo oscuro en colores de baja luminosidad
  hace que pierda legibilidad — verificar contraste.
- JSX/código multilínea se corrompe al copiar de chat a terminal
  (heredado de sesiones anteriores, confirmado de nuevo).

### Aprendizaje meta sobre Diego como director creativo

Durante la sesión Diego identificó intuitivamente:
- Cuándo el proceso obstaculizaba la creatividad de las skills
- Qué tratamientos cromáticos no funcionaban antes que Claude
- Decisiones editoriales que mejoraban el documento (eliminar
  título redundante de página VI, mantener portada con footer
  diferente al estándar, granate luminoso para precios)

**Este patrón "Diego propone dirección, Claude ejecuta con
sugerencias técnicas" debe ser el modelo para todos los proyectos
futuros donde Diego dirige creatividad y Claude aporta
implementación + craft técnico.**

---

**Versión:** 1.2
**Fecha:** 30 Abril 2026
**Cambios v1.2:** Sección completa de aprendizajes del proyecto
Affary aplicables a metodología de trabajo con Claude Code.