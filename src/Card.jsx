import furitPic from './assets/erdbeere.webp'


function Card() {

    return(
        <div className="card">
            <img className = "card-image"src={furitPic} alt= "Erdbeere"></img>
            <h2 className="card-title">Erdbeeren</h2>
            <p2 className="card-text">Frisch und Fruchtig</p2>



        </div>

    );
}

export default Card