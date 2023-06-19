import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Slides from "./Components/Slides";

import "./Styles/app.css";

import img1 from "./img/menstTrack.webp"
import img2 from "./img/conception.jpg";
import img3 from "./img/pregnancy.jpg"
import img4 from "./img/earlymotherhood.jpg"
import img5 from "./img/menopause.jpg";

import data from "./data/data.json";


function App() {
  return (

    <div className="App">
      <Header />
      <Banner />
      <Slides />
      <Section img={img1} h2={data[0].heading} text={data[0].text} btn={data[0].btn} flag={true} id={data[0].id} />
      <Section img={img2} h2={data[1].heading} text={data[1].text} btn={data[1].btn} flag={false} id={data[1].id} />
      <Section img={img3} h2={data[2].heading} text={data[2].text} btn={data[2].btn} flag={true} id={data[2].id} />
      <Section img={img4} h2={data[3].heading} text={data[3].text} btn={data[3].btn} flag={false} id={data[3].id} />
      <Section img={img5} h2={data[4].heading} text={data[0].text} btn={data[4].btn} flag={true} id={data[4].id} />
      <Footer />
    </div>
  );
}

export default App;
