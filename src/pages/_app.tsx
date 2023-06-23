import type { AppProps } from 'next/app';
import '@/style/globals.css';
// eslint-disable-next-line import/order
import { Zen_Kaku_Gothic_New, Sawarabi_Gothic } from '@next/font/google';

const zen_gothic = Zen_Kaku_Gothic_New({ weight: ['900'], subsets: ['latin-ext'] }); // Subset added here
const sawarabi_gothic = Sawarabi_Gothic({ weight: ['400'], subsets: ['latin-ext'] }); // Subset added here

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <div>
    <Component {...pageProps} />
    <style jsx global>
      {`
        :root {
          --font-zen_gothic: ${zen_gothic.style.fontFamily};
          --font-sawarabi_gothic: ${sawarabi_gothic.style.fontFamily};
        }
      `}
    </style>
  </div>
);
export default App;
