import NewPost from "../components/News/NewPost";
import Header from "../components/Utils/header";
import "../Styles/create.scss";


export default function NewsCreate(props) {

  return (
    <div className="News">
      <Header />
        <div>
          <NewPost />
        </div>
    </div>
  );
}
