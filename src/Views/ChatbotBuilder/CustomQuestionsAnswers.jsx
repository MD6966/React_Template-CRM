import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';
import { FiPlusCircle } from 'react-icons/fi';

const CustomQuestionsAnswers = () => {
  // State for the initial FAQ (the one with the 'Edit' button)
  const [initialFaq, setInitialFaq] = useState({
    question: 'What are your business hours?',
    answer: 'Your chatbot will answer this question based on the information you\'ve provided.',
    editable: false, // You might want to make this editable later
  });

  // State for the new FAQs that can be added
  const [newFaqs, setNewFaqs] = useState([
    { id: 1, question: 'What are your business hours?', answer: '' }, // First pre-filled new FAQ
  ]);

  // Unique ID counter for new FAQs
  const [faqIdCounter, setFaqIdCounter] = useState(3); // Start after initial 2

  const handleNewFaqChange = (id, field, value) => {
    setNewFaqs((prevFaqs) =>
      prevFaqs.map((faq) =>
        faq.id === id ? { ...faq, [field]: value } : faq
      )
    );
  };

  const handleAddQuestion = () => {
    setNewFaqs((prevFaqs) => [
      ...prevFaqs,
      { id: faqIdCounter, question: '', answer: '' },
    ]);
    setFaqIdCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="p-3">
        <div className='border p-4 rounded-3xl border-blue-100'>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Build Your FAQ's</h3>
      <div className="bg-blue-100/50 bg-opacity-50 p-4 rounded-lg flex items-start justify-between mb-8 border border-blue-200">
        <div className="flex-1">
          <p className="font-medium text-gray-800 mb-1">{initialFaq.question}</p>
          <p className="text-sm text-gray-600">{initialFaq.answer}</p>
        </div>
        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">Edit</button>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">Your New FAQ's</h3>
      {newFaqs.map((faq) => (
        <div key={faq.id} className="mb-6">
          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-2">Write Your Question</p>
            <input
              type="text"
              placeholder="write your question"
              className="w-full p-3 rounded-lg bg-blue-100 bg-opacity-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800"
              value={faq.question}
              onChange={(e) => handleNewFaqChange(faq.id, 'question', e.target.value)}
            />
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-2">Type Answer...</p>
            <textarea
              placeholder="Type Answer..."
              rows="4"
              className="w-full p-3 rounded-lg bg-blue-100/50 bg-opacity-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-y text-gray-800"
              value={faq.answer}
              onChange={(e) => handleNewFaqChange(faq.id, 'answer', e.target.value)}
            ></textarea>
          </div>
        </div>
      ))}

      {/* Add Question Button */}
      <button
        onClick={handleAddQuestion}
        className="flex items-center text-primarycolor  cursor-pointer font-medium text-sm mt-4"
      >
       <FiPlusCircle className='text-xl' />

        Add Question
      </button>
        </div>

    </div>
  );
};

export default CustomQuestionsAnswers;