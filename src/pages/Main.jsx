import React, { useEffect } from "react";
import './Main.css';

import api from "../services/api";

import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';
import logo from '../assets/logo.svg';

export default function Main({ match }) {
//     useEffect(() => {
//     async function loadUsers() {
//         const response = await api.get('/devs', {
//             headers: {
//                 user: match.params.id,
//             }
//         })
//         console.log(response.data)
//     }
    
//     loadUsers()
// }, [match.params.id])

    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="" />
                    <footer>
                        <strong>Diego Rocketseat</strong>
                            <p>CTO at @Rocketseat. Passionate about education and changing people's lives through programming.</p>
                    </footer>
                    <div className="buttons">
                        <button type="submit">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="submit">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="" />
                    <footer>
                        <strong>Diego Rocketseat</strong>
                            <p>CTO at @Rocketseat. Passionate about education and changing people's lives through programming.</p>
                    </footer>
                    <div className="buttons">
                        <button type="submit">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="submit">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="" />
                    <footer>
                        <strong>Diego Rocketseat</strong>
                            <p>CTO at @Rocketseat. Passionate about education and changing people's lives through programming.</p>
                    </footer>
                    <div className="buttons">
                        <button type="submit">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="submit">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="" />
                    <footer>
                        <strong>Diego Rocketseat</strong>
                            <p>CTO at @Rocketseat. Passionate about education and changing people's lives through programming.</p>
                    </footer>
                    <div className="buttons">
                        <button type="submit">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="submit">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
               
            </ul>
        </div>
    )   
    

}   