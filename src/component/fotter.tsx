import Link from 'next/link';

export const Footer: React.FC = () => (
  <div className=' bg-primary-blue  py-5 text-white'>
    <div className=' mx-auto max-w-[90%] sm:max-w-[80%] '>
      <p className=' text-lg font-bold'>株式会社プロジェクトジャパン</p>
      <p>〒461-0005</p>
      <p>愛知県名古屋市東区一丁目10番29号</p>
      <p>TEL:052-972-7871 / FAX:052-972-7872</p>
      <p>愛知知事(2)第23317号</p>
      <div className=' mt-3 flex justify-between  text-sm font-light'>
        <Link href='/privacy-policy' className=' hover:underline'>
          プライバシーポリシー
        </Link>
        <p>@2019プロジェクトジャパン</p>
      </div>
    </div>
  </div>
);
