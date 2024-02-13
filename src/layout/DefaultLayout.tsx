import React, { Children } from "react";
import { Link } from "react-router-dom";

interface DefaultLayoutPromps {
    children: React.ReactNode;
}

export default function DefaultLayout( {children}: DefaultLayoutPromps )
{
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}