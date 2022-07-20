import React, { useEffect, useState } from "react";

import './Main.css';

import api from '../services/api';

import { Link, useParams } from "react-router-dom";
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';
import logo from '../assets/logo.svg';

export default function Main() {
    const {id} = useParams()
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: id,
                }
            })
            setUsers(response.data)
        }

        loadUsers()
    }, [id])

    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`, null, {
            headers: {user: id},
        })

        setUsers(users.filter(user => user._id !== id))    }

    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: {user: id},
        })

        setUsers(users.filter(user => user._id !== id))
    }


    return (
        <div className="main-container">
            <Link to='/'>
            <img src={logo} alt="Tindev" />
            </Link>
              {users.length > 0 ? (
            <ul>
                {users.map(user => ( 
                    <li key={user._id}>
                        <img src={user.avatar} alt={user.name}/>
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>
                        <div className="buttons">
                            <button type="submit" onClick={() => handleDislike(user._id)}>
                                <img src={dislike} alt="Dislike" />
                            </button>
                            <button type="submit" onClick={() => handleLike(user._id)}>
                                <img src={like} alt="Like"/>
                            </button>
                        </div>
                    </li>
                  ))} 
                 </ul>
              ) : (
                <div className="empty">Acabou :(</div>

              ) }

        </div>
    )


}   

// map() serve para percorrer um array e retornar alguma coisa
