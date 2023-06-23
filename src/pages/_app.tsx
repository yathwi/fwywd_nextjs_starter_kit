import type { AppProps } from 'next/app';
import '@/style/globals.css';

// eslint-disable-next-line import/order
import { Zen_Kaku_Gothic_New } from '@next/font/google';

const zen_gothic = Zen_Kaku_Gothic_New({ weight: ['900'], subsets: ['cyrillic'] }); // Subset added here
const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <div>
    <Component {...pageProps} />
    <style jsx global>
      {`
          :root {
            --font-zen_gothic: ${zen_gothic.style.fontFamily};
           ¥
          }
        `}
    </style>
  </div>
);
export default App;
