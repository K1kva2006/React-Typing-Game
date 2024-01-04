import { useRef } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const bodyBg = useRef(document.body)
  bodyBg.current.style.background = "rgb(153, 153, 255)"
  return (
    <>
      <div className="main-wrapper">
        <ul>
          <li>
            <Link to={"/play"}>თამაშის დაწყება</Link>
          </li>
          <li>
            <Link to={"/rules"}>წესები</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
