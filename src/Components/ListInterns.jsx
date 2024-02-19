// InternList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListInterns = () => {
    const [interns, setInterns] = useState([]);

    useEffect(() => {
        const fetchInterns = async () => {
            try {
                const response = await axios.get('http://localhost:3001/intern_members');
                setInterns(response.data);
            } catch (error) {
                console.error('Error fetching interns:', error);
            }
        };

        fetchInterns();
    }, []);

    return (
        <div>
            <h2>Intern Lists</h2>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">Selection Status</th>
                    </tr>
                </thead>
                <tbody>
                    {interns.map((intern) => (
                        <tr key={intern.id}>
                            <td>{intern.name}</td>
                            <td>{intern.address}</td>
                            <td>{intern.dateOfBirth}</td>
                            <td>
                                {intern.selectionStatus ? (
                                    <h6><span className="text-white bg-success border rounded p-1">Selected</span></h6>
                                ) : (
                                    <h6><span className="text-white bg-warning border rounded p-1">Not Selected</span></h6>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListInterns;
