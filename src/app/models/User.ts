export interface User {
  name: string;
  avatar?: string;
}

export const mockUsers: User[] = [
  { name: 'Ana', avatar: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Luis', avatar: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Carlos', avatar: 'https://i.pravatar.cc/150?img=3' },
  { name: 'Sofía', avatar: 'https://i.pravatar.cc/150?img=4' },
  { name: 'Elena', avatar: 'https://i.pravatar.cc/150?img=5' },
];
