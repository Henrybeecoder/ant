import { faqData } from "@/utils/data";
import { newFaqData } from "@/utils/data";
import FAQItem from "../faq-item/page";

interface FAQSectionProps {
  static?: boolean;
}

const FAQSection: React.FC<FAQSectionProps> = ({ static: isStatic }) => {
  const dataToUse = isStatic ? newFaqData : faqData;

  return (
    <div className="mt-40 mb-60">
      <p className="text-center lg:text-[1.6rem] text-[1.3rem] lg:leading-0 leading-8 mb-4 lg:mb-10">
        Frequently asked questions
      </p>
      {dataToUse.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </div>
  );
};

export default FAQSection;