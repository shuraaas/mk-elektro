import { IconProps } from './types';

export const LocationIcon: React.FC<IconProps> = ({
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg
      width="29"
      height="44"
      viewBox="0 0 29 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.6537 0.409119C1.00412 0.409109 -8.13758 14.6782 14.3571 43.2162C14.5041 43.4027 14.8003 43.4007 14.9446 43.212C36.8624 14.5522 28.3029 0.409129 14.6537 0.409119Z"
        fill="#DE002B"
      />
      <circle cx="14.5325" cy="15.5245" r="9.86078" fill="white" />
    </svg>
  );
};
