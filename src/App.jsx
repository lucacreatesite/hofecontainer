import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Sortiment from "./Sortiment.jsx";
import furitPic from './assets/erdbeere.webp'
import heidelbeere from './assets/heidelbeere.jpeg'
import hofcontainerVisual from './assets/HofcontainerDesign2.png'


function App() {


  return(
    <>
      
      <Header></Header>
      <div className="landingFirst">
        <img className="landingPicture" src={hofcontainerVisual}></img>
      </div>
      

      <Sortiment 
      Produktbild= {furitPic}
      Produktname="Erdbeeren" 
      Produktbeschreibung="Frisch und Lecker"
      Bezug="Müller Beeren Egnach"
      Saison="Mai-Oktober"
      ></Sortiment>

      <Sortiment 
      Produktbild= {heidelbeere}
      Produktname="Heidelbeere" 
      Produktbeschreibung="Blaueswunder aus Appenzell"
      Bezug="Eigener Betrieb"
      Saison="Juni-September"
      ></Sortiment>

      <Sortiment 
      Produktbild= {furitPic}
      Produktname="Brombeere" 
      Produktbeschreibung="Violleter Traum aus Appenzell"
      Bezug="Eigener Betrieb"
      Saison="Juli-August"
      ></Sortiment>

      <Sortiment 
      Produktbild= {heidelbeere}
      Produktname="Johanisbeere" 
      Produktbeschreibung="Rote Vitaminbombe"
      Bezug="Müller Beeren Egnach"
      Saison="Juli-August"
      ></Sortiment>

      <Sortiment 
      Produktbild= {heidelbeere}
      Produktname="Johanisbeere" 
      Produktbeschreibung="Rote Vitaminbombe"
      Bezug="Müller Beeren Egnach"
      Saison="Juli-August"
      ></Sortiment>

      <Sortiment 
      Produktbild= {heidelbeere}
      Produktname="Johanisbeere" 
      Produktbeschreibung="Rote Vitaminbombe"
      Bezug="Müller Beeren Egnach"
      Saison="Juli-August"
      ></Sortiment>

      <Sortiment 
      Produktbild= {heidelbeere}
      Produktname="Johanisbeere" 
      Produktbeschreibung="Rote Vitaminbombe"
      Bezug="Müller Beeren Egnach"
      Saison="Juli-August"
      ></Sortiment>

      <Sortiment 
      Produktbild= {heidelbeere}
      Produktname="Johanisbeere" 
      Produktbeschreibung="Rote Vitaminbombe"
      Bezug="Müller Beeren Egnach"
      Saison="Juli-August"
      ></Sortiment>

      
      <Footer></Footer>

    </>
    );

}

export default App
