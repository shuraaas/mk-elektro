import { ChangeEvent, useState } from 'react';

import {
  Arrow,
  ArrowDown,
  Cup,
  Festival,
  Grill,
  Lightning,
  Location,
  Milwaukee,
} from '../../assets/svg';

// import styles from './app.module.scss';
// import { clsx } from 'clsx';

export const App = () => {
  const [selectedOption, setSelectedOption] = useState<string>('option1');

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    {
      value: 'option1',
      label: 'Я буду, мне интересно посмотреть, что у вас получится',
    },
    { value: 'option2', label: 'Я буду, мне интересен розыгрыш подарков' },
    { value: 'option3', label: 'Возможно буду, посмотрим по времени' },
    { value: 'option4', label: 'У меня не получится' },
    { value: 'option5', label: 'Не интересно' },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(selectedOption);
  };

  return (
    <div className="m-auto flex w-full flex-col items-center font-ftbFontMontserrat">
      <div>
        <Festival />
      </div>
      <div className="relative w-[900px] bg-white">
        <Milwaukee className="absolute right-0 top-1/2 -translate-y-1/2" />
        <Cup className="absolute right-0 top-1/2 -translate-y-1/2" />
        <h1 className="bg-[#33363B] p-2 text-[35px] font-semibold leading-[42.67px] text-white">
          Программа мероприятия
        </h1>

        {/* <div className={styles.container}>
          <div className={clsx(styles.shape, styles.shapeBlack)}></div>
          <div className={clsx(styles.shape, styles.shapeRed)}></div>
        </div> */}

        <div className="p-5 text-[20px] font-semibold leading-[24.38px]">
          <div className="flex items-center gap-2">
            <Lightning width={25} height={44} />
            <p>
              демонстрация продукции от самых топовых производителей Milwaukee,
              Ресанта, Huter, System Electric, Denzel и др.;
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Lightning />
            <p>скидки до 20% на выделенные позиции ассортимента;</p>
          </div>
          <div className="flex items-center gap-2">
            <Lightning />
            <p>фирменные брендированные сувениры от производителей;</p>
          </div>
          <div className="flex items-center gap-2">
            <Lightning />
            <div>
              <p>конкурс «Удар Молнии» с ценными призами!</p>
              <p className="text-[22px] font-bold">
                1 место Гайковерт Milwaukee!!!{' '}
                <a
                  href="#"
                  className="text-[15px] text-[#DE002B] underline transition hover:no-underline"
                >
                  Условия участия
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Grill />
          <p className="max-w-[600px] text-[20px] font-semibold">
            В день праздника будет организована зона барбекю с самыми вкусными
            обедами и презентами за покупку
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 bg-white p-5 px-10">
        <div className="w-1/2">
          <p className="text-[40px] font-semibold">
            <span className="text-[45px]">Ждём вас</span>{' '}
            <span className="text-[45px]">13</span> августа в{' '}
            <span className="text-[45px]">10:00</span>{' '}
            <span className="text-[35px]">на нашем</span>
          </p>
          <span className="text-[40px] font-bold text-[#DE002B]">
            ФЕСТИВАЛЕ
          </span>

          <span className="text-[24px] font-semibold text-[#DE002B]">
            электротехнической продукции, электро- и садового инструмента
          </span>
          <div className="flex items-center gap-2 text-[23px] font-semibold leading-[28.04px]">
            <div className="flex items-center gap-2">
              <Location />
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
        <img className="w-1/2" src="/mkelektro.png" alt="" />
      </div>
      <div className="relative flex w-full flex-col items-center pb-[174px]">
        <Arrow className="absolute -top-10 right-0" />
        <Arrow className="absolute bottom-0 left-0 rotate-180" />
        <div className="relative mb-32">
          <h2 className="text-[30px] font-bold">Нам очень важно ваше мнение</h2>
          <ArrowDown className="absolute left-1/2 top-5 -translate-x-1/2 transform" />
        </div>
        <div className="relative z-20 flex max-w-[500px] flex-col gap-5 bg-white p-10">
          <h3 className="text-[31.4px] font-extrabold">Опрос</h3>
          <form
            className="flex flex-col gap-5 text-base"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-3">
              {options.map(option => (
                <label
                  key={option.value}
                  className="text-[17.27px] font-semibold leading-[21.05px]"
                >
                  <input
                    type="radio"
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={handleOptionChange}
                  />
                  {option.label}
                </label>
              ))}
            </div>
            <button
              type="submit"
              className="self-center rounded-[10px] bg-[#DE002B] px-4 py-2 text-[22px] font-semibold leading-[26.82px] text-white transition hover:bg-red-700"
            >
              Проголосовать
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
