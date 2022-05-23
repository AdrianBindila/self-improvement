import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Post(props) {
  const [clicked, setClicked] = useState(false);
  const [content, setContent] = useState(() => {
    return props.post ? props.post.content.substring(0, 100) + " ..." : "";
  });

  function handleClick() {
    setClicked((prev) => !prev);
    !clicked
      ? setContent(props.post.content)
      : setContent(props.post.content.substring(0, 100) + " ...");
  }
  return (
    <div className="py-lg-5">
      <h1>{props.post.title}</h1>
      <p>Written by {props.post.author}</p>
      <h5>{content} </h5>
      <button onClick={handleClick}>
        Read {!clicked ? <>More</> : <>Less</>}
      </button>
    </div>
  );
}
export default Post;
