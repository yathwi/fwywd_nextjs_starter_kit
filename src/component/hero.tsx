import Image from 'next/image';
import { useRouter } from 'next/router';
import { use } from 'react';
import { Info } from './info';

const items = [
  { name: '会社概要', path: 'company' },
  { name: '事業内容', path: 'service' },
  {
    name: '物件紹介□',
    path: 'https://asp.athome.jp/065007/shumoku?direct_search=true&shubetsu=baibai',
  },
  { name: 'お問い合せ', path: 'contact' },
];

export const Hero: React.FC = () => {
  const router = useRouter();
  return (
    <div className=' h-[650px] bg-hero-pc bg-cover bg-center'>
      <div className=' relative'>
        <div className=' relative z-10 ml-[10%] flex pt-20 sm:pt-32'>
          <h1 className=' hidden text-[48px] font-bold text-shadow-white sm:block'>
            {/* 不動産の売買・土地の仲介
            <br />
            不動産のご相談
            <br />
            承ります  */}
            <Image
              src='/img/heroText.png'
              width={600}
              height={300}
              alt='不動産の売買・土地の仲介不動産のご相談承ります'
            />
          </h1>
          <h1 className=' block text-[48px] font-bold text-shadow-white sm:hidden'>
            {/* 不動産の売買・土地の仲介
            <br />
            不動産のご相談
            <br />
            承ります  */}
            <Image
              src='/img/heroTextSm.png'
              width={320}
              height={250}
              alt='不動産の売買・土地の仲介不動産のご相談承ります'
            />
          </h1>

          <div></div>
        </div>
      </div>
      {/* <div className=' flex h-auto justify-center py-7'>
        <div className=' flex'>
          {items.map((item) => (
            <button
              key={item.name}
              onClick={() => router.push(item.path)}
              className=' mx-5 my-2 h-20 w-72 rounded-lg border border-[#333333] bg-[#808080] text-center text-2xl font-bold text-white hover:opacity-80'
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>{' '}
      <Info /> */}
      <div></div>
    </div>
  );
};
