import { LocationIcon } from '../../assets/svg';

export const Location = () => {
  return (
    <div className="z-20 flex flex-col items-center justify-between gap-5 px-5 pt-10 sm:flex-row sm:px-10">
      <div className="w-full sm:w-1/2">
        <p className="text-[40px] font-semibold">
          <span className="text-[45px]">Ждём вас</span>
          <br />
          <span className="text-[45px]">13</span> августа в{' '}
          <span className="text-[45px]">10:00</span> <br />
          <span className="text-[35px]">на нашем</span>{' '}
          <span className="text-[40px] font-bold text-[#DE002B]">
            ФЕСТИВАЛЕ
          </span>
        </p>
        <p className="text-[24px] font-semibold text-[#DE002B]">
          электротехнической продукции, электро- и садового инструмента
        </p>
        <div className="flex flex-col items-center gap-2 pt-5 text-[23px] font-semibold leading-[28.04px] sm:flex-row">
          <div className="flex items-center gap-2">
            <LocationIcon />
            <p>Клюквенная, 27а, с. Кременкуль</p>
          </div>
          <a
            href="https://go.2gis.com/v6igr"
            className="w-full text-center text-[#DE002B] underline transition hover:no-underline sm:w-[200px]"
            target="_blank"
          >
            Как доехать?
          </a>
        </div>
      </div>
      <img
        className="w-full object-cover px-5 sm:w-1/2 sm:p-0"
        src="/mkelektro.png"
        alt="mkelektro"
      />
    </div>
  );
};
