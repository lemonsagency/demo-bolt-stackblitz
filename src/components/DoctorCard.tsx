import { type FC } from 'react';

interface DoctorCardProps {
  image: string;
  name: string;
  title: string;
  description: string;
}

const DoctorCard: FC<DoctorCardProps> = ({ image, name, title, description }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={name} className="w-full h-72 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-teal-600 font-medium mt-1">{title}</p>
        <p className="text-gray-600 mt-3">{description}</p>
      </div>
    </div>
  );
};

export default DoctorCard;