# Babá Fun Fun · Portal de Sanación Multidimensional

Sitio web estático de Claudio Fabián Martínez (Babá Fun Fun) — terapeuta cuántico
multidimensional. Páginas: inicio, método (Códigos de Luz, ThetaHealing®, Terapia
Cuántica Atlante), mi sendero, tarifas y formulario de registro/agendamiento.

Hecho con **HTML + CSS + JavaScript puro** (sin framework ni build). Bilingüe ES/PT.

## Estructura

```
.
├── index.html                              Inicio
├── mi-sendero.html                         Historia / biografía
├── agendar.html                            Formulario de registro
├── metodo-codigos-de-luz.html              Pilar I
├── metodo-thetahealing.html                Pilar II
├── metodo-terapia-cuantica-atlante.html    Pilar III
├── assets/
│   ├── styles.css                          Estilos globales
│   ├── site.js                             Header, footer, nav, panel de color
│   └── i18n.js                             Motor de traducción ES / PT
├── images/                                 Fotos e imágenes (.webp)
├── image-slot.js                           Componente de imagen editable
├── vercel.json                             Cabeceras de caché y seguridad
└── .gitignore
```

## Desarrollo local

No necesita build. Levanta cualquier servidor estático en esta carpeta:

```bash
python3 -m http.server 8000
# o
npx serve
```

Luego abre http://localhost:8000

> Ábrelo con un servidor, no con `file://` — el formulario y el motor de idiomas
> cargan scripts por ruta relativa.

## Despliegue en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. En vercel.com → **Add New → Project** → importa el repositorio.
3. Framework Preset: **Other** · Build Command: *(vacío)* · Output Directory: *(vacío)*.
4. Deploy. Vercel sirve el sitio estático tal cual.

Si subiste el repo con esta carpeta dentro de un subdirectorio, ajusta
**Root Directory** a esa subcarpeta en la configuración del proyecto en Vercel.

## Formulario de registro

`agendar.html` funciona sin backend: abre el correo del facilitador o envía por
WhatsApp. Para guardar los registros en una base de datos, edita la sección de
configuración al inicio del `<script>` en `agendar.html` y completa **una** opción:

- **Supabase** (`SUPABASE_URL`, `SUPABASE_KEY`, `SUPABASE_TABLE`)
- **Webhook** (`WEBHOOK_URL` — Make.com, Google Apps Script, Zapier)
- **Formspree** (`FORM_ENDPOINT`)

Si ninguna está configurada, usa el correo (`mailto:`) como respaldo.

## Contacto / enlaces

- Correo: esenios2022@gmail.com
- WhatsApp: +598 93 422 022
- Instagram: @tribuarcoiris2022
