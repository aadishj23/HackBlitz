import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How big can a team be?",
      answer: "A team can consist of 1 to 4 members."
    },
    
    {
      question: "I am a newbie, can I hack?",
      answer: "Absolutely! Hackathons are a great way to learn and grow. Whether you’re a beginner or an experienced hacker, everyone is welcome to join, collaborate, and build something amazing."
    },
    {
      question: "Is there a registration fee for participation?",
      answer: "We don't want to monetize learning, community, and innovation. So, there is no participation/registration fee."
    },
    {
      question: "What is the shortlisting procedure?",
      answer: "Based on the info provided in the registration form and a telephonic interview (if required), teams will be shortlisted for the hackathon."
    },
    {
      question: "Can I start working on my hack before the event?",
      answer: "No. In the interest of fairness, students should not be working on their projects before HackBlitz begins and we do not allow participants to work on pre-existing projects. However, you can familiarize yourself with all the tools and technologies you intend to use beforehand."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full">
        <h1 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h1>
        <ul className="space-y-4">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-900 hover:bg-gray-800 focus:outline-none"
              >
                <span>{faq.question}</span>
                <span
                  className={`w-5 h-5 ${openIndex !== index ? "text-blue-500" : ""}`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 bg-gray-800">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
