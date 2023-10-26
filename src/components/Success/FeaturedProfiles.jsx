import user from "../../assets/images/user-icon.png";
import quote from "../../assets/images/Quote.png";

const FeaturedProfiles = () => {
  return (
    <div className="profiles">
      <h3>Featured Profiles</h3>
      <hr />

      <div className="two-equal">
        <Profile
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          name="Japheth Mbuvi"
          role="WKWP Chief of Party"
        />
        <Profile
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          name="Japheth Mbuvi"
          role="WKWP Chief of Party"
        />
        <Profile
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          name="Japheth Mbuvi"
          role="WKWP Chief of Party"
        />
        <Profile
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          name="Japheth Mbuvi"
          role="WKWP Chief of Party"
        />
      </div>
    </div>
  );
};
const Profile = (props) => {
  return (
    <div className="item">
      <div className="quote">
        <img src={quote} alt="" />
        <p>{props.text} </p>
      </div>

      <div className="person">
        <div className="image">
          <img src={user} height={30} alt="" />
        </div>
        <div className="txt">
          <p className="name">{props.name}</p>
          <p>{props.role}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProfiles;
