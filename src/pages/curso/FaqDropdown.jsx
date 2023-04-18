import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

function FaqDropdown({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md mb-4">
      <div
        className="flex justify-between items-center px-4 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <HiChevronDown
          className={`h-6 w-6 transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="px-4 py-2">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}


export default FaqDropdown
