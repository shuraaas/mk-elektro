import { Festival, Arrow } from '../../assets/svg';
import { Program, Survey, Location } from '../';

export const App = () => {
  return (
    <div className="m-auto flex w-full flex-col items-center overflow-hidden font-ftbFontMontserrat">
      <div className="absolute left-0 right-0 top-0 w-full">
        <Arrow
          className="absolute -left-[80px] -top-[170px] rotate-180"
          width={200}
          height={400}
        />
        <Festival className="relative left-1/2 z-20 -translate-x-1/2" />
      </div>
      <Program />
      <Location />
      <Survey />
    </div>
  );
};
