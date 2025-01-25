import "./App.css";
import Announcement from "./assets/components/Announcement";
import Footer from "./assets/components/Footer";
import HOD from "./assets/components/HOD";
import Navbar from "./assets/components/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <img
                src="https://www.avanse.com/blogs/images/What%20you%20must%20know%20about%20Harvard%20University.jpg"
                alt=""
            />
            <HOD />
            <Announcement />
            <Footer />
        </div>
    );
}

export default App;
