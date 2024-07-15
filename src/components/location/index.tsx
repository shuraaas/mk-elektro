import { LocationIcon } from '../../assets/svg';

export const Location = () => {
  return (
    <div className="z-20 flex items-center justify-between gap-5 px-10 pt-10">
      <div className="w-1/2">
        <p className="text-[40px] font-semibold">
          <span className="text-[45px]">Ждём вас</span>{' '}
          <span className="text-[45px]">13</span> августа в{' '}
          <span className="text-[45px]">10:00</span>{' '}
          <span className="text-[35px]">на нашем</span>
        </p>
        <span className="text-[40px] font-bold text-[#DE002B]">ФЕСТИВАЛЕ</span>

        <span className="text-[24px] font-semibold text-[#DE002B]">
          электротехнической продукции, электро- и садового инструмента
        </span>
        <div className="flex items-center gap-2 text-[23px] font-semibold leading-[28.04px]">
          <div className="flex items-center gap-2">
            <LocationIcon />
            <p>Клюквенная, 27а, с. Кременкуль</p>
          </div>
          <a
            href="#"
            className="w-[200px] text-[#DE002B] underline transition hover:no-underline"
          >
            Как доехать?
          </a>
        </div>
      </div>
      <img className="w-1/2 object-cover" src="/mkelektro.png" alt="" />
    </div>
  );
};
