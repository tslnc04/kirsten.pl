export default function Button({
  size,
  className,
  children,
}: {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  children?: React.ReactNode;
}) {
  const sizedClasses = {
    xs: "px-2 py-1 text-sm",
    sm: "px-2 py-1 text-md",
    md: "px-2.5 py-1.5 text-md",
    lg: "px-3 py-2 text-md",
    xl: "px-3.5 py-2.5 text-md",
  };

  return (
    <button
      type="button"
      className={`${sizedClasses[size]} ${className} rounded font-medium text-fuchsia-600 shadow-sm hover:bg-fuchsia-500 hover:text-white outline outline-2 outline-fuchsia-600`}
    >
      {children}
    </button>
  );
}
