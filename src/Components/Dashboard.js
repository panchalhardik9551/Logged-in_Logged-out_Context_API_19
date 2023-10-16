import React, { useContext, useRef, useState } from 'react'
import { profile } from '../App'
import Hardik from './Hardik'
import { toast } from 'react-toastify'

export default function Dashboard() {

    let passref = useRef();

    const [state, setstate] = useContext(profile)

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [input, setInput] = useState([
        {
            username: "hardik",
            password: "hardik123"
        },
        {
            username: "paavan",
            password: "paavan123"
        },
        {
            username: "mohit",
            password: "mohit123"
        },
        {
            username: "1",
            password: "1"
        }
    ])


    const handle = (e) => {
        setUser(e.target.value)
    }
    const handle1 = (e) => {
        setPass(e.target.value)
    }

    const showbtn = () => {
        if (passref.current.type == "password") {

            passref.current.type = "text";
        } else {
            passref.current.type = "password";

        }
    }

    const loginevent = () => {
        if (pass == "" && user == "") {
            toast.error("Pls enter value")
        }
        else {
            let data = input.filter((val) => {
                return val.username.includes(user)
            })
            let data1 = input.filter((val) => {
                return val.password.includes(pass)
            })
            if (data == "") {
                toast.error("Data Invalid")
                setUser("")
                setPass("")
            } else {
                if (data[0].username == user && data[0].password == pass) {
                    toast.success("Logged in Successfully")
                    setstate(data)
                }
                else {
                    toast.error("Data Invalid")
                    setUser('')
                    setPass('')
                }
            }
        }
    }




    return (
        <>

            <div className='main'>
                {
                    state != undefined ? (
                        <Hardik />
                    ) : (

                        <>
                            <h1>Login</h1>
                            <input type="text" title='Username' placeholder='Username' value={user} onChange={handle} /><br />
                            <input type="password" title='Password' placeholder="Password" value={pass} onChange={handle1} ref={passref} /> <span><button className='pbtn' onClick={showbtn}>👁️</button></span><br />
                            <button id='btn' onClick={loginevent}>Submit</button>
                        </>
                    )}
            </div>
        </>
    )
}
