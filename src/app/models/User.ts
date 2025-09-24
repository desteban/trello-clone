export interface User {
  name: string;
  avatar?: string;
  email: string;
  username: string;
}

export const mockUsers: User[] = [
  { name: 'Ana', avatar: 'https://i.pravatar.cc/150?img=1', email: 'ana@example.com', username: 'ana_1' },
  { name: 'Luis', avatar: 'https://i.pravatar.cc/150?img=2', email: 'luis@example.com', username: 'luis_2' },
  { name: 'Carlos', avatar: 'https://i.pravatar.cc/150?img=3', email: 'carlos@example.com', username: 'carlos_3' },
  { name: 'Sofía', avatar: 'https://i.pravatar.cc/150?img=4', email: 'sofia@example.com', username: 'sofia_4' },
  { name: 'Elena', avatar: 'https://i.pravatar.cc/150?img=5', email: 'elena@example.com', username: 'elena_5' },
];
