import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus} from 'react-feather';

interface FAQProps {
    faq: {
        question: string;
        answer: string;
    };
}

const FAQItem: React.FC<FAQProps> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div
            className={`relative font-medium my-4 cursor-pointer py-4 px-5 rounded-sm`}
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: '#20202080' }}
        >
            <div 
                className="faq-question flex flex-row justify-between items-center group"
            >
                <h3
                    className={`text-white text-[1rem] group-hover:text-[#FF4733] transition-colors duration-300`}
                >
                    {faq.question}
                </h3>
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                   
                        <Plus color="#FF4733" />
                  
                </motion.div>
            </div>

            {/* Borders */}
            <span
                className={`absolute top-0 left-0 w-1 h-1 ${
                    isOpen ? 'border-t-[#FF4733] border-l-[#FF4733]' : 'border-t-[#b1b1b1] border-l-[#b1b1b1]'
                } border-t-[0.5px] border-l-[0.5px] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out`}
            ></span>
            <span
                className={`absolute bottom-0 left-0 w-1 h-1 ${
                    isOpen ? 'border-b-[#FF4733] border-l-[#FF4733]' : 'border-b-[#b1b1b1] border-l-[#b1b1b1]'
                } border-b-[0.5px] border-l-[0.5px] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out`}
            ></span>
            <span
                className={`absolute top-0 right-0 w-1 h-1 ${
                    isOpen ? 'border-t-[#FF4733] border-r-[#FF4733]' : 'border-t-[#b1b1b1] border-r-[#b1b1b1]'
                } border-t-[0.5px] border-r-[0.5px] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out`}
            ></span>
            <span
                className={`absolute bottom-0 right-0 w-1 h-1 ${
                    isOpen ? 'border-b-[#FF4733] border-r-[#FF4733]' : 'border-b-[#b1b1b1] border-r-[#b1b1b1]'
                } border-b-[0.5px] border-r-[0.5px] group-hover:w-full group-hover:h-full transition-all duration-300 ease-out`}
            ></span>

            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ height: { duration: 0.5 }, opacity: { duration: 0.3 } }}
                className="overflow-hidden"
            >
                {isOpen && (
                    <p className="text-[#FFFFFFB2] mt-4 pt-4 border-t-[0.5px] leading-5 border-[#FF4733] text-[0.9rem]">
                        {faq.answer}
                    </p>
                )}
            </motion.div>
        </div>
    );
};

export default FAQItem;
