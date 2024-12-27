import { useNavigate, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
    { name : "Virtual Cube", path : "/" },
    { name : "first", path : "/first" },
    { name: "second", path : "/second" }
]

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <aside className="w-52 h-screen flex flex-col bg-sky-50">
            <div>
                {NAV_ITEMS.map(({ name , path }) => (
                    <div onClick={() => (navigate(path))} className={`px-5 py-5 ${location.pathname === path ? "bg-sky-200" : "bg-sky-50 hover:bg-sky-100"}`} key={path} >
                        {name}
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default NavBar;
