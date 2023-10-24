import dataanalysis from "../../assets/images/dataanalysis.jpg";
import cropmonitoring from "../../assets/images/cropmonitoring.jpg";
import inventory from "../../assets/images/inventory.jpg";
import sharing from "../../assets/images/sharing.jpg";
import market from "../../assets/images/market.jpg";
import scheduling from "../../assets/images/scheduling.jpg";

export default function Services(props) {
  return (
    <div className="services">
      <div className="container">
        <h3>What We Do</h3>
        <h1>Available Services</h1>
        <div className="ssections">
          <Section
            txt="Data Collection and Analysis"
            desc="Collect and analyze data on crops, weather patterns, soil conditions, pests, and more to make informed decisions and improve agricultural practices."
            img={dataanalysis}
          />
          <Section
            txt="Crop Monitoring"
            desc=" Monitor crop growth, health, and yield through advanced sensors and remote sensing technologies. Receive real-time alerts and insights to optimize crop management."
            img={cropmonitoring}
          />
          <Section
            txt="Inventory Management"
            desc="Efficiently track and manage inventory, including seeds, fertilizers, and equipment, ensuring smooth operations and minimizing waste."
            img={inventory}
          />
          <Section
            txt="Marketplace Integration"
            desc="Connect with buyers, suppliers, and distributors through our integrated marketplace, enabling seamless transactions and expanding market reach."
            img={market}
          />
          <Section
            txt="Farm Management"
            desc="Streamline farm operations with features like task scheduling, resource allocation, and farm financial management, maximizing efficiency and profitability."
            img={scheduling}
          />
          <Section
            txt="Knowledge Sharing"
            desc="Access a vast repository of agricultural knowledge, best practices, and research findings. Collaborate with experts, share experiences, and learn from the global farming community."
            img={sharing}
          />
        </div>
      </div>
    </div>
  );
}

const Section = (props) => {
  return (
    <div className="ssection">
      <div>
        <h4>{props.txt}</h4>
        <p>{props.desc}</p>
      </div>

      <img src={props.img} alt="" />
    </div>
  );
};
