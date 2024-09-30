// 🏠 🏚️
import { BiSolidCarGarage, BiSolidHome, BiSolidBuilding, BiSolidCheckCircle, BiSolidSad } from 'react-icons/bi';
import { FiMap } from 'react-icons/fi';
import { languages, words } from '../utils/dictionary';

type FeatureType = 'land-area' | 'build-area' | 'built' | 'vacant' | 'garage' | 'rooms';

interface FeatureProps {
  title?: string
  icon: FeatureType
  value: number | string | Date
  unit?: string
  currentLanguage: languages
}

const currentLanguage = languages.Portuguese

const featureData: Record<FeatureType, { icon: JSX.Element; unit: string; title: string }> = {
  'land-area': {
    icon: <FiMap />,
    unit: 'm²',
    title: words.landArea[currentLanguage],
  },
  'build-area': {
    icon: <BiSolidBuilding />,
    unit: 'm²',
    title: words.buildingArea[currentLanguage],
  },
  'built': {
    icon: <BiSolidCheckCircle />,
    unit: '',
    title: words.constructionYear[currentLanguage],
  },
  'vacant': {
    icon: <BiSolidSad />,
    unit: '',
    title: words.vacantSince[currentLanguage],
  },
  'garage': {
    icon: <BiSolidCarGarage />,
    unit: '',
    title: words.garages[currentLanguage],
  },
  'rooms': {
    icon: <BiSolidHome />,
    unit: '',
    title: words.rooms[currentLanguage],
  },
};

export function Feature({ 
  icon, 
  title = featureData[icon].title, 
  value, 
  unit = featureData[icon].unit
}: FeatureProps) {
  const formattedValue = 
    value instanceof Date ? value.toLocaleDateString(currentLanguage === languages.Portuguese ? 'pt-BR' : 'en-US') : value;
  return (
    <div 
      className="flex flex-1 items-center justify-start border border-gray-800 my-1 mx-2 px-4 py-1 rounded min-w-1/2 w-1/2 text-xl" 
      title={title}
    >
      <strong className="flex items-center justify-start text-white">
        {featureData[icon].icon}<span className="pl-1 pr-2">:</span>
      </strong>
      <span>{formattedValue}{unit}</span>
    </div>
  );
}