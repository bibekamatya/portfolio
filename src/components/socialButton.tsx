import Icon from "./Icons";

const socialLinks = [
  { icon: "github", url: "https://github.com/bibekamatya", title: "GitHub" },
  {
    icon: "linkedIn",
    url: "https://www.linkedin.com/in/hom-narayan-amatya/",
    title: "LinkedIn",
  },
];

const SocialButtons = () => {
  const handleResumeClick = async () => {
    try {
      const cvModule = await import("../assets/CV-Hom Narayan Amatya.pdf");
      window.open(cvModule.default, "_blank");
    } catch (error) {
      console.error("Error loading CV:", error);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <button
        onClick={handleResumeClick}
        className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
      >
        <Icon icon="fileDownload" className="w-5 h-5" />
        Download Resume
      </button>
      {socialLinks.map((link, index) => (
        <a
          href={link.url}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          title={link.title}
          className="w-12 h-12 bg-gray-100 dark:bg-gray-900 hover:bg-brand-600 dark:hover:bg-brand-600 text-gray-700 dark:text-white hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
        >
          <Icon icon={link.icon} className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialButtons;
