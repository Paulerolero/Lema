import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import { TEInput ,TERipple } from "tw-elements-react";

export default function Signup(){
    const [name,setName]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to='/dashboard' />;
    }


    return (
        <DefaultLayout>
            <form className="form">
            <h5 className="mb-2 mt-0 text-xl font-medium leading-tight text-primary">Sign Up</h5>
                <br></br>
                {/* <label>Name</label> */}
                <TEInput
                    type="text"
                    id="name"
                    label="Nombre"
                    value={name}
                    onChange={(e)=>{setUsername(e.target.value)}}
                ></TEInput>

                {/* <input type='text' value={name}  onChange={(e)=>{setName(e.target.value)}}/><br /> */}

                {/* <label>Username:</label>
                <input type="text" id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br /> */}

                <TEInput
                    type="text"
                    id="username"
                    label="Usuario"
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                ></TEInput>

                {/* <label>Password:</label>
                <input  
                    type="password"  
                    id="password"  
                    data-lpignore="true" 
                    value={password} onChange={(e)=>{setPassword(e.target.value)}}
                /> */}

                <TEInput
                    type="password"
                    id="password"
                    label="Contraseña"
                    value={password}
                    onChange={(e)=>{setUsername(e.target.value)}}
                ></TEInput>


                <br />
                <TERipple rippleColor="light">
                    <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >Create User</button>
                </TERipple>
                
            </form>;
        </DefaultLayout>
    )
};

