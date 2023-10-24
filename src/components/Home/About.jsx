import aboutimg from "../../assets/images/aboutimage.png";
export default function About(props) {
  return (
    <div className="about">
      <div className="container">
        <div className="div2equal">
          <img src={aboutimg} alt="" />
          <div className="right">
            <h3>About The System</h3>
            <h1>Centralized Data and Services</h1>

            <p>
              The Kirinyaga Agricultural Management Information System (Kiri
              AMIS) is developed by the Department of Agriculture, Livestock,
              Fisheries and Veterinary Services (ALFVS) with technical
              assistance from <a href="https://osl.co.ke">Oakar Services Ltd</a>{" "}
              under the National Agricultural Rural Inclusive Growth Project
              (NARIGP) a World Bank funded project. Kiri AMIS is a pioneering
              step towards modernizing the agriculture sector in Kirinyaga
              County.
            </p>
            <p>
              Kiri AMIS consists of a range of web and mobile applications to
              manage accurate data and streamline the operational aspects of the
              agriculture sector by connecting all stakeholders in to one hub.
            </p>
            <p>
              Kiri AMIS carries a centralized database that consists of farmer
              and farm field information along with geographical referencing,
              location data, fertilizer and many more details to facilitate the
              current requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
