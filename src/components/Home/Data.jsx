import farmer from "../../assets/images/farmer.png";
import fertilizer from "../../assets/images/fertilizer.png";
import info from "../../assets/images/info.png";
import stakeholder from "../../assets/images/stakeholder.png";
import weather from "../../assets/images/weather.png";
import partners from "../../assets/images/partners.png";
import eservices from "../../assets/images/eservices.png";
import news from "../../assets/images/news.png";

export default function Data(props) {
  return (
    <div className="data">
      <div className="container">
        <h3>Access</h3>
        <h1>Available Data</h1>
        <div className="dsections">
          <Section txt="Farmers Data" img={farmer} />
          <Section txt="Fertilizers Data" img={fertilizer} />
          <Section txt="Agricultural Info" img={info} />
          <Section txt="Extension Services Data" img={eservices} />
          <Section txt="Stakeholders Data" img={stakeholder} />
          <Section txt="News and Trends" img={news} />
          <Section txt="Partners Data" img={partners} />
          <Section txt="Weather and Advisory" img={weather} />
        </div>
      </div>
    </div>
  );
}

const Section = (props) => {
  return (
    <div className="dsection">
      <img src={props.img} alt="" />
      <h4>{props.txt}</h4>
    </div>
  );
};
