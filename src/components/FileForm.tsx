import * as React from "react";
import logo from "../utils/logo";
import { Contact } from "../types";
import { useGlobalState } from "../context";
const FileForm = () => {
    const { setContacts } = useGlobalState()
    const [loading, setLoading] = React.useState(false)
    const submit = (e: any) => {
        const form = new FormData(e.target)
        setLoading(true)
        fetch(`${process.env.API}/api/file/upload`, {
            method: 'POST',
            body: form,
        }).then(r => {
            if (!r.ok) {
                setLoading(false)
                return alert("There was an error uploading file. Please try again.");
            }
            return r.json();
        }).then((r: { contacts: Contact[] }) => {
            setLoading(false)
            setContacts(r.contacts)
            console.log(r)
        })
    }
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src={logo}
                        alt="logo"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Upload contacts file
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={submit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="file" className="sr-only">
                                CSV file of contacts
                            </label>
                            <input
                                id="file"
                                name="file"
                                type="file"
                                required
                                accept=".csv"
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="file"
                            />
                        </div>
                    </div>
                    <div>
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <h1>Loading...</h1>
                            </div>
                        ) : (
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Upload
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FileForm;
