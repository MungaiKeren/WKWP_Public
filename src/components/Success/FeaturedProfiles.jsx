import user from "../../assets/images/user-icon.png";
import quote from "../../assets/images/Quote.png";

const FeaturedProfiles = () => {
  return (
    <div className="profiles">
      <h3>Featured Profiles</h3>
      <hr />

      <div className="two-equal">
        <Profile
          text="As the Chief of Party for the Western Kenya water project, I am immensely proud of the transformative journey that our project has embarked upon. We have witnessed the resilience, determination, and unity of the Kipkelion community, and together, we have achieved something truly remarkable."
          name="Japheth Mbuvi"
          role="WKWP Chief of Party"
        />
        <Profile
          text="Our journey is far from over. We will continue to work hand in hand with the people of Kipkelion to ensure the sustainability of this vital resource and to explore other opportunities for community development. The story of Kipkelion is one of transformation, and we are committed to building upon this success for a brighter, more prosperous future for all"
          name="Japheth Mbuvi"
          role="WKWP Deputy Chief of Party"
        />
        <Profile
          text="But this project's success is not solely our achievement. It is the result of a collective effort involving the community members, local leaders, our dedicated team, and the generous support of our donors. It's a testament to what can be accomplished when we work together toward a common goal."
          name="Mutisya Mulanga"
          role="MEL Lead"
        />
        <Profile
          text="In the beginning, our vision was simple: to provide clean and accessible water to the people of Kipkelion. We understood the hardships they faced, the long journeys they undertook, and the health risks they encountered daily. It was our shared commitment to make a difference that drove us forward."
          name="Japheth Mbuvi"
          role="MEL Specialist"
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
