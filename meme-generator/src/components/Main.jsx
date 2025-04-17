import React, { useState } from "react";

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    });

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="Enter top text"
                        name="topText"
                        value={meme.topText}
                        onChange={(e) => setMeme({ ...meme, topText: e.target.value })}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Enter bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={(e) => setMeme({ ...meme, bottomText: e.target.value })}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} alt="Meme" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    );
}