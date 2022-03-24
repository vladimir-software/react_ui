const ViewDocumentsIcon = ({
  width = 16,
  height = 16,
  stroke = "#8F959C",
  strokeWidth = 1.5,
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
        d="M7 3H3V7H7V3Z"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 3H9V7H13V3Z"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 9H3V13H7V9Z"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 9H9V13H13V9Z"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ViewDocumentsIcon;
