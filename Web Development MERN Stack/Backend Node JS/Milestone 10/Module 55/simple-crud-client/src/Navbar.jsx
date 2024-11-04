import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>
                <h2>MyApp</h2>
            </div>
            <ul style={styles.navLinks}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.link}>
                        Home
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/about" style={styles.link}>
                        About
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/services" style={styles.link}>
                        Services
                    </Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/contact" style={styles.link}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

// Inline CSS styling
const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "#fff"
    },
    logo: {
        fontSize: "1.5rem"
    },
    navLinks: {
        listStyle: "none",
        display: "flex",
        gap: "20px"
    },
    navItem: {
        fontSize: "1.2rem"
    },
    link: {
        color: "#fff",
        textDecoration: "none"
    }
};

export default Navbar;
