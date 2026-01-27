// ListWithTitle.tsx
import React from "react";
import Icon from "./Icons";

interface ListWithTitleProps {
  title: string;
  items: string[];
  icon?: string;
}

const ListWithTitle: React.FC<ListWithTitleProps> = ({
  title,
  items,
  icon = "arrowRight",
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300"
          >
            {icon && (
              <Icon
                icon={icon}
                className="mt-1 flex-shrink-0 text-brand-600 dark:text-brand-400"
              />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListWithTitle;
