import "./Avatar.scss";
import avatar from "../../assets/avatar.png";
export default function Avatar({ avatar }) {
  return (
    <div className="avatar">
      <img src={avatar} alt="avatar of the user"></img>
    </div>
  );
}