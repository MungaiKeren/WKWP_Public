export default function BlogPost(props) {
  return (
    <div
      className="newsBox"
      onClick={() => {
        window.location.href = `/news/${props.item.ID}`;
      }}
    >
      <img
        src={`/api/${props.item.Image}`}
        alt={`${props.item.Title}`}
      />
      <h4>
        {props.item.Title.length > 36
          ? props.item.Title.substring(0, 36) + "..."
          : props.item.Title + ": " +
            props.item.Description.substring(0, 34 - props.item.Title.length) + "..."}
      </h4>
      <p>{props.item.Type}</p>
      <h6>{props.item.createdAt.split("T")[0]} : {props.item.createdAt.split("T")[1].split(".")[0].substring(0, 5)}hrs</h6>
    </div>
  );
}
