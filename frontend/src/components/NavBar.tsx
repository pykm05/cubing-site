import { useNavigate } from 'react-router-dom'

function NavBar() {

    const navigate = useNavigate();

    return (
        <nav className="flex flex-col absolute gap-20 top-0 left-0 w-60 h-screen bg-sky-50">
            <div>
                <div onClick={() => navigate('/')} className="hover:bg-sky-100 px-5 py-5">Virtual Cube</div>
                <div onClick={() => navigate('/first')} className="hover:bg-sky-100 px-5 py-3">option 1</div>
                <div onClick={() => navigate('/second')} className="hover:bg-sky-100 px-5 py-3">option 2</div>
            </div>
        </nav>
    )
}

export default NavBar