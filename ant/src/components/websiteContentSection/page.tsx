import React from 'react';

interface WebsiteContentSectionProps {
  header?: React.ReactNode;
  children: React.ReactNode;
}

const WebsiteContentSection: React.FC<WebsiteContentSectionProps> = ({ header, children }) => {
  return (
    <div className="min-h-[40px] urbanist">
      <p className="2xl:text-[1.5rem] text-[#FFFFFF] font-[500] text-[1.1rem]">{header}</p>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};

export default WebsiteContentSection;
