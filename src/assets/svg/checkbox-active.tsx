import { IconProps } from './types';

export const CheckboxActive: React.FC<IconProps> = ({
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="10.2043"
        cy="10.215"
        r="9.41935"
        stroke="#DE002B"
        stroke-width="1.56989"
      />
      <circle
        cx="10.2044"
        cy="10.2151"
        r="6.27957"
        fill="#DE002B"
        stroke="#DE002B"
        stroke-width="1.56989"
      />
    </svg>
  );
};
