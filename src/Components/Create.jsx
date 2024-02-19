import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";


const Create = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [selectionStatus, setSelectionStatus] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!name || !address || !dateOfBirth) {
            alert("Please fill in all required fields.");
            return;
        }

        axios.post("http://localhost:3001/intern_members", {
            name: name,
            address: address,
            dateOfBirth: dateOfBirth.toISOString().split('T')[0],
            selectionStatus: selectionStatus
        })
            .then(() => {
                alert("Intern Added");
                navigate('/');
            })
            .catch(error => {
                console.error("Error adding intern:", error);
                alert("Error adding intern. Please try again.");
            });
    };

    const handleDateChange = (date) => {
        setDateOfBirth(date);
    };

    return (
        <>
            <div className="m-2 p-5">
                <div className="d-flex">
                    <h2 className="">Add Intern Members</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date of Birth</label><br />
                        <DatePicker selected={dateOfBirth} placeholderText="YYYY/MM/DD" onChange={handleDateChange} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" onChange={(e) => setSelectionStatus(e.target.checked)} />
                        <label className="form-check-label" >Selection Status</label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Create;
