# Costa de Andalucía Proyectos

Web de Costa de Andalucía Proyectos S.L., empresa de reformas, pladur y pintura
para proyectos residenciales y comerciales en Andalucía.

## Desarrollo

Requiere Node.js y npm.

```bash
npm install
npm start
```

La web estará disponible en `http://localhost:4200/`.

## Producción

```bash
npm run build
```

Angular genera la web estática en `dist/pintura-landing/browser`, lista para
publicar en un servicio de hosting estático como Cloudflare Pages.

## Formulario de contacto

El formulario está maquetado y validado en el navegador, pero aún no envía
mensajes. Para recibir solicitudes hay que conectarlo a un correo o servicio de
formularios.
