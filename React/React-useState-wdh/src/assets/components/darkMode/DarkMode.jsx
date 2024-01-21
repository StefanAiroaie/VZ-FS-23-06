

const DarkMode = ({ darkModeTheme, setDarkmodeTheme }) => {

    const text = darkModeTheme ? 'Now is the DARK Mode active!' : 'Now is the LIGHT Mode active!'; // text to display
    const buttonText = darkModeTheme ? 'Light Mode' : 'Dark Mode';

    const htmlroot = document.querySelector('body'); // select the body element
    htmlroot.classList.toggle("darkMode", darkModeTheme); // toggle the darkMode class
    htmlroot.classList.toggle("lightMode", !darkModeTheme); // toggle the lightMode class


    const toggleDarkMode = () => {
        setDarkmodeTheme(!darkModeTheme);
    };

    return (
        <>
            <div>
                <h2>{text}</h2>
                <button onClick={toggleDarkMode}>{buttonText}</button>
            </div >
        </>
    );
};

export default DarkMode