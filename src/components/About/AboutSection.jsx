import Tap from "../../assets/images/TapAbout2.jpg";

export default function AboutSection(props) {
    return (
      <div className="about">
        <div className="left">
          <h4>
            <span>About </span>WKWP
          </h4>
          <p>
            The Western Kenya water project is supporting the Government of
            Kenya and the County Governments of Bungoma, Busia, Homabay,
            Kakamega, Kisii, Kisumu, Mirogi and Siaya to increase sustained
            access to water services while enabling better management of water
            resources. The project brings together the different components
            critical to county-wide sustained service delivery. These components
            are Urban and rural water services, Water Resource Management, and
            the good governance and financing stategies. The project aims to
            provide basic drinking water services to over 500,000 Kenyans,
            improve service quality to over 350,000 Kenyans, and improve water
            resource management for the benefit of 300,000 Kenyans by the end of
            five years. It will help mobilize USD $15 million in new public and
            private sector funding for the benefit of the sector.
          </p>
        </div>
        <div className="right">
          <img src={Tap} alt="" />
        </div>
      </div>
    );
}