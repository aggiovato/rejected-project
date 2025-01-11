type CustomButtonProps = {
  type: "primary" | "secondary" | "accent" | "danger" | "muted";
  children: React.ReactNode;
  onClick: () => void;
};

const CustomButton = ({ type, children, onClick }: CustomButtonProps) => {
  const baseClasses =
    "w-[90px] px-6 py-1 rounded-lg font-semibold transition focus:outline-none";

  const typeClasses = {
    primary: "bg-primary-500 text-accent-100 hover:bg-primary-400",
    secondary: "bg-secondary-500 text-darkPurple-100 hover:bg-secondary-400",
    accent: "bg-accent-300 text-darkPurple-900 hover:bg-accent-600",
    danger: "bg-red-700 text-accent-100 hover:bg-red-500",
    muted: "bg-muted-500 text-accent-100 hover:bg-muted-400",
  };

  const finalClasses = `${baseClasses} ${
    typeClasses[type] || typeClasses.primary
  }`;

  return (
    <button className={finalClasses} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default CustomButton;
