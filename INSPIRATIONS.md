# CLICKICLICK.studio — Inspirations & Technical References

> Biblioteca decodificada de referencias visuales, patterns técnicos y narrativa cromática del proyecto. Este documento se lee junto al BRIEF.md antes de cualquier trabajo de diseño o construcción.

---

## 1. EL MANIFIESTO NARRATIVO

### El viaje del visitante

CLICKICLICK.studio no es una página. Es **un viaje a un universo**.

> *"Estás entrando a nuestro universo, el universo donde hacemos tu obra, el universo que construye tu mundo digital, que realmente construye tu empresa, con nuestro universo profesional, elegante pero con riesgo, original y único."* — Diego Puelles

El visitante experimenta tres actos cromáticos diferenciados:

### ACTO I — Entrada al universo CLICKICLICK
**Atmósfera:** sobria, refinada, confidente. La paleta oficial impone presencia.
**Secciones:** Hero · About · Philosophy
**Paleta dominante:** `--ink` + `--cream` + `--garnet` (con susurro `--teal-night`)
**Mensaje implícito al visitante:** *"estás entrando, somos serios, somos distintos"*

### ACTO II — Inmersión en las obras
**Atmósfera:** explosión cromática controlada. Cada proyecto es un universo paralelo.
**Secciones:** Selected Work (cada proyecto con identidad propia)
**Paleta dominante:** **cada obra tiene su propia paleta** que respeta el marco general pero se desarrolla con libertad.
**Mensaje implícito al visitante:** *"cada obra es su propio universo, lo construimos a medida"*

### ACTO III — Vuelta al hogar CLICKICLICK
**Atmósfera:** regresa la sobriedad, ahora con confianza adquirida.
**Secciones:** Process · Services · Contact · Signature · Footer
**Paleta dominante:** `--garnet` + `--cream` + `--ink` (con detalle `--gold-aged` en firma)
**Mensaje implícito al visitante:** *"todo lo que has visto vino de aquí. Ahora confías. Hablemos."*

**Esto es narrativa cromática.** Lo hacen los grandes (Studio Feixen, Pentagram, Apple en sus eventos). Es un VIAJE, no una página.

---

## 2. SISTEMA DUAL DE COLOR (cómo se aplica el manifiesto)

### Marco general (Actos I y III)
La paleta oficial del BRIEF.md aplicada estrictamente:

```css
/* BASE */
--ink: #0A0706;
--cream: #EDE4CE;
--cream-soft: #B8AB90;

/* SIGNATURE */
--garnet: #A31E38;
--garnet-deep: #6E1425;

/* CONTRAPUNTO */
--teal-night: #0B2E3E;
--teal-luminous: #7CAFAE;

/* ORO (≤2%, semántico) */
--gold-aged: #8A7046;

/* SECRETOS (≤1%) */
--moss: #2D3A2A;
--lavender-dust: #9B8CB5;
```

### Identidades por proyecto (Acto II)
Cada proyecto del Selected Work tiene **su propia paleta auxiliar** que se respeta su universo. Ejemplos preliminares (a confirmar al construir cada caso):

**CYPER Botanical Oils:**
- Base: `--ink` (compartido marco)
- Signature: `#5C7A3E` (verde botánico) + `#B85F3F` (terracota)
- Acento: `#D4B575` (oro de aceite)

**VELOX Urban Bikes:**
- Base: `#0A1428` (azul cobalto profundo)
- Signature: `#FF4500` (naranja eléctrico)
- Acento: `#C7CACE` (gris urbano)

**Salón Luna:**
- Base: `#F2EBDB` (cream warm)
- Signature: `#B85F3F` (terracota) + `#9B8CB5` (lavanda)
- Acento: `#8A7046` (oro)

**Primaria Stk** (cuando se cierre con Ana):
- A definir según identidad real del cliente

### Reglas de transición entre actos

1. **No cortes bruscos** — la transición entre Acto I → II → III usa **gradientes verticales** o **scroll-linked color shifts** que el ojo registra subliminalmente.
2. **Cada proyecto es contenido en su propia "cápsula"** — no afecta al resto del scroll.
3. **El marco general SIEMPRE recupera el control** después de cada proyecto.
4. **La nav y el footer mantienen marco general SIEMPRE** — son la voz de CLICKICLICK que persiste.

---

## 3. REFERENCIAS DECODIFICADAS

### Studio Feixen (studiofeixen.ch)

**Qué es:** Estudio gráfico suizo con sede en Lucerna. Identidades de marca, fonts propios, posters.

**Qué tomamos para CLICKICLICK:**
- **Tipografía como identidad central** (no decoración)
- **Tono honesto y sin BS:** "Studio Feixen creates good looking stuff to make the world a better place" — directo, sin pretensión
- **Navegación con personalidad propia** (sus tags Space/Surface/Time son únicos)
- **Quick Links** como concepto de acceso rápido a obras destacadas
- **Cohesión de marca con libertad cromática por proyecto** (es exactamente nuestro Acto II)

**Qué NO tomamos:**
- Maximalismo cromático extremo en marco general (no encaja con nuestra paleta granate sobria)
- Estética "Helvetica brutalism" pura — somos más editorial-cinemático

### Neu Web Studio (neuwebstudio.com)

**Qué es:** Estudio de Ruta Beniusyte (Amsterdam, ex-arquitecta). Webs Webflow con animaciones cinematográficas. Clientes premium (Sheldon Chalet, Bear Nash).

**Qué tomamos para CLICKICLICK:**
- **El proceso visible:** 5 pasos detallados con días concretos por fase. Esto vende confianza brutal. **CLICKICLICK.studio debe tener una sección Process así.**
- **Showcase video-first:** sus proyectos NO son screenshots, son vídeos cortos (5-10s) que muestran scroll, hover, animación. Mucho más inmersivo.
- **Tipografía display masiva en hero** ("Cinematic & Immersive Web Experiences")
- **Testimonios protagonistas** (no escondidos al final)
- **Estructura de Featured Work** con preview/hover que reproduce vídeo

**Qué NO tomamos:**
- Que usen Webflow (somos React + Vite)
- El amarillo neón de marca (es suyo)
- Estructura demasiado corporate

**Acción crítica:** Esta es probablemente la web más cercana a lo que vamos a construir. Estudiarla con detalle, especialmente sección Process y showcase de proyectos.

### Basement Studio (basement.studio)

**Qué es:** Estudio argentino con clientes top mundial (Vercel, Linear, MrBeast, Cursor).

**Qué tomamos:**
- **Energía + capacidad técnica visible** desde el primer scroll
- **Stack moderno asumido** (Next/React/Three.js)
- **Showcase como rey** de la web

**Qué NO tomamos:**
- Tono "cool shit that performs" (somos más editorial-elegante)
- Amarillo neón (su firma)

### Awwwards SOTD (awwwards.com)

**Para qué sirve:** Referencia continua. Cuando dudemos de si una decisión visual es premium, comparamos con SOTDs recientes.

---

## 4. PATTERNS TÉCNICOS DE LA INDUSTRIA (Decoded by Gemini)

A continuación, el desglose técnico de 4 patterns que vamos a aplicar en CLICKICLICK. Cada uno mapeado a una sección concreta de nuestra web.

### Pattern 1 — "StringTune" (Scroll-linked 3D model assembly)
**Estilo visual:** Dark mode, tipografía grotesca grande, estética técnica.
**Comportamiento:** Modelo 3D detallado flota en el centro. Al scrollear, el modelo se desensambla — los componentes se separan en X, Y, Z (explode view).

**Stack técnico:**
- **Renderizado:** Three.js / React Three Fiber, modelo .gltf/.glb cargado y exposed por meshes individuales
- **Scroll-linking:** Sincronización del progreso del scroll (0→1) con valores de rotación/posición del modelo
- **Smooth scroll:** Lenis para interpolar inercia

**📍 Aplicación en CLICKICLICK:**
Aplicable al **Hero** si decidimos hacer las letras "CLICKICLICK" como objeto 3D que se desensambla al scrollear. **Decisión pendiente.**

### Pattern 2 — Neu Web Studio (Multi-effect interactive)
**Estilo visual:** Minimalista, micro-interacciones intensas, manipulación del DOM.

**Comportamientos clave:**
1. **Immersive Reveal:** imagen enmascarada crece exponencialmente al scrollear hasta llenar viewport
2. **3D Slider:** navegación horizontal con paralaje en eje Z (texto, fondo, primer plano a velocidades diferentes)
3. **Exploding Objects:** elementos apilados centrados salen disparados radialmente con easings distintos para revelar datos

**Stack técnico:**
- **CSS avanzado:** `clip-path: polygon()` animado
- **Transformaciones:** `transform: translate3d()` + `perspective` (aceleración GPU)
- **Orquestación:** Timelines JS atadas a Intersection Observer

**📍 Aplicación en CLICKICLICK:**
- **Selected Work:** Immersive Reveal para entrar a cada proyecto
- **Process:** Exploding objects para mostrar las 5 fases de trabajo

### Pattern 3 — $10K Websites (Editorial 3D meets sticky scroll)
**Estilo visual:** Diseño editorial, mezcla arte clásico (pinturas) con tipografía serif moderna e interfaces 3D.

**Comportamiento:** Alternancia agresiva entre secciones de scroll 2D (text reveals línea-por-línea, masking) y secciones de scroll 3D (objeto producto rotando 360° hiper-realista según scroll).

**Stack técnico:**
- Posicionamiento `sticky/fixed` para mantener canvas 3D en viewport mientras DOM fluye encima (z-index layering)
- Materiales PBR (Physically Based Rendering) en Three.js (`MeshStandardMaterial`) + mapas HDRi para reflejos fotorrealistas

**📍 Aplicación en CLICKICLICK:**
**Sección "Process"** o una sección destacada de un proyecto. El concepto sticky-canvas es ideal para mostrar un proyecto desde múltiples ángulos sin que el usuario salga del flow del scroll.

### Pattern 4 — Royal Palace Hotel (GLSL shaders + text reveals)
**Estilo visual:** Narrativa de lujo, paleta cálida (crema/dorado), tipografía elegante, ritmo pausado.

**Comportamiento:** Transiciones entre páginas extremadamente fluidas con distorsión sutil al moverse (efecto líquido/cortina). Scroll "pesado" y fluido. Textos aparecen con máscara ascendente.

**Stack técnico:**
- **Shaders GLSL:** Vertex Shaders + Fragment Shaders sobre canvas 2D, distorsionando texturas (HTML reemplazado por texturas WebGL) según Scroll Velocity
- **Manipulación de strings:** librerías para fragmentar nodos de texto en `<span class="word">` o `<span class="char">` para staggered animation

**📍 Aplicación en CLICKICLICK:**
- **Hero text reveals:** "CLICKICLICK" aparece letra por letra con stagger, después "obras digitales firmadas a medida" en máscara ascendente
- **Contact section:** distorsión sutil en hover sobre la firma manuscrita

---

## 5. STACK TÉCNICO CONFIRMADO

```
BASE:
- Vite + React 18
- Tailwind CSS
- Fontshare (PP Editorial New / Switzer / Gambarino)

ANIMATION & INTERACTION:
- GSAP + ScrollTrigger        → scroll-linked animations
- Lenis                       → smooth scroll suave
- Framer Motion               → micro-interactions React
- split-type                  → text fragmentation char/word

3D (selectivo, Hero + 1-2 secciones):
- React Three Fiber (R3F)     → wrapper React de Three.js
- @react-three/drei           → helpers (Float, OrbitControls, etc.)
- @react-three/postprocessing → bloom, DOF, efectos

DEPLOY:
- GitHub (clickiclickweb-ui/clickiclick-studio)
- Vercel (auto-deploy on push to main)

DEV TOOLS:
- Playwright-cli              → testing visual automatizado
```

---

## 6. SKILLS INSTALADAS Y CUÁNDO USAR CADA UNA

### Skills siempre activas (filosofía + identidad)

| Skill | Ubicación | Cuándo se activa | Para qué |
|---|---|---|---|
| **clickiclick-web-design** | `~/.claude/skills/` | Siempre que se trabaje en este proyecto | Identidad de marca, paleta, tipografía, narrativa, anti-patterns |
| **emil-design-eng** | `.claude/skills/` (project) | Siempre durante diseño UI | Principios de craft: animaciones, easings, transitions, performance, polish |

### Skills condicionales (Three.js — se cargan solo si aplica)

| Skill | Cuándo se activa | Aplica a |
|---|---|---|
| **threejs-fundamentals** | Crear escena 3D, cámaras, renderer | Cualquier sección con 3D |
| **threejs-geometry** | Trabajar con shapes, BufferGeometry, instancing | Hero (letras 3D), proyectos con formas custom |
| **threejs-materials** | PBR, ShaderMaterial, materiales custom | Sección sticky-canvas (proyectos en 3D) |
| **threejs-lighting** | Luces, sombras, environment maps, HDRi | Cualquier escena 3D realista |
| **threejs-textures** | UV mapping, environment maps, render targets | Materiales PBR de proyectos |
| **threejs-animation** | Keyframe, skeletal, morph targets | Hero (letras desensamblándose) |
| **threejs-loaders** | Cargar modelos GLTF/GLB | Si usamos modelos 3D externos |
| **threejs-shaders** | GLSL, ShaderMaterial, custom effects | Pattern 4 Royal Palace (distorsiones), efectos hero |
| **threejs-postprocessing** | Bloom, DOF, screen effects | Polish atmosférico de hero |
| **threejs-interaction** | Raycasting, mouse/touch, scroll-3D | Hero interactivo, click-to-explore proyectos |

### Skill semi-activa (solo cuando queramos verificación visual)

| Skill | Cuándo se activa | Para qué |
|---|---|---|
| **playwright-cli** | Cuando queramos que Claude vea/interactúe con la web en vivo | Verificación visual automatizada, testing de interacciones, screenshots automáticos durante desarrollo |

**REGLA SOBRE PLAYWRIGHT-CLI:** No se activa por defecto. Solo cuando se le pide explícitamente algo como *"verifica que el hero se ve bien"* o *"haz screenshot del estado actual"*. Esto previene uso innecesario de tokens y mantiene control sobre qué se ejecuta.

---

## 7. ANTI-PATTERNS GLOBALES

Combinación de los anti-patterns del BRIEF.md + skill Emil + lecciones aprendidas:

### De diseño visual
- ❌ Gradientes de 3+ colores
- ❌ Fuentes genéricas (Inter, Roboto, Arial sin contexto)
- ❌ Centered hero con centered CTA (cliché agencia)
- ❌ Emojis en copy profesional
- ❌ Más de 2 colores de marca activos en una sección del marco general
- ❌ Lorem ipsum en código final
- ❌ Botones con sombra difusa + gradient + border-radius 16px+ (estética 2018)

### De animación (heredado de Emil)
- ❌ `transition: all` — siempre especificar propiedad
- ❌ `scale(0)` en entrada — empezar desde `scale(0.95)` con opacity
- ❌ `ease-in` en UI — usa `ease-out` o curva custom
- ❌ `transform-origin: center` en popovers — usa origen del trigger
- ❌ Animaciones >300ms en interacciones UI (botones, dropdowns, tooltips)
- ❌ Animaciones en acciones de teclado (Cmd+K, etc.) — instantáneo
- ❌ Hover sin media query `@media (hover: hover) and (pointer: fine)` — falsa activación en touch
- ❌ Keyframes en elementos triggerados rápidamente — usa CSS transitions (interruptibles)
- ❌ Misma duración enter/exit — exit siempre más rápido (200ms)
- ❌ Elementos apareciendo todos a la vez — añadir stagger 30-80ms

### De 3D (específico para nuestro nivel selectivo)
- ❌ 3D decorativo sin propósito narrativo (lección aprendida del blob descartado)
- ❌ Modelos 3D pesados sin optimización (usar Draco compression para GLTF)
- ❌ Animaciones 3D en pages que no las justifican (rendimiento)
- ❌ Múltiples canvas Three.js simultáneos (consume GPU)

### De código
- ❌ `localStorage` o `sessionStorage` (no soportados en Claude artifacts)
- ❌ Librerías que no están en el stack confirmado
- ❌ Next.js (somos Vite)
- ❌ shadcn/ui (componentes custom)
- ❌ Copy en primera persona plural fake ("we make...")

---

## 8. CRITERIOS DE CALIDAD (cómo evaluamos cada sección)

Cada sección construida debe pasar estos checkpoints antes de considerarse "terminada":

### Visual
- [ ] Respeta paleta del acto correspondiente (I, II, o III)
- [ ] Tipografía usa display + body + italic accent correctos
- [ ] Spacing armonioso (8/12/16/24/32/48/64/96/128 grid)
- [ ] Detalle ornamental presente (números romanos, símbolos sutiles, separadores finos)

### Interacción
- [ ] Botones con `transform: scale(0.97)` en `:active`
- [ ] Hovers con `@media (hover: hover) and (pointer: fine)`
- [ ] Animaciones <300ms con curvas custom (`cubic-bezier(0.23, 1, 0.32, 1)`)
- [ ] Ningún `ease-in`, ningún `transition: all`
- [ ] `prefers-reduced-motion` respetado

### Performance
- [ ] Solo `transform` y `opacity` animadas
- [ ] Lighthouse >90 en performance
- [ ] First contentful paint <1.5s
- [ ] No layout shifts en scroll

### Narrativa
- [ ] La sección sirve al manifiesto de los 3 actos
- [ ] El cambio cromático (si es transición) es consciente
- [ ] El visitante "entiende" implícitamente dónde está del viaje

---

## 9. RECURSOS EXTERNOS DE CONSULTA

Cuando se necesite implementar algo específico, consultar estos recursos en este orden:

1. **Skills locales** (Emil, Three.js, playwright-cli) — primera fuente
2. **GSAP docs:** https://gsap.com/docs/v3/Plugins/ScrollTrigger/
3. **Lenis docs:** https://www.lenis.dev/ y https://github.com/darkroomengineering/lenis
4. **Tympanus Codrops:** https://tympanus.net/codrops/ — patterns avanzados específicos
5. **Shader Gradient:** https://shadergradient.co/ — gradientes shader animados (para fondos)
6. **Three.js docs:** https://threejs.org/docs/ — cuando las skills locales no cubran un caso

---

## 10. NOTAS FINALES SOBRE EL TONO

CLICKICLICK.studio es **profesional, elegante, pero con riesgo. Original y único.** No somos:

- ❌ Un estudio sobrio aburrido (Vercel-style sin alma)
- ❌ Un experimento maximalista caótico (Memphis Design)
- ❌ Una agencia comercial genérica (templates Webflow)
- ❌ Un portfolio personal modesto

Somos un **estudio de autor con identidad, pasión y oficio**. Cada decisión técnica sirve al manifiesto narrativo. Cada animación tiene propósito. Cada color cuenta una historia.

> **El visitante debe sentir que está descubriendo algo, no consumiendo una página.**

---

**Versión:** 1.0
**Fecha:** Abril 2026
**Lectura obligatoria junto con:** BRIEF.md, ~/.claude/skills/clickiclick-web-design/SKILL.md
