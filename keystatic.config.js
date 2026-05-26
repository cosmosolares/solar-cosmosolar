import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },

  collections: {
    articulos: collection({
      label: 'Artículos',
      slugField: 'title',
      path: 'content/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: 'Título' },
        }),
        description: fields.text({
          label: 'Descripción',
          multiline: true,
        }),
        category: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Organismo', value: 'Organismo' },
            { label: 'Entorno', value: 'Entorno' },
            { label: 'Comunidad', value: 'Comunidad' },
            { label: 'Acerca', value: 'Acerca' },
          ],
          defaultValue: 'Organismo',
        }),
        date: fields.date({
          label: 'Fecha',
        }),
        readingTime: fields.text({
          label: 'Tiempo de lectura',
          description: 'Ej: 6 min',
        }),
        image: fields.text({
          label: 'Imagen (ruta)',
          description: 'Ej: /images/ciencia/amanecer.svg',
        }),
        content: fields.markdoc({
          label: 'Contenido',
          extension: 'md',
        }),
      },
    }),
  },
});
