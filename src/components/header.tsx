interface HeaderProps {
  header: string;
  className?: string;
}

export const Header = ({ header, className }: HeaderProps) => (
  <div className="mb-12">
    <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white ${className}`}>
      {header}
    </h2>
    <div className="h-1 w-20 bg-brand-600 rounded-full mt-4"></div>
  </div>
);
