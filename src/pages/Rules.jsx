import { useRef } from "react";
import { Link } from "react-router-dom";

function Rules() {
    const bodyBg = useRef(document.body)
    bodyBg.current.style.background = "rgb(153, 153, 255)"
  return (
    <>
      <div className="main-wrapper">
        <p>
            შენი მიზანია მოცემული სიტყვა რაც შეიძლება სწრაფად ჩაწერო 
            გრაფაში. თითოეულ სიტყვის სწორად ჩაწერაში იღებ 1 ქულას 
            და ასევე დროის 1 ერთეულს.
            დროის ამოწურვის შემდეგ თამაში სრულდება.
            მნიშვნელობა არ აქვს დიდი ასოებით დაიწერება სიტყვა თუ პატარით.
        </p>
        <li>
          <Link to={"/"}>უკან დაბრუნება</Link>
        </li>
      </div>
    </>
  );
}
export default Rules;
