import Head from 'next/head';
import { Footer } from '@/component/fotter';
import MapContainer from '@/component/googlemap';
import { PageHeader } from '@/component/pageHeader';

const Company: React.FC = () => (
  <div className=''>
    <Head>
      <title>会社概要</title>
    </Head>
    <PageHeader />
    <div className=' mx-auto max-w-[95%]'>
      <h1 className=' mt-10 text-center text-xl '>会社概要</h1>
      <div className=' mt-5 text-sm sm:text-center  sm:text-base'>
        <p>
          プロジェクトジャパンは不動産の総合コンサルタントとして
          <br />
          お客様の不動産パートナーになれるよう日々精進しております。
        </p>
        <p>土地建設の売買から賃貸物件のご紹介などご要望に応じて最善な提案をします。</p>
      </div>
      <div className=' my-10 flex justify-center'>
        <table className='mx-auto border'>
          <tbody>
            <tr>
              <th className='w-[35%] border-b border-black bg-primary-green py-5 text-white sm:w-60'>
                会社名
              </th>
              <td className='border-b pl-5 sm:w-[650px]'>株式会社プロジェクトジャパン</td>
            </tr>
            <tr>
              <th className='w-[35%] border-b border-black bg-primary-green py-5 text-white sm:w-60'>
                代表取締役
              </th>
              <td className='border-b pl-5 sm:w-[650px]'>鈴木琢真</td>
            </tr>
            <tr>
              <th className='w-[35%] border-b border-black bg-primary-green py-5 text-white sm:w-60'>
                所在地
              </th>
              <td className='border-b px-5 pb-3 sm:w-[650px]'>
                <p>愛知県名古屋市東区一丁目10番29号</p>
                <p>パークサイドビル栄9A</p>
                <div>Googleマップ</div>
                <MapContainer />
              </td>
            </tr>
            <tr>
              <th className='w-[35%] border-b border-black bg-primary-green py-5 text-white sm:w-60'>
                電話番号
              </th>
              <td className='border-b pl-5 sm:w-[650px]'>052-972-7871 / 052-972-7872</td>
            </tr>
            <tr>
              <th className='w-[35%] border-b border-black bg-primary-green py-5 text-white sm:w-60'>
                設立年月
              </th>
              <td className='border-b pl-5 sm:w-[650px]'>1993年7月</td>
            </tr>
            <tr>
              <th className='w-[35%] border-b border-black bg-primary-green py-5 text-white sm:w-60'>
                事業内容
              </th>
              <td className='border-b pl-5 sm:w-[650px]'>不動産売買、賃貸、仲介、賃貸管理</td>
            </tr>
            <tr>
              <th className='w-[35%] border-b border-black bg-primary-green py-5 text-white sm:w-60'>
                資本金
              </th>
              <td className='border-b pl-5 sm:w-[650px]'>1,000万円</td>
            </tr>
            <tr>
              <th className='w-[35%] border-b border-black bg-primary-green py-5 text-white sm:w-60'>
                免許番号
              </th>
              <td className='border-b pl-5 sm:w-[650px]'>愛知県知事(2)第23317号</td>
            </tr>
            <tr>
              <th className='borsm:w-[35%] der-b w-60 border-black bg-primary-green py-5 text-white'>
                所属/加盟
              </th>
              <td className='pl-5 sm:w-[650px]'>
                <p>（公社）全日本不動産協会</p>
                <p>（公社）全日本不動産保証協会</p>
                <p>東海不動産公正取引協議会</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
  </div>
);
export default Company;
