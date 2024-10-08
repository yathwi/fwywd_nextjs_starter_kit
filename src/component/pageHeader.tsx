import { useRouter } from 'next/router';
import { useState } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';
const header = [
  { name: 'ホーム', path: '/' },
  { name: '会社概要', path: 'company' },
  { name: '事業内容', path: 'service' },
  {
    name: '物件紹介',
    path: 'https://asp.athome.jp/065007/shumoku?direct_search=true&shubetsu=baibai',
  },
  { name: 'お問い合せ', path: 'contact' },
];
export const PageHeader: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className=' bg-primary-blue  py-3 font-light text-white  '>
        <div className=' mx-auto hidden sm:block sm:max-w-[80%]'>
          <div className=' flex items-center justify-between'>
            <div onClick={() => router.push('/')} className=' cursor-pointer font-crossten text-xl'>
              PROJECT JAPAN
            </div>
            <nav className=' flex'>
              {header.map((item, i: number) => (
                <li
                  key={item.name}
                  onClick={() => router.push(item.path)}
                  className=' flex cursor-pointer list-none items-center px-3 hover:underline'
                >
                  {item.name}
                  {i === 3 && (
                    <label>
                      <BiLinkExternal size={20} />
                    </label>
                  )}
                </li>
              ))}
            </nav>
            <div>
              <p className=' text-lg'>☎︎ 052-972-7871</p>
              <p className=' text-sm'>営業時間:平日10時~19時</p>
            </div>
          </div>
        </div>

        <div className=' sm:hidden '>
          <div className='mx-auto flex max-w-[90%] items-center justify-between'>
            <div onClick={() => router.push('/')} className=' cursor-pointer font-crossten text-xl'>
              PROJECT JAPAN
            </div>
            <div onClick={() => setIsMenuOpen(true)}>
              <RxHamburgerMenu size={35} />
            </div>
          </div>
          {isMenuOpen && (
            <div className=' absolute top-0 z-20 w-full bg-white'>
              <div onClick={() => setIsMenuOpen(false)} className=' absolute right-5 top-2'>
                <RxHamburgerMenu size={35} color='black' />
              </div>
              <nav className=' '>
                {header.map((item, i: number) => (
                  <li
                    key={item.name}
                    onClick={() => router.push(item.path)}
                    className=' flex cursor-pointer list-none items-center border-b py-3 pl-5 text-black hover:underline'
                  >
                    {item.name}
                    {i === 3 && (
                      <label>
                        <BiLinkExternal size={20} />
                      </label>
                    )}
                  </li>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
