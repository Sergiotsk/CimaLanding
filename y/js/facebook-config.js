/**
 * Configuración del Plugin de Facebook para CIMA Landing
 * 
 * IMPORTANTE: Antes de usar en producción, debes:
 * 1. Crear una aplicación en Facebook Developers
 * 2. Obtener tu App ID
 * 3. Configurar el dominio de tu sitio
 * 4. Habilitar el plugin de comentarios
 */

const FacebookConfig = {
    // ⚠️ REEMPLAZA CON TU APP ID REAL DE FACEBOOK
    appId: '1446295133243173',
    
    // Configuración del plugin de comentarios
    comments: {
        // URL de la página donde aparecerán los comentarios
        // ⚠️ CAMBIA ESTA URL POR LA DE TU SITIO REAL
        href: window.location.href || 'https://cimaonline-4f144.web.app/',
        
        // Número de comentarios a mostrar
        numPosts: 8,
        
        // Esquema de colores (light o dark)
        colorScheme: 'light',
        
        // Orden de los comentarios (social, reverse_time, time)
        orderBy: 'social',
        
        // Cargar comentarios de forma lazy
        lazy: true,
        
        // Adaptar al ancho del contenedor
        adaptContainerWidth: true,
        
        // Configuración móvil
        mobile: 'auto'
    },
    
    // Configuración del SDK
    sdk: {
        // Versión de la API de Facebook
        version: 'v18.0',
        
        // Habilitar cookies
        cookie: true,
        
        // Habilitar XFBML
        xfbml: true,
        
        // Idioma del SDK
        locale: 'es_LA'
    },
    
    // Configuración de desarrollo
    development: {
        // Mostrar logs en consola
        debug: true,
        
        // Tiempo de espera para detectar modo desarrollo (ms)
        devDetectionDelay: 2000,
        
        // Máximo número de reintentos
        maxRetries: 3
    },
    
    // URLs de Facebook
    urls: {
        // SDK de Facebook
        sdk: 'https://connect.facebook.net/es_LA/sdk.js',
        
        // Página de Facebook del instituto
        page: 'https://www.facebook.com/profile.php?id=100063805800155&sk=about'
    }
};

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FacebookConfig;
} else {
    window.FacebookConfig = FacebookConfig;
}
