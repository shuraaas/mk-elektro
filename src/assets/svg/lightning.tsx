import { IconProps } from './types';

export const Lightning: React.FC<IconProps> = ({
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg
      width="29"
      height="42"
      viewBox="0 0 29 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.89816 21.1389L20.2725 2.35581C20.5888 2.01382 21.1241 2.43237 20.8685 2.82185L11.8049 16.6331C11.6392 16.8856 11.8203 17.221 12.1223 17.221H25.9007C26.2354 17.221 26.4063 17.6227 26.1742 17.8639L5.32352 39.5227C5.00181 39.8569 4.47616 39.4324 4.73508 39.0475L15.956 22.3677C16.1257 22.1156 15.945 21.7762 15.6411 21.7762H3.17683C2.84572 21.7762 2.67332 21.3819 2.89816 21.1389Z"
        fill="#DE002B"
        stroke="#DE002B"
        strokeWidth="3.79604"
      />
    </svg>
  );
};
