import { mockUsers, User } from './User';

export interface Board {
  slug: string;
  title: string;
  srcImg: string;
  team: User[];
  lists: BoardList[];
}

export interface BoardList {
  title: string;
  cards: CardBoard[];
}

export interface CardBoard {
  title: string;
  description: string;
}

export interface BoardItem {
  srcImg: string;
  name: string;
  slug: string;
}

export const mockBoards: BoardItem[] = [
  {
    srcImg: 'https://picsum.photos/400/250?random=1',
    name: 'Planificación de sprint',
    slug: 'planificacion-de-sprint',
  },
  {
    srcImg: 'https://picsum.photos/400/250?random=2',
    name: 'Marketing de contenidos',
    slug: 'marketing-de-contenidos',
  },
  {
    srcImg: 'https://picsum.photos/400/250?random=3',
    name: 'Diseño de UI/UX',
    slug: 'duseno-ui-ux',
  },
  {
    srcImg: 'https://picsum.photos/400/250?random=4',
    name: 'Seguimiento de candidatos',
    slug: 'seguimiento-de-candidatos',
  },
  {
    srcImg: 'https://picsum.photos/400/250?random=5',
    name: 'Gestión de proyectos',
    slug: 'gestion-de-proyectos',
  },
];

export const defaultBoards: Board[] = [
  {
    title: 'Planificación de sprint',
    slug: 'planificacion-de-sprint',
    srcImg: 'https://picsum.photos/400/250?random=1',
    team: [mockUsers[0], mockUsers[1]],
    lists: [
      {
        title: 'Por hacer',
        cards: [
          {
            title: 'Revisar historias de usuario',
            description:
              'Confirmar que todas las historias están completas y claras para el equipo.',
          },
          {
            title: 'Estimar tareas',
            description: 'Asignar puntos de historia o tiempo estimado a cada tarea del sprint.',
          },
        ],
      },
      {
        title: 'En progreso',
        cards: [
          {
            title: 'Desarrollar feature A',
            description: 'Implementar la funcionalidad principal del nuevo módulo de registro.',
          },
          {
            title: 'Resolver bug #42',
            description: 'Investigar y solucionar el error de la página de inicio de sesión.',
          },
        ],
      },
      {
        title: 'Hecho',
        cards: [
          {
            title: 'Configurar entorno de desarrollo',
            description:
              'Instalar todas las dependencias y herramientas necesarias para el equipo.',
          },
        ],
      },
    ],
  },
  {
    title: 'Marketing de contenidos',
    slug: 'marketing-de-contenidos',
    srcImg: 'https://picsum.photos/400/250?random=2',
    team: [mockUsers[2], mockUsers[3]],
    lists: [
      {
        title: 'Ideas',
        cards: [
          {
            title: 'Post de blog: "10 tips de SEO"',
            description:
              'Escribir un artículo sobre las mejores prácticas de optimización para motores de búsqueda.',
          },
          {
            title: 'Video tutorial de la app',
            description:
              'Crear un video corto que muestre cómo usar las funciones clave del producto.',
          },
        ],
      },
      {
        title: 'En redacción',
        cards: [
          {
            title: 'Artículo: "Cómo usar Trello para la productividad"',
            description: 'Desarrollar el borrador del blog post y empezar a recopilar imágenes.',
          },
        ],
      },
      {
        title: 'Publicado',
        cards: [
          {
            title: 'Infografía de redes sociales',
            description: 'Diseñar y publicar una infografía sobre estadísticas de marketing.',
          },
        ],
      },
    ],
  },
  {
    title: 'Diseño de UI/UX',
    slug: 'duseno-ui-ux',
    srcImg: 'https://picsum.photos/400/250?random=3',
    team: [mockUsers[4]],
    lists: [
      {
        title: 'Wireframing',
        cards: [
          {
            title: 'Crear wireframes para la nueva sección',
            description:
              'Diseñar la estructura y el flujo de la nueva página de perfil de usuario.',
          },
        ],
      },
      {
        title: 'Prototipos',
        cards: [
          {
            title: 'Prototipo interactivo de login',
            description:
              'Generar un prototipo de alta fidelidad para testear el flujo de inicio de sesión.',
          },
        ],
      },
    ],
  },
  {
    title: 'Seguimiento de candidatos',
    slug: 'seguimiento-de-candidatos',
    srcImg: 'https://picsum.photos/400/250?random=4',
    team: [mockUsers[0], mockUsers[4]],
    lists: [
      {
        title: 'Aplicaciones recibidas',
        cards: [
          {
            title: 'CV de Juan Pérez',
            description: 'Revisar la experiencia de Juan para el puesto de desarrollador frontend.',
          },
          {
            title: 'CV de María Rodríguez',
            description: 'Analizar el portafolio de María para la vacante de diseñadora UX.',
          },
        ],
      },
      {
        title: 'Entrevista 1ª ronda',
        cards: [
          {
            title: 'Llamada con Carlos García',
            description:
              'Programar una entrevista telefónica para evaluar sus habilidades blandas.',
          },
        ],
      },
      {
        title: 'Contratado',
        cards: [
          {
            title: 'Oferta a Sofía López',
            description: 'Preparar y enviar la oferta de trabajo formal.',
          },
        ],
      },
    ],
  },
  {
    title: 'Gestión de proyectos',
    slug: 'gestion-de-proyectos',
    srcImg: 'https://picsum.photos/400/250?random=5',
    team: [mockUsers[1], mockUsers[3], mockUsers[4]],
    lists: [
      {
        title: 'Pendiente',
        cards: [
          {
            title: 'Definir el alcance del proyecto Y',
            description: 'Reunirse con los stakeholders para finalizar los requisitos.',
          },
        ],
      },
      {
        title: 'Activo',
        cards: [
          {
            title: 'Monitorear presupuesto',
            description:
              'Revisar los gastos semanales y asegurarse de que el proyecto se mantenga dentro del presupuesto.',
          },
        ],
      },
      {
        title: 'Archivado',
        cards: [
          {
            title: 'Proyecto X completado',
            description:
              'Realizar una retrospectiva y archivar todos los documentos del proyecto finalizado.',
          },
        ],
      },
    ],
  },
];
