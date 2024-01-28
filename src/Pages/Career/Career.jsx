import { useContext } from "react";
import Logo from "../../HomeLayout/Logo/Logo";
import Navbar from "../../HomeLayout/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Career = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <Logo></Logo>
            <Navbar></Navbar>
            <h1 className="text-2xl mb-2">Here's Career Talk</h1>
            <p>You doing anything {user?.displayName}</p>
            <p>{user?.email}</p>
            <p>{!user.emailVerified && "Your email is not verified yet"}</p>
        </div>
    );
};

export default Career;