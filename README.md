# CimaOnline

Landing page moderna y responsive para Instituto CIMA - Inglés y Apoyo Escolar.

## 🚀 Características

- **Diseño Responsive**: Compatible con todos los dispositivos (móvil, tablet, desktop)
- **Bootstrap 5**: Framework CSS moderno para diseño profesional
- **Animaciones Suaves**: Efectos visuales profesionales con CSS y JavaScript
- **Formulario de Contacto**: Validación en tiempo real con feedback visual
- **Carousels Interactivos**: Testimonios con soporte touch/swipe para móviles
- **Facebook Comments**: Integración con comentarios de Facebook (con sistema fallback local)
- **Blog de Artículos**: Sección de blog con artículos educativos
- **Firebase Hosting**: Desplegado en Firebase para hosting rápido y confiable

## 🔒 Seguridad y Configuración

### ⚠️ IMPORTANTE: Antes de Desplegar a Producción

Este repositorio es público. **NO incluyas credenciales sensibles** en el código. Antes de usar en producción:

1. **Facebook App ID** (`y/js/facebook-config.js`):
   - El App ID actual es público y solo debe usarse para desarrollo
   - Crea tu propia aplicación en [Facebook Developers](https://developers.facebook.com/)
   - Reemplaza el `appId` en `facebook-config.js` con tu propio App ID
   - Configura los dominios permitidos en tu app de Facebook

2. **Firebase** (`.firebaserc`):
   - El proyecto Firebase está configurado para `cimaonline-4f144`
   - Si clonas este proyecto, crea tu propio proyecto Firebase
   - Ejecuta `firebase init` para configurar tu proyecto
   - Las reglas de seguridad de Firebase deben configurarse apropiadamente

3. **Variables de Entorno**:
   - Nunca subas archivos `.env` al repositorio
   - Usa variables de entorno para información sensible
   - El `.gitignore` ya está configurado para proteger estos archivos

## 📋 Requisitos

- Node.js (versión 14 o superior)
- npm o yarn
- Firebase CLI (opcional, para despliegue)

## 🛠️ Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Sergiotsk/CimaOnline.git
   cd CimaOnline
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   ```
   http://localhost:5500
   ```

## 📁 Estructura del Proyecto

```
CimaOnline/
├── y/                          # Directorio público (hosting)
│   ├── index.html             # Página principal
│   ├── blog.html              # Página del blog
│   ├── cursos.html            # Página de cursos
│   ├── privacy-policy.html    # Política de privacidad
│   ├── test.html              # Página de pruebas
│   │
│   ├── css/
│   │   └── styles.css         # Estilos personalizados
│   │
│   ├── js/
│   │   ├── main.js            # JavaScript principal
│   │   └── facebook-config.js # Configuración de Facebook
│   │
│   ├── imgs/                  # Imágenes del sitio
│   │   ├── LOGO_20_05_2025-RB.png
│   │   └── pexels-karolina-grabowska-7692564.jpg
│   │
│   ├── articulos/             # Artículos del blog
│   │   ├── beneficios-bilinguismo.html
│   │   ├── equilibrio-pantallas.html
│   │   └── seguridad-internet.html
│   │
│   ├── src/                   # Archivos fuente adicionales
│   │   └── types.ts           # Definiciones de tipos (legacy)
│   │
│   └── *.md                   # Documentación de Facebook plugin
│
├── .firebaserc                # Configuración de Firebase
├── firebase.json              # Configuración de hosting
├── package.json               # Dependencias y scripts
├── .gitignore                 # Archivos ignorados por Git
├── README.md                  # Este archivo

```

## 🔧 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo local
npm run dev

# El servidor se ejecuta en http://localhost:5500
```

## 💻 Desarrollo Local

### Servidor de Desarrollo

El proyecto usa `http-server` para desarrollo local:

```bash
npm run dev
```

Esto iniciará un servidor en `http://localhost:5500` con:
- CORS habilitado
- Sin caché (`-c-1`)
- Recarga automática al guardar cambios

### Modo Desarrollo vs Producción

El sistema detecta automáticamente el entorno:

- **Localhost**: Muestra comentarios locales simulados
- **Producción**: Carga el plugin de Facebook Comments

## 🌐 Funcionalidades Principales

### 1. Navegación Inteligente
- Scroll suave entre secciones
- Navbar con efecto al hacer scroll
- Resaltado automático de sección activa
- Menú responsive para móviles

### 2. Formulario de Contacto
- Validación en tiempo real
- Mensajes de error personalizados
- Animaciones de feedback (shake, fade)
- Estados de carga durante envío
- Mensajes de éxito/error animados

**Campos validados:**
- Nombre (2-50 caracteres)
- Email (formato válido)
- Teléfono (8-20 caracteres, opcional)
- Asunto (5-100 caracteres)
- Mensaje (10-1000 caracteres)

### 3. Carousels de Testimonios
- **Carousel Principal**: Testimonios destacados
- **Carousel Adicional**: Comentarios estilo Facebook
- Soporte touch/swipe para móviles
- Navegación por teclado (flechas)
- Pausa automática al hover
- Animaciones de estrellas y contenido

### 4. Sistema de Comentarios
- Integración con Facebook Comments Plugin
- Sistema fallback local para desarrollo
- Calificación con estrellas (1-5)
- Formulario de comentarios alternativo
- Detección automática de entorno

### 5. Animaciones
- Fade-in al hacer scroll
- Slide-in (izquierda/derecha)
- Contadores animados
- Efectos de hover en tarjetas
- Transiciones suaves

## 🎨 Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS
- **JavaScript (ES6+)**: Funcionalidad interactiva
- **Bootstrap 5.3**: Framework CSS responsive

### Librerías y Plugins
- **Font Awesome 6**: Iconos vectoriales
- **Google Fonts**: Tipografía (Poppins, Roboto)
- **Facebook SDK**: Plugin de comentarios
- **Bootstrap Carousel**: Carousels interactivos

### Herramientas de Desarrollo
- **http-server**: Servidor de desarrollo local
- **Firebase Hosting**: Hosting en producción
- **Git**: Control de versiones

## 🚀 Despliegue

### Firebase Hosting

1. **Instalar Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login en Firebase:**
   ```bash
   firebase login
   ```

3. **Desplegar:**
   ```bash
   firebase deploy
   ```

### Configuración de Firebase

El archivo `firebase.json` está configurado para:
- Directorio público: `y/`
- Ignorar: `firebase.json`, archivos ocultos, `node_modules`

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 **Móviles**: 320px - 767px
- 📱 **Tablets**: 768px - 1023px
- 💻 **Desktop**: 1024px+

### Breakpoints Principales
```css
/* Móvil pequeño */
@media (max-width: 575.98px) { }

/* Móvil grande */
@media (min-width: 576px) and (max-width: 767.98px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 991.98px) { }

/* Desktop */
@media (min-width: 992px) { }
```

## 🐛 Desarrollo y Debugging

### Modo Desarrollo

En localhost, el sistema muestra:
- Indicador de "Modo Desarrollo"
- Comentarios locales simulados
- Logs en consola para debugging

### Características de Debug
```javascript
// Detectar entorno
const isLocalhost = window.location.hostname === 'localhost';

// Logs condicionales
if (isLocalhost) {
    console.log('🚀 Modo desarrollo activo');
}
```

## 📝 Personalización

### Colores del Sitio

Edita las variables CSS en `y/css/styles.css`:

```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --accent-color: #ffc107;
    /* ... más colores */
}
```

### Configuración de Facebook

Edita `y/js/facebook-config.js`:

```javascript
const FacebookConfig = {
    appId: 'TU_APP_ID',
    comments: {
        numPosts: 8,
        colorScheme: 'light',
        orderBy: 'social'
    }
};
```

## 🔄 Flujo de Trabajo Recomendado

1. **Desarrollo Local**: Trabaja en `localhost:5500`
2. **Pruebas**: Verifica en diferentes dispositivos
3. **Commit**: Guarda cambios en Git
4. **Deploy**: Sube a Firebase Hosting

```bash
# Desarrollo
npm run dev

# Commit
git add .
git commit -m "Descripción de cambios"
git push

# Deploy
firebase deploy
```

## 🆘 Solución de Problemas

### El servidor no inicia
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Facebook Comments no cargan
- Verifica que el dominio esté configurado en Facebook Developers
- Revisa el App ID en `facebook-config.js`
- Comprueba la consola del navegador para errores

### Estilos no se aplican
- Limpia la caché del navegador (Ctrl + Shift + R)
- Verifica la ruta del archivo CSS en el HTML
- Revisa la consola para errores 404

## 📚 Recursos Adicionales

- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Facebook Developers](https://developers.facebook.com/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📄 Licencia

Este proyecto es de código abierto. Puedes usarlo y modificarlo según tus necesidades.

## 👥 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

Para más información sobre el Instituto CIMA, visita nuestra página o contáctanos a través del formulario.

---

**Desarrollado con ❤️ para Instituto CIMA**
