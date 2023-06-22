import Head from 'next/head';
import { Footer } from '@/component/fotter';
import { PageHeader } from '@/component/pageHeader';

const Company: React.FC = () => (
  <div className=' '>
    <Head>
      <title>会社概要</title>
    </Head>
    <PageHeader />
    <h1 className=' mt-5 text-center text-lg '>会社概要</h1>
    <div className=' mt-5 text-center'>
      <p>
        プロジェクトジャパンは不動産の総合コンサルタントとして
        <br />
        お客様の不動産パートナーになれるよう日々精進しております。
      </p>
      <p>土地建設の売買から賃貸物件のご紹介などご要望に応じて最善な提案をします。</p>
    </div>
    <div className=' my-10 flex justify-center'>
      <thead className=' mx-auto border'>
        <tr className=''>
          <th className=' w-60 border-b border-b-black bg-[#4d4d4d] py-5 text-white'>会社名</th>
          <td className='w-[500px]  border-b pl-5'>株式会社プロジェクトジャパン</td>
        </tr>
        <tr className=''>
          <th className=' w-60 border-b border-b-black bg-[#4d4d4d] py-5 text-white'>代表取締役</th>
          <td className='w-[500px]  border-b pl-5'>鈴木琢真</td>
        </tr>
        <tr>
          <th className=' w-60 border-b border-b-black bg-[#4d4d4d] py-5 text-white'>所在地</th>
          <td className='w-[500px]  border-b pl-5'>
            <p>愛知県名古屋市東区一丁目10番29号</p>
            <p>パークサイドビル栄9A</p>
            <div>Googleマップ</div>
          </td>
        </tr>
        <tr className=''>
          <th className=' w-60 border-b border-b-black bg-[#4d4d4d] py-5 text-white'>電話番号</th>
          <td className='w-[500px]  border-b pl-5'>052-972-7871 / 052-972-7872</td>
        </tr>
        <tr className=''>
          <th className=' w-60 border-b border-b-black bg-[#4d4d4d] py-5 text-white'>設立年月</th>
          <td className='w-[500px]  border-b pl-5'>1993年7月</td>
        </tr>
        <tr className=''>
          <th className=' w-60 border-b border-black bg-[#4d4d4d] py-5 text-white'>事業内容</th>
          <td className='w-[500px]  border-b pl-5'>不動産売買、賃貸、仲介、賃貸管理</td>
        </tr>
        <tr className=''>
          <th className=' w-60 border-b border-black bg-[#4d4d4d] py-5 text-white'>資本金</th>
          <td className='w-[500px]  border-b pl-5'>1,000万円</td>
        </tr>
        <tr className=''>
          <th className=' w-60 border-b border-black bg-[#4d4d4d] py-5 text-white'>免許番号</th>
          <td className='w-[500px]  border-b pl-5'>愛知県知事(2)第23317号</td>
        </tr>
        <tr className=''>
          <th className=' w-60 border-b border-black bg-[#4d4d4d] py-5 text-white'>所属/加盟</th>
          <td className='w-[500px]  pl-5'>
            <p>（公社）全日本不動産協会</p>
            <p>（公社）全日本不動産保証協会</p>
            <p>東海不動産公正取引協議会</p>
          </td>
        </tr>
      </thead>
    </div>
    <Footer />
  </div>
);
export default Company;
