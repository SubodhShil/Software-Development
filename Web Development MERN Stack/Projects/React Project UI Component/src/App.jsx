import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";

function App() {
    const [selectedTab, setSelectedTab] = useState("Home");

    return (
        <PostListProvider>
            <div className="app-container">
                <Sidebar
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
                <div className="content">
                    <Header />
                    <div className="m-5">
                        {selectedTab === "Home" ? <PostList /> : <CreatePost />}
                    </div>
                    <Footer />
                </div>
            </div>
        </PostListProvider>
    );
}

export default App;
