import { IconProps } from './types';

export const Arrow: React.FC<IconProps> = ({
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg
      width="371"
      height="604"
      viewBox="0 0 371 604"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.96025e-05 302L311.769 40.4604L311.769 563.54L3.96025e-05 302Z"
        fill="#33363B"
      />
      <path
        d="M96.6592 302.005L373.734 74.5832L373.734 528.638L96.6592 302.005Z"
        fill="#DE002B"
      />
      <path
        d="M193.907 302.005L374.554 155.723L374.554 456.513L193.907 302.005Z"
        fill="#33363B"
      />
      <path
        d="M290.797 302.014L374.555 236.861L374.554 370.456L290.797 302.014Z"
        fill="#DE002B"
      />
    </svg>
  );
};
