import { IconProps } from './types';

export const ArrowDown: React.FC<IconProps> = ({
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg
      width="175"
      height="100"
      viewBox="0 0 175 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M87.792 100L12.2695 48.8764L163.314 48.8765L87.792 100Z"
        fill="#DE002B"
      />
      <path
        d="M87.7954 84.0575L12.273 32.9338L163.318 32.9339L87.7954 84.0575Z"
        fill="#33363B"
      />
      <path
        d="M87.7942 68.1648L12.2717 17.0412L163.317 17.0412L87.7942 68.1648Z"
        fill="white"
      />
    </svg>
  );
};
