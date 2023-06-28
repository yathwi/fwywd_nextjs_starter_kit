import Head from 'next/head';
import Image from 'next/legacy/image';
import { Footer } from '@/component/fotter';
import { PageHeader } from '@/component/pageHeader';

const Service = () => (
  <div>
    <Head>
      <title>事業内容</title>
    </Head>
    <PageHeader />
    <div className=' mx-auto mb-10 max-w-[90%] font-zen_gothic'>
      <div className=' text-center'>
        <h1 className=' mt-10 text-xl'>事業内容</h1>
        <p className=' mt-5'>不動産に関するサービスを提供しています。</p>
      </div>

      <div className=' mt-10'>
        <div className=' justify-center sm:flex'>
          <div className=' sm:mr-10'>
            <Image src='/img/realEstate.jpg' width={500} height={300} alt='service1' />
          </div>
          <div>
            <h2 className='mb-3 font-sawarabi text-lg sm:text-2xl'>01 不動産の売買・賃貸仲介</h2>
            <p className=' sm:text-lg'>
              売りたい・買いたい・貸したい・借りたい
              <br />
              すべて弊社にご相談ください。
            </p>
            <p className=' sm:text-lg'>需要と供給を繋ぎます。</p>
          </div>
        </div>

        <div className=' mt-16 justify-center sm:flex'>
          <div className=' hidden sm:block'>
            <h2 className='mb-3 font-sawarabi text-lg sm:text-2xl'>02 解体・地中埋設物撤去</h2>
            <p className=' sm:text-lg'>
              弊社提携の解体業事業者や <br />
              産業廃棄物処理業者により、
            </p>
            <p className=' sm:text-lg'>低コストな工事を実現いたします。</p>
          </div>
          <div className=' sm:ml-10'>
            <Image src='/img/construction.jpg' width={500} height={300} alt='service1' />
          </div>
          <div className=' block sm:hidden'>
            <h2 className='mb-3 font-sawarabi text-lg sm:text-2xl'>02 解体・地中埋設物撤去</h2>
            <p className=' sm:text-lg'>
              弊社提携の解体業事業者や <br />
              産業廃棄物処理業者により、
            </p>
            <p className=' sm:text-lg'>低コストな工事を実現いたします。</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
export default Service;
