# Plugin de Facebook para Comentarios - CIMA Landing

## 📋 Descripción

Este plugin permite integrar comentarios de Facebook en la sección de testimonios del sitio web de CIMA. Incluye un sistema de respaldo que funciona tanto en desarrollo local como en producción.

## 🚀 Características

- ✅ Plugin oficial de comentarios de Facebook
- ✅ Sistema de respaldo para desarrollo local
- ✅ Formulario de comentarios alternativo
- ✅ Sistema de calificación con estrellas
- ✅ Manejo automático de errores
- ✅ Reintentos automáticos de carga
- ✅ Diseño responsive y moderno
- ✅ Indicador de modo desarrollo

## ⚙️ Configuración Requerida

### 1. Crear Aplicación en Facebook Developers

1. Ve a [Facebook Developers](https://developers.facebook.com/)
2. Inicia sesión con tu cuenta de Facebook
3. Haz clic en "Crear App"
4. Selecciona "Consumer" como tipo de aplicación
5. Completa la información básica de la aplicación

### 2. Obtener App ID

1. En el dashboard de tu aplicación, copia el "App ID"
2. Abre el archivo `js/facebook-config.js`
3. Reemplaza `'1234567890123456'` con tu App ID real

```javascript
const FacebookConfig = {
    appId: 'TU_APP_ID_REAL_AQUI',
    // ... resto de la configuración
};
```

### 3. Configurar Dominio

1. En el dashboard de Facebook Developers, ve a "Configuración" > "Básica"
2. En "Dominios de la aplicación", agrega tu dominio (ej: `institutocima.com`)
3. En "Dominios de la aplicación", agrega también `localhost` para desarrollo

### 4. Habilitar Plugin de Comentarios

1. En el dashboard, ve a "Productos" > "Comentarios sociales"
2. Haz clic en "Configurar"
3. Asegúrate de que esté habilitado

## 🔧 Archivos del Plugin

### Archivos Principales

- `index.html` - Integración del plugin en la página
- `js/facebook-config.js` - Configuración centralizada
- `js/main.js` - Funcionalidad del plugin
- `css/styles.css` - Estilos del plugin

### Estructura de Archivos

```
y/
├── index.html                 # Página principal con plugin
├── js/
│   ├── facebook-config.js    # Configuración de Facebook
│   └── main.js              # Funcionalidad del plugin
├── css/
│   └── styles.css           # Estilos del plugin
└── README-FACEBOOK-PLUGIN.md # Este archivo
```

## 📱 Funcionamiento

### En Producción

1. El plugin de Facebook se carga automáticamente
2. Los usuarios pueden comentar usando sus cuentas de Facebook
3. Los comentarios se sincronizan con Facebook
4. Sistema de moderación integrado de Facebook

### En Desarrollo Local

1. Se detecta automáticamente el entorno de desarrollo
2. Se muestra un formulario de comentarios alternativo
3. Los comentarios se almacenan localmente
4. Indicador visual de modo desarrollo

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --primary-color: #007bff;      /* Color principal */
    --secondary-color: #6c757d;    /* Color secundario */
    --success-color: #28a745;      /* Color de éxito */
    --warning-color: #ffc107;      /* Color de advertencia */
    --danger-color: #dc3545;       /* Color de error */
}
```

### Cambiar Configuración

Edita `js/facebook-config.js`:

```javascript
const FacebookConfig = {
    appId: 'TU_APP_ID',
    comments: {
        numPosts: 10,           // Más comentarios
        colorScheme: 'dark',     // Tema oscuro
        orderBy: 'time'          // Ordenar por tiempo
    }
};
```

## 🐛 Solución de Problemas

### El Plugin No Se Carga

1. Verifica que tu App ID sea correcto
2. Asegúrate de que el dominio esté configurado en Facebook
3. Revisa la consola del navegador para errores
4. Verifica que no haya bloqueadores de anuncios activos

### Errores de CORS

1. Asegúrate de que estés usando HTTPS en producción
2. Verifica que el dominio esté en la lista blanca de Facebook
3. Revisa la configuración de cookies

### Comentarios No Aparecen

1. Verifica que el plugin de comentarios esté habilitado
2. Asegúrate de que la URL en `data-href` sea correcta
3. Revisa los logs de Facebook Developers

## 📊 Monitoreo

### Logs de Consola

El plugin genera logs detallados en la consola del navegador:

- ✅ `Plugin de Facebook cargado correctamente`
- ❌ `Error al cargar el plugin de Facebook`
- 🔄 `Reintentando carga de Facebook Comments`

### Métricas de Facebook

En Facebook Developers puedes ver:
- Número de comentarios
- Usuarios activos
- Tiempo de respuesta
- Errores del plugin

## 🔒 Seguridad

### Consideraciones

- El plugin respeta la configuración de privacidad de Facebook
- Los usuarios deben iniciar sesión en Facebook para comentar
- Facebook maneja la moderación de contenido
- No se almacenan datos sensibles localmente

### Configuración de Privacidad

1. En Facebook Developers, configura las políticas de privacidad
2. Asegúrate de cumplir con GDPR si aplica
3. Configura la moderación de comentarios

## 🚀 Despliegue

### Pasos para Producción

1. Reemplaza el App ID en `facebook-config.js`
2. Verifica que el dominio esté configurado en Facebook
3. Prueba el plugin en un entorno de staging
4. Despliega a producción
5. Verifica que los comentarios funcionen

### Verificación Post-Despliegue

1. Comenta en la página usando Facebook
2. Verifica que el comentario aparezca
3. Revisa los logs de Facebook Developers
4. Prueba en diferentes dispositivos

## 📞 Soporte

### Recursos Útiles

- [Documentación de Facebook Comments](https://developers.facebook.com/docs/plugins/comments/)
- [Facebook Developers Support](https://developers.facebook.com/support/)
- [Troubleshooting Guide](https://developers.facebook.com/docs/plugins/comments/#troubleshooting)

### Contacto

Para soporte técnico específico del plugin:
- Revisa este README
- Consulta la documentación de Facebook
- Revisa los logs de la consola del navegador

## 📝 Changelog

### Versión 1.0.0
- ✅ Plugin de comentarios de Facebook
- ✅ Sistema de respaldo para desarrollo
- ✅ Formulario de comentarios alternativo
- ✅ Sistema de calificación con estrellas
- ✅ Manejo de errores y reintentos
- ✅ Diseño responsive y moderno

---

**Nota**: Este plugin está optimizado para funcionar tanto en desarrollo local como en producción. En desarrollo, se muestra un sistema alternativo, mientras que en producción se carga el plugin oficial de Facebook.
