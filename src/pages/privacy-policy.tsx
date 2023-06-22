import Head from 'next/head';
import { Footer } from '@/component/fotter';
import { PageHeader } from '@/component/pageHeader';

const PrivacyPolicy = () => (
  <div>
    <Head>
      <title>プライバシーポリシー</title>
    </Head>
    <PageHeader />
    <div className=' mx-auto my-20 max-w-[90%] '>
      <h1 className=' text-xl font-bold'>個人情報保護方針</h1>
      <p className=' mt-5'>
        株式会社プロジェクトジャパン(以下、「当社」といいます。)は、当Webサイトをご利用になる皆様のプライバシーを最大限に尊重することをお約束いたします。皆様のプライバシーの権利を保護するために、当社のWEBサイトにおけるプライバシーポリシーを以下のとおり定め、これに基づいて皆様の個人情報を厳重に取り扱います。
      </p>
      <div className=' mt-10'>
        <h2 className=' mt-5 text-lg font-bold'>皆様の個人情報の範囲</h2>
        <p className=' mt-5'>
          氏名や住所、電話番号、電子メールアドレス、その他必要に応じてお聞きする情報など、皆様個人を識別できる情報を対象といたします。(以下、「個人情報」といいます。)
        </p>
      </div>

      <div className=' mt-10'>
        <h2 className=' mt-5 text-lg font-bold'>プライバシーポリシーが適用される当社のWEBサイト</h2>
        <p className=' mt-5'>
          当社が所有する次のドメイン内全てのWEBサイトに適用されます。(以下、「個人情報」といいます。)
        </p>
        <p className=' mt-5'>http://project-japan.co.jp/</p>
      </div>

      <div className=' mt-10'>
        <h2 className=' mt-5 text-lg font-bold'>個人情報の第三者提供</h2>
        <p className=' pt-5 font-bold'>
          当社は、皆様の個人情報を適切に管理し、次の場合を除き第三者に開示、ならびに提供いたしません。{' '}
        </p>
        <p className=''>皆様の同意を得た場合</p>
        <p className=''>
          利用目的の達成に必要な範囲において、個人情報の取り扱いを協力会社、業務委託会社に委託する場合（ご請求いただいた資料の発送やご購入いただいた資材の発送を運送業者に委託する場合
          等）
        </p>
        <p className=''>皆様個人の特定が不可能な状態で、統計的なデータとして利用する場合</p>
        <p className=''>法令等に基づき、個人情報を要求された場合</p>
      </div>

      <div className=' mt-10'>
        <h2 className=' mt-5 text-lg font-bold'>個人情報の利用目的と収集方法</h2>
        <p className=' mt-5'>
          当社は、皆様に個人情報のご提供をお願いする際に明示した利用目的、または次の利用目的のために皆様の個人情報を収集させていただきます。各種お問い合わせの対応や、サービスの向上などを目的に、問い合わせフォームまたは電子メールや電話、書面等にて、皆様の情報をご提供いただいております。(以下、「個人情報」といいます。)
        </p>
      </div>

      <div className=' mt-10'>
        <h2 className=' mt-5 text-lg font-bold'>内容の変更</h2>
        <p className=' mt-5'>
          本文書の内容は予告なく変更される場合があります。その場合の変更内容につきましては、当サイトに表示した時点より、その内容が適用されるものとします。(以下、「個人情報」といいます。)
        </p>
      </div>

      <div className=' mt-10'>
        <h2 className=' mt-5 text-lg font-bold'>リンクされている他のサイトについて</h2>
        <p className=' mt-5'>
          当社のWEBサイトにリンクされている他のWEBサイトにおける皆様の個人情報の保護については、当社が責任を負うものではありません。
          (以下、「個人情報」といいます。)
        </p>
      </div>
    </div>
    <Footer />
  </div>
);
export default PrivacyPolicy;
