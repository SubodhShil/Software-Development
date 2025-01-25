import React from "react";

function VideoPlayer() {
    return (
        <div className="">
            <iframe
                className="rounded-lg"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TUp9fzT_71c?si=WjbNZvtij6nuaqZq"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        </div>
    );
}

export default VideoPlayer;
