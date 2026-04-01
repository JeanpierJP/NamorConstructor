# constructor.tecnovedadesweb.site

Sitio web (carpeta `public_html`) para despliegue en hosting tipo cPanel/Apache.

## Estructura

- `public_html/`: raíz pública del sitio (HTML/CSS/JS/imagenes).

## Tecnologías

- HTML5
- CSS3
- JavaScript (Vanilla)
- PHP (opcional, si el hosting lo requiere o el proyecto lo usa)

## Desarrollo local (opciones)

Si es un sitio estático:

- Abrir `index.html` en el navegador, o
- Servir con un servidor estático (ejemplo con Python):
  - `python -m http.server 8000`
  - Luego abrir `http://localhost:8000`

Si usas PHP en el hosting:

- `php -S localhost:8000 -t .`
- Luego abrir `http://localhost:8000`

## Despliegue

- Subir el contenido de `public_html/` al directorio público del hosting (`public_html`).
- Verificar permisos/paths de assets y enlaces.
