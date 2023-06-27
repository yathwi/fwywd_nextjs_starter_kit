import Head from 'next/head';
import { useRouter } from 'next/router';
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
        <div className=' -mt-40 flex h-auto justify-center py-7'>
          <div className=' flex'>
            {items.map((item) => (
              <button
                key={item.name}
                onClick={() => router.push(item.path)}
                className=' mx-5 my-2 h-20 w-72 rounded-lg border border-white bg-primary-green text-center text-2xl font-bold text-white hover:bg-[#48A80E] '
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>{' '}
        <Info />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
