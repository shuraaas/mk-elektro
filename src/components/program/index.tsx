import { useState } from 'react';
import { Modal } from '../../components';

import {
  Cup,
  Grill,
  Lightning,
  Milwaukee,
  Arrow,
  TitleBgArrow,
} from '../../assets/svg';

export const Program = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative w-full pt-20">
        <Arrow
          className="absolute -right-[80px] -top-[190px] z-10 hidden sm:block"
          width={700}
          height={900}
        />
        <div className="relative">
          <TitleBgArrow className="absolute left-0 top-0 z-10 w-full sm:w-[600px]" />
          <h1 className="relative z-20 block w-full p-2 text-center text-[24px] font-semibold leading-[42.67px] text-white sm:w-[600px] sm:text-[35px]">
            Программа мероприятия
          </h1>
        </div>

        <div className="relative z-20 flex w-full flex-col gap-4 bg-white p-5 text-[20px] font-semibold leading-[24.38px] sm:w-[800px] sm:pl-10">
          <Milwaukee className="absolute -right-[100px] top-[500px] z-30 sm:-right-[180px] sm:top-0" />
          <Cup className="absolute right-[150px] top-[520px] z-30 sm:right-20 sm:top-[200px]" />
          <div className="flex items-center gap-3">
            <Lightning className="min-w-[30px]" />
            <p>
              Демонстрация продукции от самых топовых производителей Milwaukee,
              Ресанта, Huter, System Electric, Denzel и др.;
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Lightning className="min-w-[30px]" />
            <p>Скидки до 20% на выделенные позиции ассортимента;</p>
          </div>
          <div className="flex items-center gap-2">
            <Lightning className="min-w-[30px]" />
            <p>Фирменные брендированные сувениры от производителей;</p>
          </div>
          <div className="flex items-center gap-2">
            <Lightning className="min-w-[30px]" />
            <div>
              <p>Конкурс «Удар Молнии» с ценными призами!</p>
              <p className="text-[22px] font-bold">
                1 место Гайковерт Milwaukee!!!{' '}
                <button
                  className="text-[15px] text-[#DE002B] underline transition hover:no-underline"
                  onClick={openModal}
                >
                  Условия участия
                </button>
              </p>
            </div>
          </div>
          <div className="z-30 flex items-center gap-3 rounded-md bg-white/50 sm:z-20 sm:bg-white">
            <Grill />
            <p className="max-w-[540px] text-[20px] font-semibold">
              В день праздника будет организована зона барбекю с самыми вкусными
              обедами и презентами за покупку
            </p>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Условия участия</h2>
        <p>Тут условия</p>
      </Modal>
    </>
  );
};
