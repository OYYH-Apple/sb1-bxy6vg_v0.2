import React, { useState } from 'react';
import { Book, Thermometer, Wind, Droplets, Sun } from 'lucide-react';

const shangHanLunTopics = [
  { 
    name: '六经辨证', 
    icon: Book,
    content: '六经辨证是《伤寒论》的核心理论之一，将疾病的发展过程分为太阳、阳明、少阳、太阴、少阴、厥阴六个阶段。每个阶段都有特定的症状和治疗方法，反映了疾病从表到里、从浅入深的进展过程。',
    subtopics: [
      { name: '太阳病', content: '太阳病是六经病变的第一阶段，主要表现为发热、恶寒、头痛、身痛等症状。常用方剂包括桂枝汤和麻黄汤。' },
      { name: '阳明病', content: '阳明病是疾病进一步发展的阶段，特征是高热、口渴、便秘等。代表方剂有白虎汤和承气汤。' },
      { name: '少阳病', content: '少阳病位于表里之间，主要症状包括胸胁苦满、往来寒热、口苦等。小柴胡汤是治疗少阳病的经典方剂。' },
      { name: '太阴病', content: '太阴病涉及脾胃功能障碍，表现为腹痛、腹泻、四肢厥冷等。四逆汤和理中汤是常用方剂。' },
      { name: '少阴病', content: '少阴病涉及肾阳虚衰，症状包括畏寒、脉微细、小便清长等。四逆汤和真武汤是治疗少阴病的代表方。' },
      { name: '厥阴病', content: '厥阴病是六经病变的最后阶段，表现为手足厥冷、烦躁、渴欲饮水等。乌梅丸是治疗厥阴病的著名方剂。' }
    ]
  },
  { 
    name: '八纲辨证', 
    icon: Thermometer,
    content: '八纲辨证是《伤寒论》中另一个重要的诊断方法，包括阴阳、表里、寒热、虚实四对范畴。通过这八个方面的辨别，可以全面把握疾病的性质和状态，为制定治疗方案提供依据。',
    subtopics: [
      { name: '阴阳', content: '阴阳是中医理论的基础，用于描述疾病的基本属性。阳证多表现为热象，阴证多表现为寒象。' },
      { name: '表里', content: '表证多为疾病初期，症状在体表；里证则病情较重，影响内脏功能。' },
      { name: '寒热', content: '寒证表现为怕冷、喜暖，热证表现为发热、口渴等。' },
      { name: '虚实', content: '虚证是指人体正气不足，实证是指邪气盛实。治疗原则分别是补虚和祛实。' }
    ]
  },
  { 
    name: '治法', 
    icon: Wind,
    content: '《伤寒论》提出了多种治疗原则和方法，如汗、吐、下、和、温、清、消、补等。这些治法针对不同的病证，采用不同的治疗策略，体现了"辨证论治"的核心思想。',
    subtopics: [
      { name: '汗法', content: '用于解表，治疗表证，如桂枝汤、麻黄汤。' },
      { name: '吐法', content: '用于清除胃中积滞，如瓜蒂散。' },
      { name: '下法', content: '用于泻下攻积，如大承气汤。' },
      { name: '和法', content: '调和阴阳，如小柴胡汤。' },
      { name: '温法', content: '温阳散寒，如四逆汤。' },
      { name: '清法', content: '清热泻火，如白虎汤。' },
      { name: '消法', content: '消食导滞，如大黄丸。' },
      { name: '补法', content: '补益气血，如补中益气汤。' }
    ]
  },
  { 
    name: '方剂', 
    icon: Droplets,
    content: '《伤寒论》记载了大量经典方剂，这些方剂是中医临床实践的精华，至今仍广泛应用。每个方剂都有其特定的适应症和配伍原则，体现了中医辨证论治的特色。',
    subtopics: [
      { name: '桂枝汤', content: '治疗太阳中风证，发热、微恶风寒、头痛等症状。' },
      { name: '麻黄汤', content: '用于治疗太阳伤寒证，恶寒发热、无汗、身疼痛等。' },
      { name: '小柴胡汤', content: '治疗少阳病，往来寒热、胸胁苦满等症状。' },
      { name: '白虎汤', content: '清热生津，用于阳明经证，大热、口渴、汗出等。' },
      { name: '承气汤', content: '包括大承气汤、小承气汤等，用于阳明腑证，腹满便秘等。' },
      { name: '四逆汤', content: '回阳救逆，用于少阴病，四肢厥冷、脉微欲绝等危重症状。' }
    ]
  },
  { 
    name: '病机', 
    icon: Sun,
    content: '病机是指疾病发生、发展的内在机理。《伤寒论》深入分析了外感病的病机变化，包括邪正盛衰、气血变化、脏腑功能等多个方面，为中医理论的发展奠定了基础。',
    subtopics: [
      { name: '三阴三阳', content: '描述了疾病从浅入深的六个阶段，反映了邪气与正气斗争的过程。' },
      { name: '气血失调', content: '分析了气血在疾病过程中的变化，如气滞、血瘀等。' },
      { name: '脏腑功能', content: '探讨了各脏腑在疾病中的作用和相互关系。' },
      { name: '寒热虚实', content: '分析了疾病的性质和正邪力量对比。' },
      { name: '病位转移', content: '描述了疾病在体内的传变规律。' }
    ]
  }
];

const ShangHanLunSection: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState(0);
  const [activeSubtopic, setActiveSubtopic] = useState(0);

  return (
    <div className="flex">
      <div className="w-1/3 bg-gray-100 p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        <h3 className="text-xl font-bold mb-4">伤寒论</h3>
        <ul>
          {shangHanLunTopics.map((topic, index) => (
            <li key={topic.name} className="mb-2">
              <button
                onClick={() => {
                  setActiveTopic(index);
                  setActiveSubtopic(0);
                }}
                className={`flex items-center p-2 w-full text-left rounded ${
                  activeTopic === index ? 'bg-gray-300' : 'hover:bg-gray-200'
                }`}
              >
                <topic.icon className="mr-2" size={20} />
                {topic.name}
              </button>
              {activeTopic === index && (
                <ul className="ml-6 mt-2">
                  {topic.subtopics.map((subtopic, subIndex) => (
                    <li key={subtopic.name} className="mb-1">
                      <button
                        onClick={() => setActiveSubtopic(subIndex)}
                        className={`p-1 w-full text-left text-sm rounded ${
                          activeSubtopic === subIndex ? 'bg-gray-200' : 'hover:bg-gray-100'
                        }`}
                      >
                        {subtopic.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        <h3 className="text-2xl font-bold mb-4">{shangHanLunTopics[activeTopic].name}</h3>
        <p className="text-lg leading-relaxed mb-4">{shangHanLunTopics[activeTopic].content}</p>
        <h4 className="text-xl font-semibold mb-2">{shangHanLunTopics[activeTopic].subtopics[activeSubtopic].name}</h4>
        <p className="text-lg leading-relaxed">{shangHanLunTopics[activeTopic].subtopics[activeSubtopic].content}</p>
      </div>
    </div>
  );
};

export default ShangHanLunSection;