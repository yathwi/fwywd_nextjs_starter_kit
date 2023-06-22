import { useRouter } from 'next/router';
const header = [
  { name: 'ホーム', path: '/' },
  { name: '会社概要', path: '/' },
  { name: '事業内容', path: '/' },
  { name: '物件紹介□', path: '/' },
  { name: 'お問い合せ', path: '/' },
];
export const PageHeader: React.FC = () => {
  const router = useRouter();
  return (
    <div className='bg-[#4d4d4d]  py-3 font-bold text-white'>
      <div className=' mx-auto max-w-[80%]'>
        <div className=' flex items-center justify-between'>
          <div onClick={() => router.push('/')} className=' text-xl'>
            PROJECT JAPAN
          </div>
          <nav className=' flex'>
            {header.map((item) => (
              <li
                key={item.name}
                onClick={() => router.push(item.path)}
                className=' list-none px-3'
              >
                {item.name}
              </li>
            ))}
          </nav>
          <div>
            <p className=' text-lg'>☎︎ 052-972-7871</p>
            <p className=' text-sm'>営業時間:平日10時~19時</p>
          </div>
        </div>
      </div>
    </div>
  );
};
