import React from 'react';
import { AddressBook, Phone, Mail, Globe, MapPin, Smartphone } from 'lucide-react';

interface MeProContactInfoProps {
  phone: string;
  whatsapp: string;
  email: string;
  website: string;
  location: string;
  makeCall: (number: string) => void;
  sendEmail: (email: string) => void;
  openWebsite: (url: string) => void;
  openWhatsApp: (number: string, message?: string) => void;
}

const MeProContactInfo: React.FC<MeProContactInfoProps> = ({
  phone,
  whatsapp,
  email,
  website,
  location,
  makeCall,
  sendEmail,
  openWebsite,
  openWhatsApp,
}) => {
  return (
    <div className="md:col-span-1 space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <AddressBook className="w-5 h-5 mr-2 text-[#4A90E2]" />
        Contact Info
      </h3>

      <div className="p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer" onClick={() => makeCall(phone)}>
        <div className="flex items-center">
          <Phone className="w-5 h-5 text-green-500" />
          <div className="ml-3">
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium text-gray-800">{phone}</p>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer" onClick={() => openWhatsApp(whatsapp)}>
        <div className="flex items-center">
          <Smartphone className="w-5 h-5 text-green-600" />
          <div className="ml-3">
            <p className="text-sm text-gray-500">WhatsApp</p>
            <p className="font-medium text-gray-800">{whatsapp}</p>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer" onClick={() => sendEmail(email)}>
        <div className="flex items-center">
          <Mail className="w-5 h-5 text-blue-500" />
          <div className="ml-3">
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium text-gray-800">{email}</p>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer" onClick={() => openWebsite(website)}>
        <div className="flex items-center">
          <Globe className="w-5 h-5 text-purple-500" />
          <div className="ml-3">
            <p className="text-sm text-gray-500">Professional CV</p>
            <p className="font-medium text-gray-800">{website}</p>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-lg">
        <div className="flex items-center">
          <MapPin className="w-5 h-5 text-red-500" />
          <div className="ml-3">
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium text-gray-800">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeProContactInfo;