const FilterIcon = ({
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
        d="M2.63086 3H13.3703C13.4672 3 13.562 3.02814 13.6431 3.08099C13.7243 3.13384 13.7884 3.20914 13.8276 3.29772C13.8668 3.38631 13.8794 3.48437 13.8639 3.57999C13.8484 3.6756 13.8054 3.76466 13.7403 3.83634L9.63061 8.35697C9.54694 8.449 9.50058 8.56892 9.50058 8.6933V12.2324C9.50058 12.3147 9.48026 12.3958 9.44142 12.4683C9.40258 12.5409 9.34642 12.6028 9.27793 12.6484L7.27793 13.9818C7.20263 14.032 7.11512 14.0608 7.02473 14.0652C6.93433 14.0695 6.84445 14.0493 6.76466 14.0066C6.68486 13.9639 6.61816 13.9003 6.57165 13.8227C6.52515 13.745 6.50058 13.6562 6.50058 13.5657V8.6933C6.50058 8.56892 6.45422 8.449 6.37055 8.35697L2.26089 3.83634C2.19573 3.76466 2.15279 3.6756 2.1373 3.57999C2.1218 3.48437 2.13442 3.38631 2.1736 3.29772C2.21279 3.20914 2.27686 3.13384 2.35804 3.08099C2.43921 3.02814 2.53399 3 2.63086 3V3Z"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default FilterIcon;