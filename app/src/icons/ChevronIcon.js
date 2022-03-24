const ChevronIcon = ({
  width = 14,
  height = 14,
  stroke = "#8F959C",
  strokeWidth = 1.5,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.8125 3.0625L9.1875 7.4375L4.8125 11.8125"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevronIcon;
