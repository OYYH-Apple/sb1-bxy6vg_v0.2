import React, { useState } from 'react';
import { Book, Heart, Stethoscope, Droplets, Brain, Bone } from 'lucide-react';

const jinGuiYaoLueTopics = [
  {
    name: '脏腑病证',
    icon: Heart,
    content: '《金匮要略》详细讨论了各种内脏疾病的诊断和治疗方法，涵盖了心、肝、脾、肺、肾等主要脏器的病证。',
    subtopics: [
      { name: '心病', content: '包括心悸、心痛等症状的诊治，如炙甘草汤治疗心悸。' },
      { name: '肝病', content: '讨论肝郁、胁痛等肝系疾病，如柴胡疏肝散治疗肝郁气滞。' },
      { name: '脾胃病', content: '涉及消化系统疾病，如理中丸治疗脾胃虚寒。' },
      { name: '肺病', content: '包括咳嗽、喘息等肺系疾病，如麦门冬汤治疗肺阴虚咳嗽。' },
      { name: '肾病', content: '讨论水肿、腰痛等肾系疾病，如真武汤治疗肾阳虚水肿。' }
    ]
  },
  {
    name: '杂病',
    icon: Stethoscope,
    content: '《金匮要略》中的"杂病"部分涵盖了多种常见疾病和症状，包括发热、痰饮、咳嗽、腹痛等。',
    subtopics: [
      { name: '发热', content: '讨论各种发热的原因和治疗，如白虎汤治疗阳明热证。' },
      { name: '痰饮', content: '探讨痰饮病的诊断和治疗，如二陈汤化痰。' },
      { name: '咳嗽', content: '详细分析各种咳嗽的病因和治法，如苏子降气汤治疗气逆咳嗽。' },
      { name: '腹痛', content: '讨论不同类型腹痛的鉴别和治疗，如芍药甘草汤缓解腹痛。' },
      { name: '头痛', content: '分析头痛的不同原因和相应治法，如川芎茶调散治疗血虚头痛。' }
    ]
  },
  {
    name: '妇科疾病',
    icon: Droplets,
    content: '《金匮要略》中有专门的篇章讨论妇科疾病，包括月经失调、带下、妊娠相关疾病等。',
    subtopics: [
      { name: '月经病', content: '讨论月经不调、痛经等问题，如当归芍药散调经。' },
      { name: '带下病', content: '探讨带下病的诊断和治疗，如萆薢分清饮治疗湿热带下。' },
      { name: '妊娠病', content: '涉及妊娠期间的各种疾病，如桂枝茯苓丸治疗妊娠恶阻。' }
    ]
  },
  {
    name: '外感病',
    icon: Brain,
    content: '《金匮要略》继承和发展了《伤寒论》的外感病理论，对多种外感疾病进行了深入讨论。',
    subtopics: [
      { name: '伤寒', content: '讨论伤寒病的诊断和治疗，如麻黄汤解表。' },
      { name: '温病', content: '探讨温病的特点和治法，如白虎汤清热。' },
      { name: '湿病', content: '分析湿邪致病的特点和治疗方法，如五苓散利水渗湿。' }
    ]
  },
  {
    name: '养生与预防',
    icon: Bone,
    content: '《金匮要略》不仅讨论疾病的治疗，还涉及养生与疾病预防的内容。',
    subtopics: [
      { name: '饮食调养', content: '讨论通过饮食调节来维护健康，如五味粥的应用。' },
      { name: '起居养生', content: '探讨日常生活中的养生之道，如顺应四时的起居原则。' },
      { name: '情志调摄', content: '分析情志对健康的影响，以及如何调节情志以防病治病。' }
    ]
  }
];

const JinGuiYaoLueSection: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState(0);
  const [activeSubtopic, setActiveSubtopic] = useState(0);

  return (
    <div className="flex">
      <div className="w-1/3 bg-gray-100 p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        <h3 className="text-xl font-bold mb-4">金匮要略</h3>
        <ul>
          {jinGuiYaoLueTopics.map((topic, index) => (
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
        <h3 className="text-2xl font-bold mb-4">{jinGuiYaoLueTopics[activeTopic].name}</h3>
        <p className="text-lg leading-relaxed mb-4">{jinGuiYaoLueTopics[activeTopic].content}</p>
        <h4 className="text-xl font-semibold mb-2">{jinGuiYaoLueTopics[activeTopic].subtopics[activeSubtopic].name}</h4>
        <p className="text-lg leading-relaxed">{jinGuiYaoLueTopics[activeTopic].subtopics[activeSubtopic].content}</p>
      </div>
    </div>
  );
};

export default JinGuiYaoLueSection;