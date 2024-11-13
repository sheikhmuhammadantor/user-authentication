import { Link, NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import { RiSunLine } from "react-icons/ri";
import { IoIosMoon } from "react-icons/io";


function Navbar() {

    const { user, signOutUser } = useContext(AuthContext)
    const [theme, setTheme] = useState("dark");

    const html = document.getElementsByTagName('html')[0];
    html.setAttribute("data-theme", theme);

    const handelChangeTheme = () => {
        if (theme === "dark") {
            setTheme("light");
        }
        if (theme === "light") {
            setTheme("dark");
        }
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="login">LogIn</NavLink></li>
        <li><NavLink to="register">Register</NavLink></li>
        {
            user &&
            <>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/order">Order</NavLink></li>
            </>
        }
    </>

    const handelSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('Successfully Sign Out !', {})
            })
            .catch((error) => {
                console.log(`ErroR : ${error}`);
                toast.error("Sign Out Error !", {})
            })
    }

    return (
        <section>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-lg">
                            <FaBars />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">UserAuthentication</Link>
                    <span onClick={handelChangeTheme} className="btn btn-sm text-2xl">
                        {/* <RiSunLine />
                        <BsFillMoonFill /> */}
                        {
                            (theme === "dark") ? <RiSunLine /> : <IoIosMoon />
                        }
                    </span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <span>{user?.email}</span>
                                <button onClick={handelSignOut} ><Link className="btn ml-4">Sign Out</Link></button>
                            </> :
                            <>
                                <button><Link to="/login" className="btn ml-4">Log In</Link></button>
                            </>
                    }
                </div>
            </div>
        </section>
    )
}

export default Navbar
