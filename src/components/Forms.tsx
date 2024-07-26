'use client'

import { Button } from '@/components/Button'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export function LoginForm() {
    // const router = useRouter();
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
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            localStorage.setItem('session_id', result.session_id);
            // const cookies = new Cookies();
            // cookies.set('session_id', result.session_id, { path: '/', secure: true, sameSite :true});
            // console.log(`cookies: ${cookies.get('session_id')}`);
            alert(`登入成功`);
            document.location.href="/";
        } catch (error) {
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
      </form>
    )
}

export function RegisterForm() {
  const router = useRouter();
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
              throw new Error('Network response was not ok');
          }

          const result = await response.json();
          alert('註冊成功');
          router.push("/login");
      } catch (error) {
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
      </div>
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