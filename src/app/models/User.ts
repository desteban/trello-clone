export interface User {
  name: string;
  avatar?: string;
  email: string;
}

export const mockUsers: User[] = [
  { name: 'Ana', avatar: 'https://i.pravatar.cc/150?img=1', email: 'ana@example.com' },
  { name: 'Luis', avatar: 'https://i.pravatar.cc/150?img=2', email: 'luis@example.com' },
  { name: 'Carlos', avatar: 'https://i.pravatar.cc/150?img=3', email: 'carlos@example.com' },
  { name: 'Sofía', avatar: 'https://i.pravatar.cc/150?img=4', email: 'sofia@example.com' },
  { name: 'Elena', avatar: 'https://i.pravatar.cc/150?img=5', email: 'elena@example.com' },
];
