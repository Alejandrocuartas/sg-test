import * as React from "react";
import Contact from "../components/Contact";
import { useGlobalState } from "../context";
const ContactsContainer = () => {
    const { contacts } = useGlobalState()
    const [loading, setLoading] = React.useState(false)
    if (loading) {
        return (
            <h1 className="mx-4 font-medium leading-tight text-base mt-0 mb-2 text-white-600">
                Loading...
            </h1>
        );
    }
    if (contacts.length === 0) {
        return (
            <h1 className="mx-4 font-medium leading-tight text-base mt-0 mb-2 text-white-600">
                There are no contacts yet. Please upload them.
            </h1>
        );
    }

    return (
        <div>
            {contacts.map((c) => {
                return <Contact contact={c} key={c.id} />;
            })}
        </div>
    );
};

export default ContactsContainer;
