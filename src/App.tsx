import React, { useState } from 'react';
import { ChatList } from './components/ChatList';
import { NewMursalFlow } from './components/NewMursalFlow';
import { MursalManagement } from './components/MursalManagement';
import { ChatView } from './components/ChatView';
import { useMursalStore } from './store/mursalStore';

export type Screen = 'chatList' | 'newMursal' | 'management' | 'chat';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('chatList');
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const { mursals } = useMursalStore();

  const handleNavigate = (screen: Screen, chatId?: string) => {
    setCurrentScreen(screen);
    if (chatId) {
      setSelectedChatId(chatId);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'chatList':
        return <ChatList onNavigate={handleNavigate} />;
      case 'newMursal':
        return <NewMursalFlow onNavigate={handleNavigate} />;
      case 'management':
        return <MursalManagement onNavigate={handleNavigate} />;
      case 'chat':
        return <ChatView chatId={selectedChatId!} onNavigate={handleNavigate} />;
      default:
        return <ChatList onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white min-h-screen relative">
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;