import hofcontainerVisual from './assets/HofcontainerDesign2.png'
function Header(){

    return(
        <header className="headerTitle">
            <h1>Hofcontainer Webseite</h1>
            <nav>
                <ul className="headerNav">
                    <li><a href = "#">Home</a></li>
                    <li><a href = "">Über uns</a></li>
                    <li><a href = "">Produkte</a></li>
                    <li><a href = "">Aktuelles</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    )
}

export default Header