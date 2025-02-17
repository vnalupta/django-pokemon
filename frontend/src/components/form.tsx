"use client";

import { InputHTMLAttributes, useState } from "react";

type Lead = {
    id: number,
    name: string,
    phone: string
}

const Form = () => {
    const [nameInput, setNameInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");

    const [leads, setLeads] = useState([] as Lead[]);
    const [id, setId] = useState(0);

    const [error, setError] = useState(false)

    function nameChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setError(false);
        setNameInput(e.target.value);
    }

    function phoneChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setError(false);
        setPhoneInput(e.target.value);
    }

    function submitHandler(e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();

        // if either field is empty then throw up error
        if (nameInput.length === 0 || phoneInput.length === 0) {
            setError(true);
            return;
        }

        setNameInput("");
        setPhoneInput("");

        setLeads([...leads, {
            id: id,
            name: nameInput,
            phone: phoneInput }])
        setId(id + 1)
    }


    const removeHandler = (e: React.MouseEvent<HTMLSpanElement>, id: number) => {
        setLeads(leads.filter(lead => id !== lead.id))
    }

    return (
        <div
            style={{
                display: "flex",
                margin: "0 auto",
                width: 768,
                justifyContent: "space-between",
            }}
        >
            <div>
                <h2 style={{ position: "relative" }}>Name</h2>
                <input
                    type="text"
                    value={nameInput}
                    placeholder="Enter Your Name"
                    onChange={nameChangeHandler}
                />
                <h2>Phone</h2>
                <input
                    type="text"
                    value={phoneInput}
                    placeholder="Enter Your Phone"
                    onChange={phoneChangeHandler}
                />
                <br />


                <button onClick={submitHandler}>Submit</button>
                {error && (<p style={{ color: "red"}}>Error!</p>)}
            </div>
            <div>
                <h2>Leads</h2>
                <ul>
                {leads.map((lead) => (
                        <li key={lead.id}>
                            <span onClick={e => removeHandler(e, lead.id)}>X</span>{' '}
                            <span>{lead.id}: {lead.name} - {lead.phone}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Form;
