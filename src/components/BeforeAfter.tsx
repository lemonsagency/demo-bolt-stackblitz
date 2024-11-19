import { type FC } from 'react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  name: string;
  description: string;
}

const BeforeAfter: FC<BeforeAfterProps> = ({ beforeImage, afterImage, name, description }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="grid grid-cols-2 gap-2">
        <div>
          <img src={beforeImage} alt="Before treatment" className="w-full h-64 object-cover" />
          <p className="text-center py-2 bg-gray-100 font-medium">Before</p>
        </div>
        <div>
          <img src={afterImage} alt="After treatment" className="w-full h-64 object-cover" />
          <p className="text-center py-2 bg-gray-100 font-medium">After</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default BeforeAfter;