const PlusIcon = ({
  width = 16,
  height = 16,
  stroke = "#8F959C",
  strokeWidth = 1.3,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 8H13.5"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 2.5V13.5"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
