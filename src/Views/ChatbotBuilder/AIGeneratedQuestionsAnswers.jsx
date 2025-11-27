import React from 'react';

const AIGeneratedQuestionsAnswers = () => {
    return (
        <div className="p-6">
            <div className='border p-4 rounded-3xl border-blue-100'>
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="flex flex-col">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Automate your Instagram DMs
                        </h1>
                        <p className="text-gray-600 text-base mb-8">
                            EngageMore helps you automate your Instagram DMs to increase engagement
                            and sales. Set up automated replies to comments and messages, and watch
                            your business grow.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Comment Automation</h3>
                        <textarea
                            placeholder="What are your business hours?"
                            rows="6"
                            className="w-full p-4 rounded-lg bg-blue-50 bg-opacity-70 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 mb-6 resize-y"
                        ></textarea>
                        <div className='flex items-end justify-end'>
                            <button className="px-8 py-3  rounded-lg bg-gradient-to-l from-primarycolor to-secondarycolor text-white hover:bg-purple-600 font-medium transition-colors duration-200 shadow-md">
                                Save Automation
                            </button>
                        </div>
                    </div>

                    <div className="flex-shrink-0 relative w-64 h-auto md:w-72 md:h-auto lg:w-80 p-4 bg-purple-50 rounded-3xl flex items-center justify-center border-2 border-purple-100">
                        <img src="/mobilepic.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIGeneratedQuestionsAnswers;