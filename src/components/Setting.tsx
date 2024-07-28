'use client'

import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Description, Field, Label } from '@headlessui/react'
import { useState } from 'react'
function classNames(...classes : any) {
    return classes.filter(Boolean).join(' ')
}

export function Info() {
  const [isNameChange, setisNameChange] = useState(false);
  const [isEmailChange, setisEmailChange] = useState(false);
  const [isPhoneChange, setisPhoneChange] = useState(false);
  const [isAllergyChange, setisAllergyChange] = useState(false);
  const [isChronicChange, setisChronicChange] = useState(false);
  const [isSpecialChange, setisSpecialChange] = useState(false);
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-2xl font-semibold leading-7 text-gray-900 dark:text-white">基本資料</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-400">在診斷前需要一些您的資料</p>
      </div>
      <div className="mt-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <div className='flex justify-between'>
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-emerald-400">姓名</dt>
                <button
                    onClick={()=>{setisNameChange(!isNameChange)}}
                    type="button"
                    className="mr-3 md:mr-7 rounded bg-emerald-50 px-2 py-1 text-sm text-emerald-500 shadow-sm hover:bg-emerald-100"
                    >
                    {isNameChange?"更改":"編輯"}
                </button>
            </div>
            {!isNameChange && <dd className="ml-1 mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">
                OOO
            </dd>}
            {isNameChange && <dd className="ml-1 mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">
                <input
                    id="name"
                    name="name"
                    className="block w-6/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </dd>}
          </div>
          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-emerald-400">性別</dt>
            <dd className="ml-1 pt-2 mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2 ">男</dd>
          </div>

          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-emerald-400">身分證字號</dt>
            <dd className="ml-1 pt-2 mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">******3607</dd>
          </div>
          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-emerald-400">健保卡號</dt>
            <dd className="ml-1 pt-2 mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">********2123</dd>
          </div>

          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <div className='flex justify-between'>
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-emerald-400">電子信箱</dt>
                <button
                    onClick={()=>{setisEmailChange(!isEmailChange)}}
                    type="button"
                    className="mr-3 md:mr-7 rounded bg-emerald-50 px-2 py-1 text-sm text-emerald-500 shadow-sm hover:bg-emerald-100"
                    >
                    {isNameChange?"更改":"編輯"}
                </button>
            </div>
            {!isEmailChange && <dd className="ml-1 mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">
                email@example.com
            </dd>}
            {isEmailChange && <dd className="ml-1 mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">
                <input
                    id="email"
                    name="email"
                    placeholder='email@example.com'
                    className="block w-6/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </dd>}          
          </div>
          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <div className='flex justify-between'>
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-emerald-400">連絡電話</dt>
                <button
                    onClick={()=>{setisPhoneChange(!isPhoneChange)}}
                    type="button"
                    className="mr-3 md:mr-7 rounded bg-emerald-50 px-2 py-1 text-sm text-emerald-500 shadow-sm hover:bg-emerald-100"
                    >
                    {isPhoneChange?"更改":"編輯"}
                </button>
            </div>
            {!isPhoneChange && <dd className="ml-1 mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">
                0987654321
            </dd>}
            {isPhoneChange && <dd className="ml-1 mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">
                <input
                    id="phone"
                    name="phone"
                    className="block w-6/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </dd>}  
          </div>

          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
            <div className='flex justify-between'>
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-emerald-400">過敏藥物</dt>
                <button
                    onClick={()=>{setisAllergyChange(!isAllergyChange)}}
                    type="button"
                    className="mr-3 md:mr-7 rounded bg-emerald-50 px-2 py-1 text-sm text-emerald-500 shadow-sm hover:bg-emerald-100"
                    >
                    {isAllergyChange?"更改":"編輯"}
                </button>
            </div>
            {!isAllergyChange && <dd className="ml-1 mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">
                無
            </dd>}
            {isAllergyChange && <dd className="ml-1 mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">
                <input
                    id="allergy"
                    name="allergy"
                    className="block w-10/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </dd>}  
          </div>

          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
            <div className='flex justify-between'>
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-emerald-400">慢性病 (如高血壓、糖尿病、心臟病等)</dt>
                <button
                    onClick={()=>{setisChronicChange(!isChronicChange)}}
                    type="button"
                    className="mr-3 md:mr-7 rounded bg-emerald-50 px-2 py-1 text-sm text-emerald-500 shadow-sm hover:bg-emerald-100"
                    >
                    {isChronicChange?"更改":"編輯"}
                </button>
            </div>
            {!isChronicChange && <dd className="ml-1 mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">
                無
            </dd>}
            {isChronicChange && <dd className="ml-1 mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">
                <input
                    id="allergy"
                    name="allergy"
                    className="block w-10/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </dd>}  
          </div>

          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
            <div className='flex justify-between'>
                <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-emerald-400">特殊情況 (懷孕、哺乳或計劃懷孕等)</dt>
                <button
                    onClick={()=>{setisSpecialChange(!isSpecialChange)}}
                    type="button"
                    className="mr-3 md:mr-7 rounded bg-emerald-50 px-2 py-1 text-sm text-emerald-500 shadow-sm hover:bg-emerald-100"
                    >
                    {isSpecialChange?"更改":"編輯"}
                </button>
            </div>
            {!isSpecialChange && <dd className="ml-1 mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">
                無
            </dd>}
            {isSpecialChange && <dd className="ml-1 mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">
                <input
                    id="special"
                    name="special"
                    className="block w-10/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </dd>} 
          </div>


        </dl>
      </div>
    </div>
  )
}

export function PwdButton() {
    return (
      <Field className="mt-5 flex items-center justify-between">
        <span className="flex flex-grow flex-col">
          <Label as="span" passive className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
            更改密碼
          </Label>
          <Description as="span" className="text-sm text-gray-500 dark:text-gray-400">
            定期更改密碼以維護您的帳戶安全
          </Description>
        </span>
        <button
            onClick={()=>{location.href='/changePwd'}}
            type="button"
            className="mr-7 rounded bg-emerald-50 px-2 py-1 text-sm text-emerald-500 shadow-sm hover:bg-emerald-100"
            >
            前往
        </button>
      </Field>
    )
  }