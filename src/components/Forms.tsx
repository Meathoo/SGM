'use client'

import { Button } from '@/components/Button'
import { useEffect, useState } from 'react';
// import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Description, Field, Label, Switch } from '@headlessui/react'
import { Alert } from './Alert';
import { IdentificationIcon } from '@heroicons/react/20/solid';

export function LoginForm() {
    // const router = useRouter();
    const [isWrong, setisWrong] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                setisWrong(true);
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            localStorage.setItem('session_id', result.session_id);
            localStorage.setItem('id', result.id);
            // const cookies = new Cookies();
            // cookies.set('session_id', result.session_id, { path: '/', secure: true, sameSite :true});
            // console.log(`cookies: ${cookies.get('session_id')}`);
            // alert(`登入成功`);
            setIsLoggedIn(true);
            // document.location.href="/";   
        } catch (error) {
            setisWrong(true);
            console.error('Fetch Error:', error);
        }
    };

    return (
      <form onSubmit={handleSubmit}>

        <div className="mt-5">
          <label htmlFor="email" className="block text-sm font-medium leading-6 white">電子郵件</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="password" className="block text-sm font-medium leading-6 white">密碼</label>
          <div className="mt-2">
            <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="not-prose mb-16 mt-6 flex gap-3">
          <Button type='submit'>
            <>登入</>
          </Button>
        </div>
        {isLoggedIn && <Alert type={0} title={"登入成功"} msg={"歡迎！"} buttonText={"回首頁"} url={"/"}/>}
        {isWrong && <Alert type={1} title={"登入失敗"} msg={"電子郵件或密碼錯誤"} buttonText={"回登入頁面"} url={"/login"}/>}
      </form>
    )
}

export function RegisterForm() {
  const [isRegSucc, setisRegSucc] = useState(false);
  const [isWrong, setisWrong] = useState(false);
  const [formData, setFormData] = useState({
      name: '',
      cardID: '',
      email: '',
      password: '',
  });
  
  const handleChange = (e: any) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
      e.preventDefault();
      try {
          const response = await fetch('http://127.0.0.1:8000/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          });
          if (!response.ok) {
              setisWrong(true);
              throw new Error('Network response was not ok');
          }

          const result = await response.json();
          setisRegSucc(true);
          // alert('註冊成功');
          // router.push("/login");
      } catch (error) {
          setisWrong(true);
          console.error('Fetch Error:', error);
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-5">
        <label htmlFor="name" className="block text-sm font-medium leading-6 white">姓名</label>
        <div className="mt-2">
          <input id="name" name="name" value={formData.name} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="cardID" className="block text-sm font-medium leading-6 white">健保卡號</label>
        <div className="mt-2">
          <input id="cardID" name="cardID" onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="block text-sm font-medium leading-6 white">電子郵件</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="password" className="block text-sm font-medium leading-6 white">密碼</label>
        <div className="mt-2">
          <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div className="not-prose mb-16 mt-6 flex gap-3">
        <Button type='submit'>
          <>註冊</>
        </Button>
        {isRegSucc && <Alert type={0} title={"註冊成功"} msg={"歡迎加入！"} buttonText={"回登入頁面"} url={"/login"}/>}
        {isWrong && <Alert type={1} title={"註冊失敗"} msg={"請檢查輸入格式"} buttonText={"回註冊頁面"} url={"/registration"}/>}
      </div>
    </form>
  )
}

export function ChangePwdForm() {
  // const router = useRouter();
  const [isWrong, setisWrong] = useState(false);
  const [isSucc, setisSucc] = useState(false);
  const [formData, setFormData] = useState({
      id : localStorage.getItem('id'),
      oldPassword: '',
      newPassword: '',
      newPasswordAgain: '',
  });

  const handleChange = (e: any) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
      e.preventDefault();
      try {
          const response = await fetch('http://127.0.0.1:8000/changePwd', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          });
          if (!response.ok) {
              setisWrong(true);
              throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setisSucc(true);
      } catch (error) {
          setisWrong(true);
          console.error('Fetch Error:', error);
      }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="mt-5">
        <label htmlFor="password" className="block text-sm font-medium leading-6 white">舊密碼</label>
        <div className="mt-2">
          <input id="oldPassword" name="oldPassword" type="password" value={formData.oldPassword} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="password" className="block text-sm font-medium leading-6 white">新密碼</label>
        <div className="mt-2">
          <input id="newPassword" name="newPassword" type="password" value={formData.newPassword} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="password" className="block text-sm font-medium leading-6 white">再次輸入新密碼</label>
        <div className="mt-2">
          <input id="newPasswordAgain" name="newPasswordAgain" type="password" value={formData.newPasswordAgain} onChange={handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div className="not-prose mb-16 mt-6 flex gap-3">
        <Button type='submit'>
          <>更改</>
        </Button>
      </div>
      {isSucc && <Alert type={0} title={"更改密碼成功"} msg={"歡迎！"} buttonText={"回首頁"} url={"/"}/>}
      {isWrong && <Alert type={1} title={"更改密碼失敗"} msg={"原密碼輸入錯誤"} buttonText={"回更改密碼頁面"} url={"/changePwd"}/>}
    </form>
  )
}

export function Select() {
  return (
    <div className='mt-5 justify-center items-center flex space-x-5'>
      <div>
        <label htmlFor="location" className="block text-xs font-medium leading-6 text-gray-900 dark:text-white">
          單位
        </label>
        <select
          id="location"
          name="location"
          className="mt-2 block w-28 md:w-32 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <option>醫院/診所</option>
          <option>藥局</option>
          <option>藥櫃站</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="location" className="block text-xs font-medium leading-6 text-gray-900 dark:text-white">
          縣市
        </label>
        <select
          id="location"
          name="location"
          className="mt-2 block w-28 md:w-32 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <option>臺北</option>
          <option>桃園</option>
        </select>
      </div>

      <div>
        <label htmlFor="location" className="block text-xs font-medium leading-6 text-gray-900 dark:text-white">
          區域
        </label>
        <select
          id="location"
          name="location"
          className="mt-2 block w-28 md:w-32 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <option>內湖區</option>
          <option>南港區</option>
          <option>信義區</option>
        </select>
      </div>
    </div>
  )
}




export function OnOff() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Field className="flex items-center justify-between">
      <span className="flex flex-grow flex-col">
        <Label as="span" passive className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
          通知
        </Label>
        <Description as="span" className="text-sm text-gray-500 dark:text-gray-400">
          當藥物就緒時發送電子郵件
        </Description>
      </span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="mr-7 group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 data-[checked]:bg-emerald-400"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
        />
      </Switch>
    </Field>
  )
}