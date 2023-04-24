import React, { useState, createContext, useContext } from "react";
import { Contact, GlobalContext } from "../types";
//@ts-ignore
const logContext = createContext<GlobalContext>([1]);
const Context = ({ children }: { children: JSX.Element }) => {
    const [contacts, setContacts] = useState<Contact[]>([])
    const defaultContext: GlobalContext = {
        contacts,
        setContacts,
    }
    return (
        <logContext.Provider value={defaultContext}>
            {children}
        </logContext.Provider>
    );
};

const useGlobalState = () => useContext(logContext);

export { Context, useGlobalState };
