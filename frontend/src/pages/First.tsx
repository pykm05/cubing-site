import { useState } from 'react'
import NavBar from  '../components/NavBar.tsx'
import Header from '../components/Header.tsx'

function First() {
    return (
        <div className="box-border flex">
            <NavBar />
            <div className="flex flex-1 flex-col bg-sky-200">
                <Header />
                <div className="flex flex-1">hello</div>
            </div>
        </div>
    )
}

export default First