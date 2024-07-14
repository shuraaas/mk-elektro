import { IconProps } from './types';

export const Checkbox: React.FC<IconProps> = ({
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="10.2043"
        cy="11.0108"
        r="9.41935"
        stroke="#DE002B"
        stroke-width="1.56989"
      />
    </svg>
  );
};
