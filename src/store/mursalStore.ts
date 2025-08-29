import { create } from 'zustand';
import { MursalStore, Mursal } from '../types';

export const useMursalStore = create<MursalStore>((set, get) => ({
  mursals: [
    {
      id: '1',
      recipientIds: ['contact-1'],
      content: 'Happy Birthday! 🎉 Hope you have an amazing day!',
      condition: {
        type: 'datetime',
        datetime: new Date('2024-12-25T09:00:00')
      },
      status: 'pending',
      createdAt: new Date('2024-12-20T10:30:00')
    },
    {
      id: '2',
      recipientIds: ['contact-2'],
      content: 'Hey! Just checking if you made it home safely. Let me know when you get this.',
      condition: {
        type: 'inactivity',
        inactivityHours: 6
      },
      status: 'delivered',
      createdAt: new Date('2024-12-22T18:00:00'),
      deliveredAt: new Date('2024-12-23T00:00:00'),
      analytics: {
        deliveryTime: new Date('2024-12-23T00:00:00'),
        readReceipts: { 'contact-2': new Date('2024-12-23T00:15:00') },
        mediaInteractions: 0
      }
    }
  ],

  addMursal: (mursalData) => {
    const newMursal: Mursal = {
      ...mursalData,
      id: Date.now().toString(),
      createdAt: new Date(),
      status: 'pending'
    };
    set((state) => ({
      mursals: [...state.mursals, newMursal]
    }));
  },

  updateMursal: (id, updates) => {
    set((state) => ({
      mursals: state.mursals.map((mursal) =>
        mursal.id === id ? { ...mursal, ...updates } : mursal
      )
    }));
  },

  deleteMursal: (id) => {
    set((state) => ({
      mursals: state.mursals.filter((mursal) => mursal.id !== id)
    }));
  },

  getMursalsByStatus: (status) => {
    return get().mursals.filter((mursal) => mursal.status === status);
  }
}));