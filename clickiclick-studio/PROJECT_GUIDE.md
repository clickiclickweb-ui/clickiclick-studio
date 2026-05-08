# CLICKICLICK.studio — Project Guide

> Documento operativo. Se lee al ABRIR el proyecto en Claude Code, antes de cualquier tarea. Define el orden de lectura, el workflow y las skills disponibles.

---

## Para Claude Code: orden de lectura obligatorio

Cada vez que se inicie una sesión en este proyecto, leer en este orden estricto:

1. **`BRIEF.md`** — la constitución estratégica. Posicionamiento, audiencia, propósito, narrativa, criterios de éxito.
2. **`INSPIRATIONS.md`** — referencias visuales decodificadas, manifiesto narrativo de los 3 actos, patterns técnicos, sistema dual de color.
3. **`~/.claude/skills/clickiclick-web-design/SKILL.md`** — la skill ejecutiva con paleta, tipografía, reglas de animación, anti-patterns, definition of done.

Después, según el contexto de la tarea, cargar las skills condicionales:

- **`emil-design-eng`** (project skill) — siempre activo para principios de UI craft
- **`threejs-*`** (10 skills) — solo cuando se trabaje con 3D
- **`playwright-cli`** — solo cuando el usuario pida verificación visual o testing

---

## Para Diego: cómo arrancar Claude Code en este proyecto

### Sesión típica de trabajo

```bash
cd ~/CLICKICLICK/clickiclick-studio
claude
```

Cuando Claude arranque, debe leer automáticamente los 3 documentos en orden. Si no lo hace, recordárselo:

```
Lee primero BRIEF.md, INSPIRATIONS.md, y la skill clickiclick-web-design antes de hacer nada.
```

### Para tareas específicas, prompts recomendados

**Construir una sección nueva:**
```
Vamos a construir la sección [NOMBRE]. Esta sección pertenece al ACTO [I/II/III].
Aplica la paleta correspondiente y los principios narrativos del documento INSPIRATIONS.md.
Antes de empezar, dime qué decisiones críticas necesitas resolver.
```

**Iterar visualmente:**
```
Activa playwright-cli, abre localhost:5173, haz screenshot del estado actual,
y dime 3 cosas que mejorarías según los principios de emil-design-eng.
```

**Trabajar con 3D:**
```
Vamos a añadir 3D a la sección [NOMBRE]. Lee threejs-fundamentals + threejs-shaders.
El propósito narrativo del 3D aquí es: [PROPÓSITO]. Si no tiene propósito claro, párame.
```

**Revisar código UI existente:**
```
Revisa el código de [ARCHIVO] usando los principios de emil-design-eng.
Dame el output en formato tabla Before/After/Why.
```

---

## Estructura del proyecto

```
~/CLICKICLICK/clickiclick-studio/
│
├── BRIEF.md                          ← constitución estratégica
├── INSPIRATIONS.md                   ← referencias y narrativa
├── PROJECT_GUIDE.md                  ← este documento
├── README.md                         ← documentación pública del repo
│
├── .claude/
│   └── skills/                       ← 12 skills locales del proyecto
│       ├── emil-design-eng/          (UI craft + animaciones)
│       ├── playwright-cli/           (testing visual)
│       ├── threejs-fundamentals/     (3D bases)
│       ├── threejs-geometry/
│       ├── threejs-materials/
│       ├── threejs-lighting/
│       ├── threejs-textures/
│       ├── threejs-animation/
│       ├── threejs-loaders/
│       ├── threejs-shaders/
│       ├── threejs-postprocessing/
│       └── threejs-interaction/
│
├── .agents/                          ← carpeta del skill manager
│   └── skills/                       (archivos físicos)
│
├── src/
│   ├── sections/                     ← una carpeta por sección de la web
│   │   ├── Hero.jsx
│   │   ├── Philosophy.jsx
│   │   ├── SelectedWork/
│   │   ├── Process.jsx
│   │   ├── Services.jsx
│   │   ├── Signature.jsx
│   │   └── Contact.jsx
│   ├── three/                        ← componentes Three.js / R3F
│   ├── components/                   ← componentes reutilizables
│   ├── hooks/                        ← custom hooks
│   ├── styles/
│   │   └── globals.css               ← variables CSS de la paleta oficial
│   └── App.jsx
│
├── public/
│   └── fonts/                        ← fuentes Fontshare descargadas
│
├── package.json
├── vite.config.js
├── tailwind.config.js
└── (resto de configuración)

~/.claude/skills/
└── clickiclick-web-design/           ← skill global de identidad de marca
```

---

## Las 12 skills explicadas

### Skills siempre activas

**1. `clickiclick-web-design`** (global, en `~/.claude/skills/`)
- **Cuándo:** siempre que se trabaje en este proyecto
- **Para qué:** identidad de marca, paleta oficial, tipografía, narrativa, anti-patterns, definition of done
- **No se desactiva nunca** mientras se trabaja en CLICKICLICK

**2. `emil-design-eng`** (project, en `.claude/skills/`)
- **Cuándo:** durante todo el diseño y construcción UI
- **Para qué:** principios de craft — animaciones, easings, transitions, performance, polish
- **Filosofía:** "Taste is the differentiator. Unseen details compound."

### Skills condicionales — Three.js (10 skills)

Cargan automáticamente solo si la tarea las requiere. Lista por especialidad:

**3. `threejs-fundamentals`** — bases: scene, camera, renderer, Object3D, transforms
**4. `threejs-geometry`** — shapes, BufferGeometry, instancing
**5. `threejs-materials`** — PBR, ShaderMaterial, materiales custom
**6. `threejs-lighting`** — luces, sombras, environment maps, HDRi
**7. `threejs-textures`** — UV mapping, environment maps, render targets
**8. `threejs-animation`** — keyframe, skeletal, morph targets
**9. `threejs-loaders`** — cargar GLTF/GLB con Draco
**10. `threejs-shaders`** — GLSL, ShaderMaterial, custom effects (CRÍTICO para distorsiones tipo Royal Palace)
**11. `threejs-postprocessing`** — bloom, DOF, screen effects
**12. `threejs-interaction`** — raycasting, mouse, scroll-3D

### Skill semi-activa

**13. `playwright-cli`**
- **Cuándo:** SOLO cuando el usuario pide explícitamente "verifica la web", "screenshot", "testea esto"
- **Para qué:** Claude Code abre el navegador real, interactúa con la web, ve resultado en vivo, hace screenshots
- **Por qué semi-activa:** evita uso innecesario de tokens y mantiene control sobre qué se ejecuta

---

## Workflow oficial del proyecto

### Fase actual: PREPARACIÓN COMPLETA ✅
- ✅ Brief estratégico cerrado
- ✅ Sistema cromático definido (granate + teal + crema + oro mínimo + secretos)
- ✅ Sistema dual definido (marco vs proyectos)
- ✅ Manifiesto narrativo escrito (3 actos)
- ✅ 12 skills instaladas y auditadas
- ✅ Stack técnico locked
- ✅ Documentos maestros generados

### Fase siguiente: LOGO MANUSCRITO (Fase 2)
1. Diego prepara: papel blanco A4, rotulador negro fino, luz uniforme
2. Diego firma 10-15 veces "Diego Puelles" naturalmente
3. Diego también prueba "Diego" solo, "Puelles" solo, iniciales "DP"
4. Diego fotografía y envía
5. Claude genera 5-6 propuestas de logo-firma estilizadas
6. Diego elige dirección
7. Refinamiento → exportación SVG → integración en código

### Fases posteriores: CONSTRUCCIÓN POR SECCIONES

**Fase 3: Reset del código**
- Tirar el blob 3D actual y la composición cream/terracota previa
- Reescribir con la paleta nueva oficial
- Sistema tipográfico (PP Editorial New + Switzer + Gambarino italic)
- Variables CSS oficiales en `src/styles/globals.css`

**Fase 4: Hero (Acto I)**
- Tipografía masiva CLICKICLICK como protagonista
- Subtítulo italic "obras digitales firmadas a medida" en garnet
- Meta bar Barcelona · MMXXVI
- Decisión: ¿añadir 3D narrativo a las letras?

**Fase 5: Philosophy/Manifiesto (Acto I)**
- Prosa editorial 3-4 párrafos
- Aparición progresiva con stagger
- Marco general estricto

**Fase 6: Selected Work (Acto II)**
- Cada proyecto en su capsula con paleta propia
- Transiciones cromáticas conscientes entre proyectos
- Hover states, scroll-linked reveals

**Fase 7: Process (Acto III start)**
- 5 fases del proceso (estilo Neu Web Studio)
- Easter egg: aparición única del color `--moss`
- Posible exploding objects pattern

**Fase 8: Services & Pricing (Acto III)**
- Lista limpia con precios visibles
- Tipografía monoespaciada para precios
- Sin botones agresivos

**Fase 9: Signature (Acto III)**
- Firma manuscrita de Diego en `--gold-aged`
- Foto editorial de Diego (única aparición)
- Manifiesto personal corto

**Fase 10: Contact (Acto III)**
- Formulario + Calendly + WhatsApp
- Easter egg: aparición única del color `--lavender-dust` en un hover específico

**Fase 11: Footer**
- MMXXVI gold
- Localización
- Redes sociales (mínimas)

**Fase 12: Pulido global**
- Microanimaciones GSAP por toda la web
- Smooth scroll Lenis
- Page transitions
- Responsive completo
- Accesibilidad (prefers-reduced-motion, contrast)
- Lighthouse >90 en las 4 categorías
- Verificación con playwright-cli

---

## Plazos realistas

- **Fase 2 (logo):** 1-2 días
- **Fase 3 (reset):** 1 día
- **Fases 4-11 (secciones):** 8-12 días iterativos (1-2 días por sección)
- **Fase 12 (pulido):** 3-5 días

**Total estimado:** 3-4 semanas con pausas para respirar.

**Fecha objetivo lanzable:** 15 de Mayo 2026
**Fecha objetivo "showcase" perfecto:** 15 de Junio 2026

---

## Comandos de terminal frecuentes

```bash
# Arrancar dev server
npm run dev

# Build local para verificar antes de push
npm run build

# Deploy (auto via git push)
git add . && git commit -m "feat: descripción" && git push

# Verificar que las skills están bien
ls ~/CLICKICLICK/clickiclick-studio/.claude/skills/

# Arrancar Claude Code
claude

# Verificar último commit deployado en Vercel
vercel ls
```

---

## URLs importantes

- **Repo:** https://github.com/clickiclickweb-ui/clickiclick-studio
- **Live (current):** https://clickiclick-studio.vercel.app
- **Dominio futuro:** clickiclick.studio (a registrar)

---

## Reglas de oro

1. **Nunca empezar a codear sin haber leído los 3 documentos maestros** (BRIEF + INSPIRATIONS + SKILL)
2. **Cada decisión técnica debe servir al manifiesto narrativo** — si no sirve, no se hace
3. **Sustracción antes que adición** — si tienes duda de añadir algo, no lo añadas
4. **Test visual con playwright-cli SOLO cuando se pida** — no consume tokens innecesariamente
5. **Commits frecuentes con descripciones claras** — el historial es parte del proyecto
6. **Si Claude Code se desvía del brief, pararlo** — el brief manda

---

## Cuando algo va mal

**Si Claude Code propone algo que contradice el brief:**
- Pararlo, citar la sección del brief contradicha, pedir revisión

**Si una sección queda mal después de varios intentos:**
- Volver al BRIEF.md y revisar si la decisión inicial era correcta
- A veces el problema no es la ejecución sino la dirección

**Si pierdes la cabeza con tantos archivos:**
- Solo importan 3: BRIEF.md, INSPIRATIONS.md, este PROJECT_GUIDE.md
- El resto es ejecución

---

**Versión:** 1.0
**Fecha:** Abril 2026
**Autor:** Diego Puelles con Claude como sparring estratégico
