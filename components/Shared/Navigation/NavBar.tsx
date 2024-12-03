
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// or the correct path if it's a custom component


import { headerLinks } from "../../Constants";
export default function NavBar() {

    function classNames(...classes: (string | boolean | undefined | null)[]): string {
        return classes.filter(Boolean).join(' ');
    }
    return (
        <Disclosure as="nav" className=" ">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 
                         hover:bg-gray-300/[0.25]  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {headerLinks.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'border-b border-ourGreen' : ' hover:border-b hover:border-gray-300/[0.25]',
                                            'rounded px-3 py-1 ubuntu-mono-regular ',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden fixed inset-x-0 top-16 z-50 backdrop-blur-md h-[calc(100vh-4rem)]">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {headerLinks.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'border-b border-ourGreen' : 'hover:bg-gray-300/[0.25]',
                                'block rounded-md px-3 py-1 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}