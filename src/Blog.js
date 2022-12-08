import React from "react";
import logo from "./logoColors/vintagelogo.png";
import theCab from "./cab.png";
import soho from "./soho.png"

function Blog() {
    return (
        
        <div id="blog-section">
            <div id="left-blog">
                <h1 className="blog-letters">M</h1>
                <h1 className="blog-letters">E</h1>
                <h1 className="blog-letters">+</h1>
                <h1 className="blog-letters">N</h1>
                <h1 className="blog-letters">O</h1>
                <h1 className="blog-letters">B</h1>
                <h1 className="blog-letters">O</h1>
                <h1 className="blog-letters">D</h1>
                <h1 className="blog-letters">Y</h1>
            </div>
            <div id="middle-blog">
            <div className="song-blog">
                <h1 className="blog-title">THE CAB</h1>
                <div className="lyrics-img-section">
                    <div className="meaning-section">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="true-lyrics-img">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img src={theCab} className="song-img"></img>
                    </div>
                </div>            
            </div>
            <div className="song-blog">
                <h1 className="blog-title">INTRO</h1>
                <div className="lyrics-img-section">
                    <div className="meaning-section">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="true-lyrics-img">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img src={soho} className="song-img"></img>
                    </div>
                </div>   
            </div>
            <div className="song-blog">
                <h1 className="blog-title">SOHO</h1>
                <div className="lyrics-img-section">
                    <div className="meaning-section">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="true-lyrics-img">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img src={soho} className="song-img"></img>
                    </div>
                </div>           
            </div>
            <div className="song-blog">
                <h1 className="blog-title">THE RED</h1>
                <div className="lyrics-img-section">
                    <div className="meaning-section">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="true-lyrics-img">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img src={logo} className="song-img"></img>
                    </div>
                </div>             
            </div>
            </div>
            <div id="right-blog">
                <h1 className="blog-letters">M</h1>
                <h1 className="blog-letters">E</h1>
                <h1 className="blog-letters">+</h1>
                <h1 className="blog-letters">N</h1>
                <h1 className="blog-letters">O</h1>
                <h1 className="blog-letters">B</h1>
                <h1 className="blog-letters">O</h1>
                <h1 className="blog-letters">D</h1>
                <h1 className="blog-letters">Y</h1>
            </div>
        </div>
        
    )
}

export default Blog;