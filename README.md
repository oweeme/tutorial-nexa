# tutorial-nexa

El sitio de presentación y tutorial de [Nexa](https://github.com/oweeme/oweenexa) — construido con el propio framework Nexa, bilingüe (es/en), desde cero hasta producción.

**En vivo:** https://nexa.oweeme.com

## Qué es esto

- `/` — selector de idioma.
- `/es`, `/en` — presentación del framework: qué es, ventajas, un ejemplo real de código.
- `/es/compatibility`, `/en/compatibility` — con qué backends, navegadores, plataformas y hosting funciona hoy.
- `/es/tutorial`, `/en/tutorial` — tutorial completo de 16 pasos, de la instalación al deploy en producción.

## Desarrollo local

Necesitás el binario `nexa` compilado desde [oweeme/oweenexa](https://github.com/oweeme/oweenexa) (ver el tutorial de instalación, paso 1).

Como este sitio no tiene datos dinámicos reales, `/es` y `/en` se pre-renderizan vía `paths` contra un `NEXA_API_URL` que solo sirve `.build-api/locales.json` — cualquier servidor HTTP estático sirve:

```bash
python3 -m http.server 5701 --directory .build-api &
NEXA_API_URL=http://127.0.0.1:5701 nexa build
nexa preview
```

## Licencia

MIT.
