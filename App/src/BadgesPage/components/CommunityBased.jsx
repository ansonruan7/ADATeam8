import "./communitybased.css";
import threeFriends from "../images/chat 3 friends.png";
import fiveFriends from "../images/chat 5 friends.png";

function CommunityBased() {
  return (
    <div className="container">
      <h3 className="heading">Community Based</h3>
      <img className="threeFriends" src={threeFriends} alt="threeFriends" />
      <img className="fiveFriends" src={fiveFriends} alt="fiveFriends" />
    </div>
  );
}

export default CommunityBased;