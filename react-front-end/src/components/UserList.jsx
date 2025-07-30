// src/components/UserList.jsx
import React, { useState, useEffect } from 'react';

export default function UserList() {
    // Hold users, loading status and any fetch error in state
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch users when the component mounts
    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []); // empty dependency array means this runs once on mount

    if (loading) return <p>Loading…</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
}
