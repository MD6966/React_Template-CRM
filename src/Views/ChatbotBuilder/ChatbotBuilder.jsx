import React, { useState } from 'react';
import CustomQuestionsAnswers from './CustomQuestionsAnswers';
import AIGeneratedQuestionsAnswers from './AIGeneratedQuestionsAnswers';

const ChatbotBuilder = () => {
    const [activeTab, setActiveTab] = useState('custom');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'custom':
                return <CustomQuestionsAnswers />;
            case 'ai-generated':
                return <AIGeneratedQuestionsAnswers />;
            default:
                return <CustomQuestionsAnswers />;
        }
    };

    const handleNextTab = () => {
        setActiveTab('ai-generated');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center font-barlow">
            <div className="w-full  bg-[#dcf2f7] rounded-lg shadow-xl overflow-hidden border border-gray-200">
                <div className="p-6 pb-4 border-gray-200">
                    <h1 className="text-3xl font-bold text-gray-900">Chatbot Builder</h1>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-200 px-6 pt-4">
                    <button
                        className={`py-3 px-6 text-sm rounded-t-lg cursor-pointer font-semibold transition-colors duration-200
              ${activeTab === 'custom'
                                ? 'bg-blue-200 text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:text-gray-800'
                            }`}
                        onClick={() => setActiveTab('custom')}
                    >
                        Custom Questions Answers
                    </button>
                    <button
                        className={`ml-2 py-3 px-6 text-sm rounded-t-lg cursor-pointer font-semibold transition-colors duration-200
              ${activeTab === 'ai-generated'
                                ? 'bg-blue-200 text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-600 hover:text-gray-800'
                            }`}
                        onClick={() => setActiveTab('ai-generated')}
                    >
                        AI Generated Questions Answers
                    </button>
                </div>

                <div className="bg-gray-50 pb-8">
                    {renderTabContent()}
                </div>

                {activeTab === 'custom' && (
                    <div className="p-6 bg-white border-t border-gray-200 flex justify-end space-x-4">
                        <button className="px-4 md:px-20 py-2 cursor-pointer rounded-lg text-gray-700 border border-gray-300 hover:bg-gray-100 font-medium">
                            Skip
                        </button>

                        <button
                            className="px-4 md:px-20 py-2 cursor-pointer rounded-lg bg-gradient-to-b from-primarycolor to-secondarycolor text-white  font-medium transition-colors duration-200 shadow-md"
                            onClick={handleNextTab}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatbotBuilder;