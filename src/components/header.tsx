interface HeaderProps {
  header: string;
  className?: string;
}

export const Header = ({ header, className }: HeaderProps) => (
  <div className="mb-8">
    <h2
      className={`text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white ${className}`}
    >
      {header}
    </h2>
    <div className="h-1 w-16 bg-brand-600 rounded-full mt-3"></div>
  </div>
);
