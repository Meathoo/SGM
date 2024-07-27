import { PaperClipIcon } from '@heroicons/react/20/solid'

const statuses:any = {
    Ready: 'text-green-700 bg-green-50 ring-green-600/20',
    Checked: 'text-yellow-600 bg-yellow-50 ring-gray-500/10',
    Unchecked: 'text-red-700 bg-red-50 ring-red-600/10',
}

const statusMap:any = {
    'Ready': '可取藥',
    'Checked':'配藥中',
    'Unchecked':'處理中',
}

function classNames(...classes : any) {
    return classes.filter(Boolean).join(' ')
}

export function PrescriptionDetail() {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-2xl font-semibold leading-7 text-gray-900 dark:text-white">症狀3</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">處方箋</p>
      </div>
      <div className="mt-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-emerald-400">診斷單位</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">XXX - OO診所<br />地址</dd>
          </div>
          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-emerald-400">配藥單位</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2 ">OO藥局<br />地址</dd>
          </div>
          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-emerald-400">電子信箱</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">email@example.com</dd>
          </div>
          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-emerald-400">連絡電話</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">0987654321</dd>
          </div>
          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-emerald-400">取藥位置</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">藥櫃1<br />地址</dd>
          </div>
          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">狀態</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">
                <div
                  className={classNames(
                    statuses['Ready'],
                    'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset w-fit',
                  )}
                >
                  {statusMap['Ready']}
                  <br/>於 2024-07-12 09:20:18
                </div>
            </dd>
          </div>
          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">診斷結果</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">
              Result
            </dd>
          </div>
          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">醫師建議</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-300 sm:mt-2">
                Suggestion
            </dd>
          </div>
          <div className="border-t border-gray-500 dark:border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-white">附件</dt>
            <dd className="mt-2 text-sm text-gray-900">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium dark:text-emerald-400">膳食營養素參考攝取量.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium dark:text-emerald-400 hover:text-emerald-200">
                      Download
                    </a>
                  </div>
                </li>
                {/* <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li> */}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
