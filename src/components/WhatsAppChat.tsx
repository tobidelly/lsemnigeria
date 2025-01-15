import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppChat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/2348012345678"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </a>
      <div className="absolute bottom-full right-0 mb-2 w-48 bg-white rounded-lg shadow-lg p-4 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
        <p className="text-sm text-gray-600">
          Need help? Chat with us on WhatsApp!
        </p>
      </div>
    </div>
  );
};

export default WhatsAppChat;