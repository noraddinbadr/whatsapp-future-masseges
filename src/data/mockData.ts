import { Contact, Chat, Message } from '../types';

export const mockContacts: Contact[] = [
  {
    id: 'contact-1',
    name: 'Sarah Johnson',
    phone: '+1 (555) 123-4567',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    isOnline: true
  },
  {
    id: 'contact-2',
    name: 'Mike Chen',
    phone: '+1 (555) 987-6543',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    lastSeen: new Date(Date.now() - 1000 * 60 * 30) // 30 minutes ago
  },
  {
    id: 'contact-3',
    name: 'Emma Wilson',
    phone: '+1 (555) 456-7890',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    isOnline: false,
    lastSeen: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
  },
  {
    id: 'contact-4',
    name: 'David Rodriguez',
    phone: '+1 (555) 321-0987',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    isOnline: true
  },
  {
    id: 'contact-5',
    name: 'Lisa Park',
    phone: '+1 (555) 654-3210',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    lastSeen: new Date(Date.now() - 1000 * 60 * 60 * 24) // 1 day ago
  }
];

export const mockChats: Chat[] = [
  {
    id: 'chat-1',
    participants: ['user', 'contact-1'],
    isGroup: false,
    messages: [
      {
        id: 'msg-1',
        content: 'Hey! How are you doing?',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
        senderId: 'contact-1',
        type: 'text',
        isRead: true
      },
      {
        id: 'msg-2',
        content: 'I\'m doing great! Thanks for asking 😊',
        timestamp: new Date(Date.now() - 1000 * 60 * 60),
        senderId: 'user',
        type: 'text',
        isRead: true
      }
    ]
  },
  {
    id: 'chat-2',
    participants: ['user', 'contact-2'],
    isGroup: false,
    messages: [
      {
        id: 'msg-3',
        content: 'Are we still on for dinner tonight?',
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        senderId: 'contact-2',
        type: 'text',
        isRead: false
      }
    ]
  }
];

// Add last messages to chats
mockChats.forEach(chat => {
  if (chat.messages.length > 0) {
    chat.lastMessage = chat.messages[chat.messages.length - 1];
  }
});