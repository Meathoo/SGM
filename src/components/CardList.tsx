import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'


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
const clients = [
  {
    id: 1,
    name: '症狀1',
    // imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
    lastInvoice: { dateTime: '2024-07-16 09:10:33', status: 'Unchecked' },
  },
  {
    id: 2,
    name: '症狀2',
    // imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
    lastInvoice: { dateTime: '2024-07-12 07:20:18', status: 'Checked' },
  },
  {
    id: 3,
    name: '症狀3',
    // imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
    lastInvoice: { dateTime: '2024-07-10 05:11:23', status: 'Ready' },
  },
]

function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}

export function CardList() {
  // const [modalOpen, setModalOpen] = useState(false);

  // const handleOpenModal = () => setModalOpen(true);
  // const handleCloseModal = () => setModalOpen(false);

  return (
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
      {clients.map((client) => (
        <li key={client.id} className="overflow-hidden rounded-xl border border-gray-600">
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6 dark:bg-emerald-500">
            {/* <img
              alt={client.name}
              src={client.imageUrl}
              className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
            /> */}
            <div className="text-sm md:text-base font-bold leading-6 text-gray-900 dark:text-white">{client.name}</div>
            <Menu as="div" className="relative ml-auto">
              <MenuButton className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-800 dark:text-white ">
                <span className="sr-only">Open options</span>
                <EllipsisHorizontalIcon aria-hidden="true" className="h-5 w-5" />
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="/prescriptionDetail" className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50">
                    查看處方箋<span className="sr-only">, {client.name}</span>
                  </a>
                </MenuItem>
                {/* <MenuItem>
                  <a href="#" className="block px-3 py-1 text-sm leading-6 text-gray-900 data-[focus]:bg-gray-50">
                    Edit<span className="sr-only">, {client.name}</span>
                  </a>
                </MenuItem> */}
              </MenuItems>
            </Menu>
          </div>
          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500 dark:text-gray-300 break-keep">發送時間</dt>
              <dd className="text-gray-700 dark:text-white">
                <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.dateTime}</time>
              </dd>
            </div>
            {/* <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500 dark:text-gray-300">Amount</dt>
              <dd className="items-start gap-x-2">
                <div className="font-medium text-gray-900 dark:text-white">{client.lastInvoice.amount}</div>
              </dd>
            </div> */}
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500 dark:text-gray-300">狀態</dt>
              <dd className="text-gray-700 dark:text-white">
              <div
                  className={classNames(
                    statuses[client.lastInvoice.status],
                    'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
                  )}
                >
                  {statusMap[client.lastInvoice.status]}
                </div>
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  )
}
