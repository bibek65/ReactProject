import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [dateOfBirth, setDateofbirth] = useState(null);
    const [selectionStatus, setSelectionStatus] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
        // Validation
        if (!name || !address || !dateOfBirth) {
            alert("Please fill in all required fields.");
            return;
        }

        axios.post("http://localhost:3001/intern_members", {
            name: name,
            address: address,
            dateOfBirth: dateOfBirth,
            selectionStatus: selectionStatus
        })

    };

    return (
        <>
            <div className="m-5 p-5">
                <div className="d-flex">
                    <h2 className="">Add Intern Members</h2>
                </div>
                <form >
                    <div className="mb-3">
                        <label className="form-label">Name   </label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Address   </label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date of Birth</label><br></br>
                        <DatePicker selected={dateOfBirth} placeholderText="DD/MM/YYYY" onChange={(date) => setDateofbirth(date)} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" onChange={(e) => setSelectionStatus(e.target.checked)} />
                        <label className="form-check-label" >Selection Status</label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Create;