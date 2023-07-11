import Head from 'next/head';
import { useRouter } from 'next/router';
import { BiLinkExternal } from 'react-icons/bi';
import { Footer } from '@/component/fotter';
import { Hero } from '@/component/hero';
import { Info } from '@/component/info';
import { PageHeader } from '@/component/pageHeader';

const items = [
  { name: '会社概要', path: 'company' },
  { name: '事業内容', path: 'service' },
  {
    name: '物件紹介□',
    path: 'https://asp.athome.jp/065007/shumoku?direct_search=true&shubetsu=baibai',
  },
  { name: 'お問い合せ', path: 'contact' },
];

const Home: React.FC = () => {
  const router = useRouter();
  return (
    <div className=' font-zen_gothic'>
      <Head>
        <title>株式会社プロジェクトジャパン</title>
      </Head>
      <div className=''>
        <PageHeader />
        <Hero />
        <div className=' -mt-72 flex h-auto justify-center py-7 sm:-mt-60'>
          <div className=' grid grid-cols-2 sm:flex'>
            {items.map((item, i: number) => (
              <button
                key={item.name}
                onClick={() => router.push(item.path)}
                className=' mx-5 my-2 h-16 w-36 rounded-lg border border-white bg-primary-green px-5 text-center font-bold text-white hover:bg-[#48A80E] sm:h-20 sm:w-60 sm:text-2xl '
              >
                {item.name}{' '}
                {i === 3 && (
                  <label>
                    <BiLinkExternal size={20} />
                  </label>
                )}
              </button>
            ))}
          </div>
        </div>
        <Info />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
