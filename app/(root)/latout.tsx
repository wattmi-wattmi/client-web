import React from "react";

export default function MainLayout ({ children } : Readonly<{ children : React.ReactNode }>) {
    return (
        <>
            <header></header>
            <main>
                { children }
            </main>
            <footer></footer>
        </>
    )
}