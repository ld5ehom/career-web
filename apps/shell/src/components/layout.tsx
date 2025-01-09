import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
    appVideoBasename,
    appJobBasename,
    appNetworkBasename,
    appPostingBasename,
} from "../constants/prefix";
import { Button, Icon } from "@career-web/ui-kit";
import { useAuth0 } from "@auth0/auth0-react";

// Shell Header Layout
const Layout = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    // Login handle
    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/",
            },
        });
    };

    // Logout handle
    const handleLogout = async () => {
        await logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });
    };

    return (
        <div>
            <header className="global-nav">
                <div className="global-nav-content">
                    <Link className="global-nav-logo" to="/">
                        {/* Logo */}
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 76 76"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="#0077B5"
                                d="M63.1 0H12.9C5.8 0 0 5.8 0 12.9v50.3C0 70.2 5.8 76 12.9 76h50.3c7.1 0 12.9-5.8 12.9-12.9V12.9C76 5.8 70.2 0 63.1 0zM24.2 62.5h-8.8V30.3h8.8v32.2zm-4.4-35.5c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3c2.9 0 5.3 2.4 5.3 5.3s-2.4 5.3-5.3 5.3zm39.5 35.5h-8.8v-16.8c0-4.0-2.9-5.5-5.6-5.5-3.1 0-4.6 2.1-4.6 4.7v17.6h-8.8V30.3h8.8v4.3h.1c1.2-2.3 3.5-3.7 6.2-3.7 4.5 0 8.2 2.9 8.2 8.3v23.5z"
                            />
                        </svg>

                        <span>Campus Job</span>
                    </Link>

                    {/* Login Button */}
                    {!isAuthenticated && (
                        <div style={{ marginLeft: 20 }}>
                            <Button onClick={handleLogin}>Login</Button>
                        </div>
                    )}

                    {/* Log out Button */}
                    {isAuthenticated && (
                        <div style={{ marginLeft: 20 }}>
                            <Button onClick={handleLogout}>Logout</Button>
                        </div>
                    )}

                    {/* Right Side Navbar */}
                    <nav className="global-nav-nav">
                        <ul className="global-nav-items">
                            {/* Home */}
                            <li className="global-nav-item">
                                <NavLink
                                    className="global-nav-link"
                                    to={`${appPostingBasename}`}
                                >
                                    <Icon.Home />
                                    <span className="global-nav-link-text">
                                        Home
                                    </span>
                                </NavLink>
                            </li>

                            {/* Network */}
                            <li className="global-nav-item">
                                <NavLink
                                    className="global-nav-link"
                                    to={`${appNetworkBasename}`}
                                >
                                    <Icon.UserFriends />
                                    <span className="global-nav-link-text">
                                        Network
                                    </span>
                                </NavLink>
                            </li>

                            {/* Video */}
                            <li className="global-nav-item">
                                <NavLink
                                    className="global-nav-link"
                                    to={`${appVideoBasename}`}
                                >
                                    <Icon.LaptopCode />
                                    <span className="global-nav-link-text">
                                        Video
                                    </span>
                                </NavLink>
                            </li>

                            {/* Jobs */}
                            <li className="global-nav-item">
                                <NavLink
                                    className="global-nav-link"
                                    to={`${appJobBasename}`}
                                >
                                    <Icon.Briefcase />
                                    <span className="global-nav-link-text">
                                        Jobs
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Login check */}
            <div className="global-container">
                {isAuthenticated && <Outlet />}
            </div>
        </div>
    );
};

export default Layout;
