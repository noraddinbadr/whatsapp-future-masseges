export interface Contact {
  id: string;
  name: string;
  avatar?: string;
  phone: string;
  lastSeen?: Date;
  isOnline?: boolean;
}

export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  senderId: string;
  type: 'text' | 'image' | 'audio' | 'video';
  isRead: boolean;
  isMursal?: boolean;
  mursalId?: string;
}

export interface Chat {
  id: string;
  participants: string[];
  messages: Message[];
  lastMessage?: Message;
  isGroup: boolean;
  name?: string;
  avatar?: string;
}

export type ConditionType = 'datetime' | 'inactivity' | 'recurring';

export interface MursalCondition {
  type: ConditionType;
  datetime?: Date;
  inactivityHours?: number;
  recurringPattern?: 'daily' | 'weekly' | 'monthly';
  recurringTime?: string;
}

export interface Mursal {
  id: string;
  recipientIds: string[];
  content: string;
  condition: MursalCondition;
  status: 'pending' | 'delivered' | 'cancelled';
  createdAt: Date;
  deliveredAt?: Date;
  analytics?: {
    deliveryTime: Date;
    readReceipts: { [contactId: string]: Date };
    mediaInteractions: number;
  };
}

export interface MursalStore {
  mursals: Mursal[];
  addMursal: (mursal: Omit<Mursal, 'id' | 'createdAt' | 'status'>) => void;
  updateMursal: (id: string, updates: Partial<Mursal>) => void;
  deleteMursal: (id: string) => void;
  getMursalsByStatus: (status: Mursal['status']) => Mursal[];
}