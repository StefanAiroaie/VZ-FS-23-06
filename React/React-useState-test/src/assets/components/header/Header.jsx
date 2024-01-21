
import "./header.css";
const Header = ({ darkMode, setDarkMode }) => {


    return (
        <>
            <main className={`${darkMode ? "dark" : "light"}`}>
                <button onClick={() => setDarkMode(!darkMode)}> Change mode</button>








            </main>

        </>
    );
};

export default Header;