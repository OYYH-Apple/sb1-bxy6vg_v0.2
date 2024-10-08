import React, { useState } from 'react'
import { Compass, Leaf, Scroll, Zap, BookOpen, Thermometer, Stethoscope, Star, Wand2, Home, Feather, ArrowLeft } from 'lucide-react'
import AcupunctureSection from './components/AcupunctureSection'
import ShennongBencaoJingSection from './components/ShennongBencaoJingSection'
import ShangHanLunSection from './components/ShangHanLunSection'
import JinGuiYaoLueSection from './components/JinGuiYaoLueSection'

const sections = [
  {
    title: '中医',
    icon: Leaf,
    content: '中医是中国传统医学体系，强调整体观念和阴阳平衡。它包括草药、针灸、推拿等多种治疗方法，注重预防和调理，以达到身心和谐。中医理论基于五行学说和经络理论，通过辨证施治来恢复健康。',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    subTopics: [
      { name: '针灸学', icon: Zap, component: AcupunctureSection },
      { name: '神农本草经', icon: BookOpen, component: ShennongBencaoJingSection },
      { name: '伤寒论', icon: Thermometer, component: ShangHanLunSection },
      { name: '金匮要略', icon: Stethoscope, component: JinGuiYaoLueSection }
    ]
  },
  {
    title: '占卜',
    icon: Scroll,
    content: '占卜是一种古老的预测方法，用于洞察未来和指导决策。中国传统占卜包括易经、六爻、梅花易数等多种方式。通过解读卦象和符号，占卜师能够为生活、事业、感情等方面提供指引，帮助人们做出明智的选择。',
    image: 'https://images.unsplash.com/photo-1568132930457-20ac2189f20b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    subTopics: [
      { name: '紫薇斗数', icon: Star },
      { name: '铁板神术', icon: Wand2 }
    ]
  },
  {
    title: '风水',
    icon: Compass,
    content: '风水是研究环境与人之间和谐关系的中国传统学说。它关注自然环境、建筑布局、家居摆设对人的影响。通过调整空间布局和能量流动，风水旨在创造有利于健康、财富和幸福的环境。风水理论包括阴阳五行、八卦、罗盘等知识体系。',
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    subTopics: [
      { name: '阳宅学', icon: Home },
      { name: '阴宅学', icon: Feather }
    ]
  },
]

function App() {
  const [activeSection, setActiveSection] = useState(0)
  const [activeSubTopic, setActiveSubTopic] = useState<string | null>(null)

  const handleSubTopicClick = (subTopic: string) => {
    setActiveSubTopic(subTopic)
  }

  const handleBackClick = () => {
    setActiveSubTopic(null)
  }

  const renderContent = () => {
    const currentSection = sections[activeSection]
    if (activeSubTopic) {
      const subTopic = currentSection.subTopics.find(st => st.name === activeSubTopic)
      if (subTopic && subTopic.component) {
        const SubTopicComponent = subTopic.component
        return (
          <div>
            <div className="flex items-center mb-4">
              <button
                onClick={handleBackClick}
                className="flex items-center text-gray-600 hover:text-gray-800 mr-4"
              >
                <ArrowLeft size={20} className="mr-1" />
                返回
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {currentSection.subTopics.map((st, index) => (
                <button
                  key={index}
                  onClick={() => handleSubTopicClick(st.name)}
                  className={`px-3 py-1 rounded ${
                    st.name === activeSubTopic
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {st.name}
                </button>
              ))}
            </div>
            <SubTopicComponent />
          </div>
        )
      }
    }
    return (
      <>
        <div 
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentSection.image})` }}
        ></div>
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{currentSection.title}</h2>
          <p className="text-lg leading-relaxed mb-6">{currentSection.content}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {currentSection.subTopics.map((subTopic, index) => (
              <button
                key={index}
                onClick={() => handleSubTopicClick(subTopic.name)}
                className="w-24 h-24 rounded-full bg-gray-800 text-white flex flex-col items-center justify-center text-center p-2 transition-transform hover:scale-110"
              >
                <subTopic.icon size={24} className="mb-2" />
                <span className="text-sm">{subTopic.name}</span>
              </button>
            ))}
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-serif">
      <header className="bg-gray-900 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">千乐堂</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {sections.map((section, index) => (
            <button
              key={section.title}
              onClick={() => {
                setActiveSection(index)
                setActiveSubTopic(null)
              }}
              className={`flex flex-col items-center p-4 rounded-lg transition-colors ${
                activeSection === index ? 'bg-gray-800 text-white' : 'bg-white hover:bg-gray-200'
              }`}
            >
              <section.icon size={48} />
              <span className="mt-2 text-lg">{section.title}</span>
            </button>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {renderContent()}
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-4 text-center mt-8">
        <p>© 2024 江西省赣州市会昌县千乐堂. 保留所有权利。</p>
      </footer>
    </div>
  )
}

export default App