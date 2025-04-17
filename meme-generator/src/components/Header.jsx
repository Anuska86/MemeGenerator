import dogMeme from "../imgs/dogMeme.png";

export default function Header() {
    return (
        <header className="header">
            <img 
                src={dogMeme} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}