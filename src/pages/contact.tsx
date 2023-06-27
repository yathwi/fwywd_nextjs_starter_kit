import React, { useState } from 'react';
import { Footer } from '@/component/fotter';
import { PageHeader } from '@/component/pageHeader';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [details, setDetails] = useState('');

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <PageHeader />
      <div>
        <div className='text-center'>
          <h1 className=' mt-10 text-xl'>お問い合わせ</h1>
          <p className=' mt-5'>
            お問合せ内容の確認後、担当者よりご連絡させていただきます。
            <br />
            各項目をご入力いただき送信ボタンをクリックしてください。
          </p>
        </div>
        <div className='my-10 flex justify-center'>
          <form onSubmit={handleFormSubmit}>
            <div className='mt-3 flex items-center'>
              <p className='mr-5 w-40 text-right'>お名前 (必須)</p>
              <input
                type='text'
                value={name}
                className='h-10 w-[500px] border px-2'
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className='mt-3 flex items-center'>
              <p className='mr-5 w-40 text-right'>メールアドレス (必須)</p>
              <input
                type='email'
                value={email}
                className='h-10 w-[500px] border px-2'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className='mt-3 flex items-center'>
              <p className='mr-5 w-40 text-right'>お電話番号 (必須)</p>
              <input
                type='tel'
                value={phone}
                className='h-10 w-[500px] border px-2'
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className='mt-3 flex items-center'>
              <p className='mr-5 w-40 text-right'>ご住所</p>
              <input
                type='text'
                value={address}
                className='h-10 w-[500px] border px-2'
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className='mt-3 flex items-center'>
              <p className='mr-5 w-40 text-right'>お問い合わせ内容</p>
              <select
                value={inquiry}
                className='h-10 w-[500px] border px-2'
                onChange={(e) => setInquiry(e.target.value)}
              >
                <option value=''>選択してください</option>
                <option value='物件のお問い合せ'>物件のお問い合せ</option>
                <option value='その他'>その他</option>
              </select>
            </div>

            <div className='mt-3 flex '>
              <p className='mr-5 w-40 text-right'>お問合せ詳細</p>
              <textarea
                rows={10}
                value={details}
                className='w-[500px] border px-2'
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
            <div className=' mt-5 flex justify-end'>
              <button
                className=' rounded-lg bg-primary-green px-7 py-3 text-white hover:bg-[#48A80E]'
                type='submit'
              >
                送信
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
