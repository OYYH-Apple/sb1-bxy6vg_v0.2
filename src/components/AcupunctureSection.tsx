import React, { useState } from 'react';
import { Book, Map, Clock, Turtle, Hand } from 'lucide-react';

const acupunctureTopics = [
  { name: '黄帝内经', icon: Book, content: '《黄帝内经》是中医理论的奠基之作，阐述了人体生理、病理、诊断、治疗等基本理论。它强调天人合一的整体观念，对针灸学的发展有深远影响。' },
  { name: '十二经脉循行图', icon: Map, content: '十二经脉循行图详细展示了人体经络系统，包括手三阴经、手三阳经、足三阴经、足三阳经。这些经脉在体表的分布和内部的联系，是针灸治疗的重要依据。' },
  { name: '子午流注', icon: Clock, content: '子午流注是一种基于时间的针灸治疗方法。它认为人体经络气血运行与天地阴阳变化相应，在不同时辰，不同经络气血旺盛，据此选择最佳治疗时间和穴位。' },
  { name: '灵龟八法', icon: Turtle, content: '灵龟八法是一种复杂的针灸处方方法，基于八卦理论。它通过分析病情的阴阳、表里、寒热等特征，选择相应的穴位组合，以达到调和阴阳、治疗疾病的目的。' },
  { name: '针刺手法', icon: Hand, content: '针刺手法是针灸治疗的核心技巧，包括进针、捻转、提插等多种操作方法。不同的手法可以产生不同的刺激效果，从而达到调节气血、平衡阴阳的目的。' },
];

const AcupunctureSection: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState(0);

  return (
    <div className="flex">
      <div className="w-1/3 bg-gray-100 p-4">
        <h3 className="text-xl font-bold mb-4">针灸学</h3>
        <ul>
          {acupunctureTopics.map((topic, index) => (
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
        <h3 className="text-2xl font-bold mb-4">{acupunctureTopics[activeTopic].name}</h3>
        <p className="text-lg leading-relaxed">{acupunctureTopics[activeTopic].content}</p>
      </div>
    </div>
  );
};

export default AcupunctureSection;