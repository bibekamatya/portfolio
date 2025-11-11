import { useState } from "react";
import { useSwipeable } from "react-swipeable"; // Import swipeable hook
import TabButton from "./tabButton";
import TabContent from "./tabContent";
import { TabbedContentProps } from "../../interfaces";

const Tab = ({ categories }: TabbedContentProps) => {
  const [activeTab, setActiveTab] = useState(0);

  // Function to change tabs by swiping
  const handleSwipe = (delta: number) => {
    setActiveTab((prevTab) => {
      const newTab = prevTab + delta;
      if (newTab < 0) return categories.length - 1; // Wrap to last tab if swiping left on the first tab
      if (newTab >= categories.length) return 0; // Wrap to first tab if swiping right on the last tab
      return newTab;
    });
  };

  // Use swipeable hook to detect swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(1), // Swipe left to go to the next tab
    onSwipedRight: () => handleSwipe(-1), // Swipe right to go to the previous tab
    preventScrollOnSwipe: true,
    trackMouse: true, // This also allows desktop mouse swiping for testing
  });

  return (
    <div>
      <div className="flex justify-center mb-12">
        <div className="inline-flex flex-wrap gap-3 p-2 bg-gray-100 dark:bg-gray-950 rounded-2xl border border-transparent dark:border-gray-800">
          {categories.map((category, index) => (
            <TabButton
              key={index}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
              icon={category.icon}
              title={category.title}
            />
          ))}
        </div>
      </div>

      <div {...handlers}>
        <TabContent category={categories[activeTab]} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Tab;
