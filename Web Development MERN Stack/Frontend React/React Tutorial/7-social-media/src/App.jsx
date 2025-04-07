import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import { useState } from "react";
import PostList from "./components/PostList";

function App() {
    const [selectedTab, setSelectedTab] = useState("Home");

    return (
        <div className="app-container">
            <Sidebar selectedTab={selectedTab} className="sidebar" />
            <div className="content flex-grow-1 d-flex flex-column">
                <Header />
                <Footer className="mt-auto" />

                {selectedTab === "Home" ? <PostList /> : <CreatePost />}
            </div>
        </div>
    );
}

export default App;
