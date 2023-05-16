export const Button = ({ title, onClick, className, disabled, autoFocus }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      autoFocus={autoFocus}
    >
      {title}
    </button>
  );
};
