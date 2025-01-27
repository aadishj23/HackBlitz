import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How big can a team be?",
      answer: "A team can consist of 1 to 4 members.",
    },
    {
      question: "I am a newbie, can I hack?",
      answer:
        "Absolutely! Hackathons are a great way to learn and grow. Whether you’re a beginner or an experienced hacker, everyone is welcome to join, collaborate, and build something amazing.",
    },
    {
      question: "Is there a registration fee for participation?",
      answer:
        "We don't want to monetize learning, community, and innovation. So, there is no participation/registration fee.",
    },
    {
      question: "What is the shortlisting procedure?",
      answer:
        "Based on the info provided in the registration form and a telephonic interview (if required), teams will be shortlisted for the hackathon.",
    },
    {
      question: "Can I start working on my hack before the event?",
      answer:
        "No. In the interest of fairness, students should not be working on their projects before HackBlitz begins and we do not allow participants to work on pre-existing projects. However, you can familiarize yourself with all the tools and technologies you intend to use beforehand.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h1>
        <ul className="space-y-4">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="border border-gray-700 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex flex-col items-start px-5 py-4 bg-gray-800 hover:bg-gray-700 focus:outline-none"
              >
                <div className="flex justify-between w-full items-center">
                  <span className="text-lg font-medium text-left">
                    {faq.question}
                  </span>
                  <span
                    className={`w-6 h-6 flex items-center justify-center rounded-full ${
                      openIndex === index
                        ? "bg-red-500 text-white"
                        : "bg-gray-600 text-gray-300"
                    }`}
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-5 py-4 bg-gray-900">
                  <p className="text-gray-300">{faq.answer}</p>
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