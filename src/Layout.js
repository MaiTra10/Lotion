import { useState } from "react";

function Layout() {

    const [menu, menuToggle] = useState(false);

    function menuClick() {

        menuToggle(menu => !menu);

    }

    let checkMenuToggle = menu ? " toggle_menu": "";

    return (

        <>
            <nav>
                <ul>
                    <li>
                        <button onClick={menuClick}>&#9776;</button>
                    </li>
                    <li>
                        <h1>Lotion</h1>
                        <h2>Like Notion, but not even functional...</h2>
                    </li>
                    <li></li>
                </ul>
            </nav>
            <div className="workspace">
                <div className={`notes_space${checkMenuToggle}`}>
                    <div className="top_bar">
                        <h1>Notes</h1>
                        <button>+</button>
                    </div>
                    <div className="notes_list">
                    </div>
                </div>
                <div className="edit_space">Edit</div>
            </div>
        </>

    )

};

export default Layout;