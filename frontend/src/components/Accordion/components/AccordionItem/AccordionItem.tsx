interface AccordionItemProps {
  index: number;
  selectedItem: number;
  handleItemClick: (index: number) => void;
  title: string;
  content: string;
}

const AccordionItem = ({
  index,
  selectedItem,
  handleItemClick,
  title,
  content,
}: Readonly<AccordionItemProps>) => {
  return (
    <div className="collapse collapse-arrow bg-base-300 mb-3">
      <input
        type="radio"
        name="my-accordion-faq"
        checked={index === selectedItem}
        onChange={() => handleItemClick(index)}
      />
      <div className="collapse-title md:text-xl sm:text-lg font-medium py-3 mx-1">
        {title}
      </div>
      <div className="collapse-content bg-base-200">
        <p className="p-3 sm:text-base">{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
