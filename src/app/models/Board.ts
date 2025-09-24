import { Comment } from './Comment';
import { mockUsers, User } from './User';

export interface Board {
  slug: string;
  title: string;
  srcImg: string;
  team: User[];
  lists: BoardList[];
}

export interface CreateBoardDTO extends Omit<Board, 'slug' | 'team' | 'lists'> {}

export interface BoardList {
  id: string;
  title: string;
  cards: CardBoard[];
}

export const DefaultBoardList: BoardList = {
  id: '',
  title: '',
  cards: [],
};

export interface CardBoard {
  id: string;
  title: string;
  description: string;
  comments?: Comment[];
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
        id: 'list-1',
        title: 'Por hacer',
        cards: [
          {
            id: 'card-1',
            title: 'Revisar historias de usuario',
            description:
              'Confirmar que todas las historias están completas y claras para el equipo.',
          },
          {
            id: 'card-2',
            title: 'Estimar tareas',
            description: 'Asignar puntos de historia o tiempo estimado a cada tarea del sprint.',
            comments: [
              {
                user: mockUsers[0],
                message: 'Sugiero que usemos T-shirt sizing para estimar.',
                timestamp: '2025-09-22T09:30:00.000Z',
              },
            ],
          },
        ],
      },
      {
        id: 'list-2',
        title: 'En progreso',
        cards: [
          {
            id: 'card-3',
            title: 'Desarrollar feature A',
            description: 'Implementar la funcionalidad principal del nuevo módulo de registro.',
          },
          {
            id: 'card-4',
            title: 'Resolver bug #42',
            description: 'Investigar y solucionar el error de la página de inicio de sesión.',
            comments: [
              {
                user: mockUsers[1],
                message: 'Revisé los logs, parece ser un problema con la autenticación.',
                timestamp: '2025-09-22T14:15:00.000Z',
              },
            ],
          },
        ],
      },
      {
        id: 'list-3',
        title: 'Hecho',
        cards: [
          {
            id: 'card-5',
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
    team: [mockUsers[2], mockUsers[3], mockUsers[0]],
    lists: [
      {
        id: 'list-4',
        title: 'Ideas',
        cards: [
          {
            id: 'card-6',
            title: 'Post de blog: "10 tips de SEO"',
            description:
              'Escribir un artículo sobre las mejores prácticas de optimización para motores de búsqueda.',
          },
          {
            id: 'card-7',
            title: 'Video tutorial de la app',
            description:
              'Crear un video corto que muestre cómo usar las funciones clave del producto.',
          },
        ],
      },
      {
        id: 'list-5',
        title: 'En redacción',
        cards: [
          {
            id: 'card-8',
            title: 'Artículo: "Cómo usar Trello para la productividad"',
            description: 'Desarrollar el borrador del blog post y empezar a recopilar imágenes.',
            comments: [
              {
                user: mockUsers[2],
                message: '¿Podríamos añadir un enlace a nuestra app en la conclusión?',
                timestamp: '2025-09-22T10:00:00.000Z',
              },
              {
                user: mockUsers[3],
                message: 'Buena idea, lo agregaré a los puntos del borrador.',
                timestamp: '2025-09-22T10:15:00.000Z',
              },
            ],
          },
        ],
      },
      {
        id: 'list-6',
        title: 'Publicado',
        cards: [
          {
            id: 'card-9',
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
    team: [mockUsers[4], mockUsers[0]],
    lists: [
      {
        id: 'list-7',
        title: 'Wireframing',
        cards: [
          {
            id: 'card-10',
            title: 'Crear wireframes para la nueva sección',
            description:
              'Diseñar la estructura y el flujo de la nueva página de perfil de usuario.',
          },
        ],
      },
      {
        id: 'list-8',
        title: 'Prototipos',
        cards: [
          {
            id: 'card-11',
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
        id: 'list-9',
        title: 'Aplicaciones recibidas',
        cards: [
          {
            id: 'card-12',
            title: 'CV de Juan Pérez',
            description: 'Revisar la experiencia de Juan para el puesto de desarrollador frontend.',
          },
          {
            id: 'card-13',
            title: 'CV de María Rodríguez',
            description: 'Analizar el portafolio de María para la vacante de diseñadora UX.',
          },
        ],
      },
      {
        id: 'list-10',
        title: 'Entrevista 1ª ronda',
        cards: [
          {
            id: 'card-14',
            title: 'Llamada con Carlos García',
            description:
              'Programar una entrevista telefónica para evaluar sus habilidades blandas.',
          },
        ],
      },
      {
        id: 'list-11',
        title: 'Contratado',
        cards: [
          {
            id: 'card-15',
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
    team: [mockUsers[1], mockUsers[3], mockUsers[4], mockUsers[0]],
    lists: [
      {
        id: 'list-12',
        title: 'Pendiente',
        cards: [
          {
            id: 'card-16',
            title: 'Definir el alcance del proyecto Y',
            description: 'Reunirse con los stakeholders para finalizar los requisitos.',
            comments: [
              {
                user: mockUsers[1],
                message: '¿Quién lidera la reunión de stakeholders?',
                timestamp: '2025-09-22T16:45:00.000Z',
              },
            ],
          },
        ],
      },
      {
        id: 'list-13',
        title: 'Activo',
        cards: [
          {
            id: 'card-17',
            title: 'Monitorear presupuesto',
            description:
              'Revisar los gastos semanales y asegurarse de que el proyecto se mantenga dentro del presupuesto.',
          },
        ],
      },
      {
        id: 'list-14',
        title: 'Archivado',
        cards: [
          {
            id: 'card-18',
            title: 'Proyecto X completado',
            description:
              'Realizar una retrospectiva y archivar todos los documentos del proyecto finalizado.',
          },
        ],
      },
    ],
  },
];
