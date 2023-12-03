import { ReactElement } from 'react';

type BannerProps = {
  pageName: string;
  message: string;
  createForm?: ReactElement;
};

function Banner({ pageName, message, createForm }: BannerProps) {
  return (
    <section className="bg-blue-300 rounded-lg flex flex-col justify-center items-center text-center p-8 mb-8">
      <h1 className="text-4xl font-bold mb-2">{pageName}</h1>
      <p className="text-lg">{message}</p>

      {createForm}
    </section>
  );
}

export default Banner;
