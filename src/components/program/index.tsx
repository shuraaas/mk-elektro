import {
  Cup,
  Grill,
  Lightning,
  Milwaukee,
  Arrow,
  TitleBgArrow,
} from '../../assets/svg';

export const Program = () => {
  return (
    <div className="relative w-full pt-20">
      <Arrow
        className="absolute -right-[100px] -top-[300px] z-10"
        width={400}
        height={650}
      />
      <Milwaukee className="absolute right-0 top-1/2 z-30 -translate-y-1/2" />
      <Cup className="absolute right-0 top-1/2 z-30 -translate-y-1/2" />
      <div className="relative">
        <TitleBgArrow className="absolute left-0 top-0 z-10" />
        <h1 className="relative z-20 block w-[600px] p-2 text-center text-[35px] font-semibold leading-[42.67px] text-white">
          Программа мероприятия
        </h1>
      </div>

      {/* <div className={styles.container}>
          <div className={clsx(styles.shape, styles.shapeBlack)}></div>
          <div className={clsx(styles.shape, styles.shapeRed)}></div>
        </div> */}

      <div className="relative z-20 flex w-[800px] flex-col gap-4 bg-white p-5 pl-10 text-[20px] font-semibold leading-[24.38px]">
        <div className="flex items-center gap-3">
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
      <div className="flex items-center gap-3 pl-10">
        <Grill />
        <p className="max-w-[600px] text-[20px] font-semibold">
          В день праздника будет организована зона барбекю с самыми вкусными
          обедами и презентами за покупку
        </p>
      </div>
    </div>
  );
};
