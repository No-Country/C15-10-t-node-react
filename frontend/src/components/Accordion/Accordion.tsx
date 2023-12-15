import { useState } from "react";
import AccordionItem from "./components/AccordionItem/AccordionItem";

interface FaqItem {
  title: string;
  content: string;
}

interface AccordionProps {
  FaqData: FaqItem[];
}

const Accordion = ({ FaqData }: Readonly<AccordionProps>) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <div className="md:mx-6 mx-4">
      {FaqData.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          selectedItem={selectedItem}
          handleItemClick={handleItemClick}
          {...item}
        />
      ))}
    </div>
  );
};

export default Accordion;
