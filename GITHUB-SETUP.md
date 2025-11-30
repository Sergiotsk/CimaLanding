# 🚀 Guía para Subir CimaLanding a GitHub

Esta guía te ayudará a subir tu proyecto CimaLanding a GitHub de forma segura como repositorio público.

## ✅ Preparación Completada

Ya se han realizado los siguientes pasos de seguridad:

- ✅ `.gitignore` actualizado con reglas de seguridad completas
- ✅ `node_modules` eliminado del repositorio
- ✅ README actualizado con advertencias de seguridad
- ✅ Commit creado con los cambios de seguridad

## 📝 Pasos para Subir a GitHub

### 1. Crear el Repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** en la esquina superior derecha
3. Selecciona **"New repository"**
4. Configura el repositorio:
   - **Repository name**: `CimaLanding` (o el nombre que prefieras)
   - **Description**: "Landing page para Instituto CIMA - Inglés y Apoyo Escolar"
   - **Visibility**: Selecciona **Public** ✅
   - **NO** marques "Initialize this repository with a README" (ya tienes uno)
   - **NO** agregues .gitignore ni licencia (ya los tienes)
5. Haz clic en **"Create repository"**

### 2. Conectar tu Repositorio Local con GitHub

Después de crear el repositorio, GitHub te mostrará instrucciones. Usa estas:

```bash
# Agregar el repositorio remoto (reemplaza TU-USUARIO con tu nombre de usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/CimaLanding.git

# Verificar que se agregó correctamente
git remote -v
```

### 3. Subir tu Código a GitHub

```bash
# Subir la rama develop (o la rama que estés usando)
git push -u origin develop

# Si quieres subir también la rama main/master
git checkout main  # o master
git push -u origin main  # o master
```

### 4. Configurar la Rama Principal (Opcional)

Si quieres que `develop` sea tu rama principal en GitHub:

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, selecciona **Branches**
4. En "Default branch", cambia de `main` a `develop`
5. Confirma el cambio

## 🔒 Verificación de Seguridad

Después de subir, verifica que NO se hayan subido estos archivos:

- ❌ `node_modules/` (carpeta)
- ❌ `.env` (archivo)
- ❌ `.firebase/` (carpeta)
- ❌ Archivos de configuración de editores (`.vscode/`, `.idea/`)

Puedes verificar esto navegando en tu repositorio en GitHub.

## ⚠️ Archivos Públicos (Esto es Normal)

Los siguientes archivos SÍ estarán públicos y está bien:

- ✅ `.firebaserc` - Solo contiene el nombre del proyecto Firebase (público)
- ✅ `y/js/facebook-config.js` - El App ID de Facebook es público por diseño
- ✅ `firebase.json` - Configuración de hosting (no contiene secretos)

**Nota**: Estos archivos no contienen información sensible. El App ID de Facebook y el nombre del proyecto Firebase son públicos por diseño.

## 🔄 Comandos Útiles para el Futuro

### Subir Cambios Nuevos

```bash
# Ver el estado de tus archivos
git status

# Agregar archivos modificados
git add .

# Crear un commit
git commit -m "Descripción de tus cambios"

# Subir a GitHub
git push
```

### Clonar el Repositorio en Otra Computadora

```bash
# Clonar el repositorio
git clone https://github.com/TU-USUARIO/CimaLanding.git

# Entrar a la carpeta
cd CimaLanding

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📚 Recursos Adicionales

- [Documentación de Git](https://git-scm.com/doc)
- [Guías de GitHub](https://guides.github.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Facebook Developers](https://developers.facebook.com/)

## 🎯 Próximos Pasos Recomendados

1. **Agregar una Licencia**: Considera agregar un archivo `LICENSE` para especificar cómo otros pueden usar tu código
2. **GitHub Pages**: Si quieres hosting gratuito adicional, puedes configurar GitHub Pages
3. **Protección de Ramas**: Configura reglas de protección para tu rama principal
4. **GitHub Actions**: Automatiza el despliegue a Firebase con GitHub Actions

## 🆘 Solución de Problemas

### Error: "remote origin already exists"

```bash
# Eliminar el remoto existente
git remote remove origin

# Agregar el nuevo remoto
git remote add origin https://github.com/TU-USUARIO/CimaLanding.git
```

### Error: "failed to push some refs"

```bash
# Traer los cambios del remoto primero
git pull origin develop --rebase

# Luego subir tus cambios
git push origin develop
```

### Subí algo por error

```bash
# Si acabas de hacer el commit (antes de push)
git reset HEAD~1

# Si ya hiciste push, contacta a GitHub Support para eliminar información sensible
```

---

**¡Listo!** Tu proyecto CimaLanding está preparado para ser público en GitHub de forma segura. 🎉
