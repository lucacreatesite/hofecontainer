
function Sortiment(props){
    return(
        <div className="sortiment">
            <img src={props.Produktbild} alt="Produktbild" />
            <h3>{props.Produktname} </h3>
            <p>{props.Produktbeschreibung}</p>
            <p>Bezug: {props.Bezug}</p>
            <p>Saison: {props.Saison}</p>
        </div>

    );
}
export default Sortiment