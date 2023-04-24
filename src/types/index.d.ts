export type Contact = {
    readonly name: string;
    readonly lastName: string;
    readonly email: string;
    readonly id: string;
}

export type GlobalContext = {
    contacts: Contact[];
    setContacts: React.Dispatch<Contact[]>;
}