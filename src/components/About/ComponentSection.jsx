import urban from "../../assets/images/Urban.png";
import rural from "../../assets/images/Rural Water.png";
import wrm from "../../assets/images/WRM.png";
import policy from "../../assets/images/policy.png";
import finance from "../../assets/images/finance.png";

const Components = (props) => {
  return (
    <div className="two-equal">
      <div className="text-center">
        <img src={props.img} alt="" />
      </div>
      <div className="txt">
        <h2>{props.Component}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

const Component2 = (props) => {
  return (
    <div className="two-equal">
      <div className="txt">
        <h2>{props.Component}</h2>
        <p>{props.description}</p>
      </div>
      <div className="text-center">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
};

const ComponentsSection = () => {
  return (
    <div>
      <h4>
        Our
        <span> Work </span>
      </h4>

      <Components
        img={urban}
        Component="Component 1: Urban Water Services"
        description="The project in collaboartion with County governments supports urban water service providers in designing and implementing roadmaps for improvement to structure a realistic and iterative sequence of better customer service and increased revenue, leading to new finance needed for infrastructure improvements and expanded coverage."
      />
      <Component2
        img={rural}
        Component="Component 2: Rural Water Services"
        description="The project enables the identification and development of service delivery models appropriate to the rural operating context of each county"
      />
      <Components
        img={wrm}
        Component="Component 3: Water Resources Management"
        description="The project in collaboration with the county governments, and water resource authority, focuses on increased data availability and data systems to address the lack of sector coordination among upstream and downstream actors; insufficient data to frame dialogue, advocacy, and action; gaps in enforcement and lack of incentives; and capacity gaps at all levels of water resources management."
      />
      <Component2
        img={finance}
        Component="Component 4: Finance and Private Sector Management"
        description="The project works with private sector players, banks, and microfinance institutions to leverage private financing for community water infrastructure projects and working capital loan facilities for water enterprises—creating demonstration models for growth."
      />
      <Components
        img={policy}
        Component="Component 5: Policy and Governance"
        description="The project works with county governments and sector stakeholders to strengthen sector governance and improve coordination—both between the national and county levels and between county governments and water service providers. This is crucial for effective devolved sector governance and to the establishment of incentives for private sector engagement and leadership at decentralized levels."
      />
    </div>
  );
};

export default ComponentsSection;
