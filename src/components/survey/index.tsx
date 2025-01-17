import { useEffect, useState, ChangeEvent } from 'react';
import axios from 'axios';

import { Arrow, ArrowDown } from '../../assets/svg';

export const Survey = () => {
  const [data, setData] = useState<{
    id: number;
    text: string;
    choices: { id: number; text: string }[];
  } | null>(null);
  const [selectedOption, setSelectedOption] = useState(1);
  const [isAnswered, setIsAnswered] = useState(false);

  const getCookie = (name: string) => {
    let matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
          '=([^;]*)',
      ),
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  const postData = async () => {
    await axios.post('https://1002.мкэлектро.рф/api/answers/', {
      choice: selectedOption,
    });
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        'https://1002.мкэлектро.рф/api/surveys/',
      );

      const data = response.data[0].questions[0];

      setData(data);
    };

    getData();

    const cookie = getCookie('answer');
    if (cookie) {
      setIsAnswered(true);
    }
  }, []);

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(Number(event.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cookie = getCookie('answer');

    if (cookie) return;

    document.cookie = `answer=${selectedOption}; path=/; max-age=2592000`;
    setIsAnswered(true);
    postData();
    window.location.replace('https://74.mkelektro.ru/');
  };

  return (
    <div className="relative flex w-full flex-col items-center px-5 pb-[174px] pt-5">
      <Arrow
        className="absolute -top-[150px] right-0"
        width={400}
        height={650}
      />
      <Arrow
        className="absolute -bottom-[600px] left-0 rotate-180"
        width={900}
        height={1450}
      />
      <div className="relative mb-5 rounded-md bg-white/50 p-5 shadow-lg sm:mb-32 sm:bg-transparent sm:p-0 sm:text-black sm:shadow-none">
        <h2 className="text-center text-[30px] font-bold">
          Нам очень важно ваше мнение
        </h2>
        <ArrowDown className="absolute left-1/2 top-5 hidden -translate-x-1/2 transform sm:block" />
      </div>
      <div className="relative z-20 flex max-w-[500px] flex-col gap-5 rounded-lg bg-white p-5 shadow-lg sm:p-10">
        <h3 className="text-[31.4px] font-extrabold">Опрос</h3>
        <form className="flex flex-col gap-5 text-base" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            {data &&
              data.choices.map((option: any) => (
                <label
                  key={option.id}
                  className="flex cursor-pointer gap-2 text-[17.27px] font-semibold leading-[21.05px]"
                >
                  <input
                    type="radio"
                    value={option.id}
                    checked={selectedOption === option.id}
                    onChange={handleOptionChange}
                    className="cursor-pointer accent-[#DE002B]"
                  />
                  {option.text}
                </label>
              ))}
          </div>
          <button
            type="submit"
            className="self-center rounded-xl bg-[#DE002B] px-4 py-2 text-[22px] font-semibold leading-[26.82px] text-white transition hover:bg-red-700 disabled:opacity-50 disabled:hover:bg-[#DE002B]"
            disabled={isAnswered}
          >
            Проголосовать
          </button>
        </form>
      </div>
    </div>
  );
};
