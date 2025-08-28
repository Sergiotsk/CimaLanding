# CimaLanding - TypeScript Version

Landing page para Instituto CIMA - Inglés y Apoyo Escolar, ahora con TypeScript para mejor desarrollo y mantenimiento del código.

## 🚀 Características

- **TypeScript**: Código tipado para mejor desarrollo y detección de errores
- **Responsive Design**: Compatible con todos los dispositivos
- **Bootstrap 5**: Framework CSS moderno
- **Animaciones**: Efectos suaves y profesionales
- **Formulario de contacto**: Con validación en tiempo real
- **Testimonios**: Carousels interactivos con comentarios
- **Facebook Comments**: Integración con comentarios de Facebook (con fallback local)

## 📋 Requisitos

- Node.js (versión 14 o superior)
- npm o yarn

## 🛠️ Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Compilar TypeScript:**
   ```bash
   npm run build
   ```

3. **Desarrollo con watch mode:**
   ```bash
   npm run dev
   ```

4. **Servir la aplicación localmente:**
   ```bash
   npm run serve
   ```

## 📁 Estructura del Proyecto

```
CimaLanding/
├── src/                    # Código fuente TypeScript
│   ├── types.ts           # Definiciones de tipos
│   ├── main.ts            # Funcionalidad principal
│   └── testimonials.ts    # Manejo de testimonios y comentarios
├── js/
│   └── dist/              # JavaScript compilado (generado automáticamente)
├── css/
│   └── styles.css         # Estilos CSS
├── imgs/                  # Imágenes
├── articulos/             # Artículos del blog
├── index.html             # Página principal
├── blog.html              # Página del blog
├── tsconfig.json          # Configuración de TypeScript
├── package.json           # Dependencias y scripts
└── README.md              # Este archivo
```

## 🔧 Scripts Disponibles

- `npm run build`: Compila TypeScript a JavaScript
- `npm run watch`: Compila en modo watch (recompila automáticamente)
- `npm run dev`: Alias para watch mode
- `npm run serve`: Inicia servidor local en puerto 3000

## 💻 Desarrollo

### Compilación Automática

Para desarrollo activo, usa el modo watch:

```bash
npm run dev
```

Esto recompilará automáticamente los archivos TypeScript cada vez que hagas cambios.

### Servidor Local

Para probar la aplicación localmente:

```bash
npm run serve
```

La aplicación estará disponible en `http://localhost:3000`

## 🎯 Características TypeScript

### Tipos Definidos

El proyecto incluye tipos TypeScript para:
- Elementos del formulario de contacto
- Reglas de validación
- Configuración de carousels
- Eventos de touch
- Comentarios locales
- Bootstrap components

### Clases Organizadas

- `ContactFormHandler`: Manejo completo del formulario de contacto
- `TestimonialsManager`: Gestión de carousels de testimonios
- `FacebookCommentsManager`: Integración con comentarios de Facebook

### Validación en Tiempo de Compilación

TypeScript detecta errores antes de la ejecución, mejorando la calidad del código.

## 🌐 Funcionalidades

### Formulario de Contacto
- Validación en tiempo real
- Mensajes de error personalizados
- Animaciones de feedback
- Simulación de envío

### Testimonios
- Carousels interactivos
- Soporte para touch/swipe en móviles
- Navegación por teclado
- Animaciones suaves

### Comentarios de Facebook
- Detección automática de entorno (localhost vs producción)
- Sistema de fallback local para desarrollo
- Calificación con estrellas
- Comentarios locales simulados

## 🔄 Migración desde JavaScript

Si vienes del proyecto JavaScript original:

1. Los archivos TypeScript están en `src/`
2. Los archivos compilados van a `js/dist/`
3. El HTML ya está actualizado para usar los módulos compilados
4. Toda la funcionalidad se mantiene igual

## 🐛 Desarrollo Local

En localhost, el sistema automáticamente:
- Muestra comentarios locales en lugar de Facebook
- Indica modo desarrollo
- Permite testing sin configuración de Facebook

## 📝 Notas

- Los archivos en `js/dist/` son generados automáticamente, no los edites manualmente
- Siempre edita los archivos `.ts` en la carpeta `src/`
- El proyecto mantiene compatibilidad total con la versión JavaScript original
- Para producción, asegúrate de compilar antes de subir: `npm run build`

## 🚀 Próximos Pasos

1. Personaliza los tipos en `src/types.ts` según tus necesidades
2. Agrega nuevas funcionalidades en archivos TypeScript separados
3. Considera agregar tests unitarios
4. Implementa integración real con APIs de backend

¡Disfruta desarrollando con TypeScript! 🎉
