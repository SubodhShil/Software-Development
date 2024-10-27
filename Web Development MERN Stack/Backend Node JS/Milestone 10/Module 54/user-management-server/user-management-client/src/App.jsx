import { useEffect, useState } from "react";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    const handleAddUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };

        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => {
                const newUsers = [...users, data];
                setUsers(newUsers);
                form.reset();
            });
    };

    return (
        <>
            <h1>Users Management System</h1>
            <h2>Total users: {users.length}</h2>

            <form onSubmit={handleAddUser} action="">
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value="Add user" />
            </form>

            {users.map((user) => (
                <div>
                    <p key={user.id}>
                        Name: {user.name}, {user.email}
                    </p>
                </div>
            ))}
        </>
    );
}

export default App;
