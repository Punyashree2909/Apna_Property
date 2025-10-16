import React from 'react';
import Icon from './Icon.jsx';

const AgentCard = ({ name }) => (
  <div className="text-center p-4">
    <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
      <Icon path="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" className="w-16 h-16 text-gray-500"/>
    </div>
    <p className="font-semibold text-gray-700">{name}</p>
    <p className="text-sm text-gray-500">Real Estate Agent</p>
  </div>
);

export default AgentCard; 