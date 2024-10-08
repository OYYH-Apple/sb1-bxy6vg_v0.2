import React, { useState } from 'react';
import { Leaf, Sprout, Flower } from 'lucide-react';

const bencaoTopics = [
  { 
    name: '上经', 
    icon: Leaf, 
    content: '上经主要记载了120种上品药物，这些药物被认为是滋补强壮、平和无毒的，可以长期服用以增进健康、延年益寿。其中包括人参、灵芝、枸杞等著名的滋补类药材。上经的药物通常被视为最珍贵和最安全的药物，适合日常保健使用。'
  },
  { 
    name: '中经', 
    icon: Sprout, 
    content: '中经记载了120种中品药物，这些药物具有一定的药性和功效，可以治疗疾病，但也可能有轻微的毒性或副作用。中经的药物通常用于治疗常见疾病，如感冒、消化不良等。这些药物在使用时需要注意剂量和适应症，但总体来说相对安全。'
  },
  { 
    name: '下经', 
    icon: Flower, 
    content: '下经记载了125种下品药物，这些药物通常具有较强的药性和毒性，主要用于治疗严重或急性疾病。下经的药物效果强烈，但也可能带来较大的副作用，因此使用时需要非常谨慎，通常在医生的指导下使用。这些药物包括一些有毒植物和矿物质，如附子、砒霜等。'
  },
];

const ShennongBencaoJingSection: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState(0);

  return (
    <div className="flex">
      <div className="w-1/3 bg-gray-100 p-4">
        <h3 className="text-xl font-bold mb-4">神农本草经</h3>
        <ul>
          {bencaoTopics.map((topic, index) => (
            <li key={topic.name} className="mb-2">
              <button
                onClick={() => setActiveTopic(index)}
                className={`flex items-center p-2 w-full text-left rounded ${
                  activeTopic === index ? 'bg-gray-300' : 'hover:bg-gray-200'
                }`}
              >
                <topic.icon className="mr-2" size={20} />
                {topic.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 p-4">
        <h3 className="text-2xl font-bold mb-4">{bencaoTopics[activeTopic].name}</h3>
        <p className="text-lg leading-relaxed">{bencaoTopics[activeTopic].content}</p>
      </div>
    </div>
  );
};

export default ShennongBencaoJingSection;