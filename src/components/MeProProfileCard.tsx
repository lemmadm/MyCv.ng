import React from 'react';
import { QrCode } from 'lucide-react';

interface MeProProfileCardProps {
  name: string;
  title: string;
  summary: string;
  initials: string;
}

const MeProProfileCard: React.FC<MeProProfileCardProps> = ({ name, title, summary, initials }) => {
  return (
    <div className="md:col-span-1 text-center">
      <div className="relative inline-block mb-6">
        <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto">
          {initials}
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse"></div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-lg font-medium mb-4 text-[#4A90E2]">{title}</p>
      <p className="text-gray-600 text-sm leading-relaxed">
        {summary}
      </p>

      {/* QR Code */}
      <div className="mt-6">
        <div className="w-20 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjcwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjAiIHk9IjcwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9ImJsYWNrIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI4MCIgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTAiIHk9IjgwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjQwIiB5PSI0MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K')] bg-no-repeat bg-center bg-contain mx-auto mb-2"></div>
        <p className="text-xs text-gray-500">Scan to save contact</p>
      </div>
    </div>
  );
};

export default MeProProfileCard;