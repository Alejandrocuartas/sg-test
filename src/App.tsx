import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ContactsContainer from "./pages/ContactsContainer";
const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<ContactsContainer />}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
