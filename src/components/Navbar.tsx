import React, { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../utils/logo";
import Modal from "./Modal";
import FileForm from "./FileForm";
import ContactForm from "./ContactForm";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const [openedFile, setOpenedFile] = useState(false)
    const [openedContact, setOpenedContact] = useState(false)
    const onCloseFile = () => {
        setOpenedFile(false)
    }
    const onCloseContact = () => {
        setOpenedContact(false)
    }
    return (
        <Disclosure as="nav" className="bg-white sticky top-0">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex items-center justify-start sm:items-stretch sm:justify-start">
                                <div
                                    className="flex flex-shrink-0 items-center cursor-pointer"
                                >
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src={logo}
                                        alt="logo"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src={logo}
                                        alt="logo"
                                    />
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-200">
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                            </svg>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div
                                                        onClick={() => setOpenedFile(true)}
                                                        className={classNames(
                                                            active
                                                                ? "bg-gray-100"
                                                                : "",
                                                            "block px-4 py-2 text-sm text-gray-700"
                                                        )}
                                                    >
                                                        Upload CSV contacts file
                                                    </div>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div
                                                        onClick={() => setOpenedContact(true)}
                                                        className={classNames(
                                                            active
                                                                ? "bg-gray-100"
                                                                : "",
                                                            "block px-4 py-2 text-sm text-gray-700"
                                                        )}
                                                    >
                                                        Upload single contact
                                                    </div>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <Modal isOpen={openedFile} onClose={onCloseFile}>
                        <FileForm />
                    </Modal>
                    <Modal isOpen={openedContact} onClose={onCloseContact}>
                        <ContactForm />
                    </Modal>
                </>
            )}
        </Disclosure>
    );
}



