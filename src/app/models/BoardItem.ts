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
