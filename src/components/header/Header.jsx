import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {NavLink} from 'react-router-dom'
import {
  Bars3Icon,
  AcademicCapIcon,
  BookOpenIcon,
  BriefcaseIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import LogoDark from "../../assets/ic_logo_dark.png"
import LogoLight from "../../assets/ic_logo_light.png"
import Switcher from './ThemeSwitch'

const works = [
  { name: 'CarMa', description: 'The career magazine ', href: '/carma', icon: BookOpenIcon },
  { name: 'Centre for Career Development', description: 'The official portal for placements and internships', href: 'https://ccd.iiserb.ac.in/', icon: AcademicCapIcon },
  { name: 'Entrepreneurship Cell', description: 'The place where ideas turns to reality', href: '/ecell', icon: BriefcaseIcon },
  { name: 'MUN', description: 'Where critical thinking thrives and global issues meet innovative solutions', href: 'https://sites.google.com/view/iiserbmun/home', icon: SquaresPlusIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({theme, changeTheme}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="mt-4 bg-gray-100 dark:bg-gray-800">
      <nav className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <p className="-m-1.5 p-1.5">
            <NavLink to="/">
            <img className="h-10 w-auto" src={(theme === "dark") ? LogoLight : LogoDark} alt="SDC Logo"  />
            </NavLink>
          </p>
        </div>
        <div className="flex lg:hidden">
      <Switcher colorTheme={theme} setTheme={changeTheme}/>

          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-black dark:text-white">
                    Our Works
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {works.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-red-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <NavLink to={item.href} target={item.href.startsWith("http")? '_blank' : "_self"} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </NavLink>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="https://sdciiserb.wordpress.com/" target="_blank" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
            Blogs
          </a>
          <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
            <NavLink to="/resources">
                Resources
            </NavLink>
          </p>
          <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
            <NavLink to="/team">
                Our Team
            </NavLink>
          </p>
          <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
            <NavLink to="/reports">
                Monthly Reports
            </NavLink>
          </p>
          <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
            <NavLink to="/contact">
                Contact Us
            </NavLink>
          </p>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Switcher colorTheme={theme} setTheme={changeTheme}/>
            <div className='bg-gradient-to-r from-blue-600 via-indigo-500 to-red-500 p-1 rounded-xl'>
                <div className = "flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-800  rounded-xl back">
                <NavLink to="/ecell" className="text-sm font-bold leading-6 pl-4 pr-4 pt-2 pb-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-500 to-red-400 inline-block text-transparent bg-clip-text">
                     Ecell <span aria-hidden="true">&rarr;</span>
                </NavLink>
                </div>
           
            </div>
          
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Our Works
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...works].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="p"
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            <NavLink to={item.href} target={item.name.startsWith("http") ? "_blank" : "_self"}>{item.name}</NavLink>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="https://sdciiserb.wordpress.com/" target='_blank'
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}  
                >
                  Blogs
                </a>

                <NavLink
                  to="/resources"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resources
                </NavLink>
                
                <NavLink
                  to="/team"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Team
                </NavLink>
                <NavLink
                  to="/reports"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Monthly Reports
                </NavLink>
                <NavLink
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              </div>
              <div className="py-6">
                <NavLink
                  to="/ecell"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  E-Cell
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
