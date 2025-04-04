import { faqData } from "@/utils/data";

import FAQItem from "../faq-item/page";

const FAQSection = () => {
  return (
    <div className="mt-40">
      <p className="text-center text-[1.6rem] lg:leading-0 leading-8 mb-4 lg:mb-10">
        Frequently asked questions
      </p>
      {faqData.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
     
    </div>
  );
};

export default FAQSection;
