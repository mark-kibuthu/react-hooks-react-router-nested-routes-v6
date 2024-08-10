import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
    const { id } = useParams();
    const users = useOutletContext();

    const user = users.find(user => user.id === parseInt(id));

    if (!user) {
        return <h1>Loading...</h1>;
    }

    return (
        <aside>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            {/* Display more user details here */}
        </aside>
    );
}

export default UserProfile;
