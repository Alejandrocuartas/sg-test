import React from "react";
import { Contact } from "../types";
const Contact = ({ contact }: { contact: Contact }) => {
    return (
        <li
            className="bg-blue-100 hover:bg-blue-300 px-6 py-2 border-b border-gray-100 w-full flex justify-start items-center cursor-pointer"
        >
            <img
                className="h-12 w-12 rounded-full"
                src="https://th.bing.com/th/id/R.d190520540d699ac32cae6b3fee842b0?rik=awbo1TP5rXLFWQ&riu=http%3a%2f%2fkairos.technorhetoric.net%2f19.3%2freviews%2frobin%2fimages%2ffacebook2.gif&ehk=a3YPmduO8F11Dft%2fK4hEdh8juNbuyo9dyfk%2fz2UIojk%3d&risl=&pid=ImgRaw&r=0"
                alt="user profile"
            />
            <h6 className="mx-4 font-medium leading-tight text-base mt-0 mb-2 text-white-600">
                {contact.name}
            </h6>
        </li>
    );
};

export default Contact;
