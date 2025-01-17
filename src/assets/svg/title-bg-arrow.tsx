import { IconProps } from './types';

export const TitleBgArrow: React.FC<IconProps> = ({
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg
      width="667"
      height="63"
      viewBox="0 0 667 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.00012207 0H632.19L667 31.5L632.19 63H0.00012207V0Z"
        fill="#DE002B"
      />
      <path
        d="M0.00012207 0H608.309L642.309 31.5L608.309 63H0.00012207V0Z"
        fill="#33363B"
      />
    </svg>
  );
};
