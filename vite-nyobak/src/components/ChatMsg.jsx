import userImg from "/user.png";
import robotImg from "/robot.png";

function ChatMsg(prop) {
  const { message, sender } = prop;
  if (sender === "robot") {
    return (
      <div>
        <img src={robotImg} alt="" width={40} />
        <p>{message}</p>
      </div>
    );
  }
  return (
    <div>
      <img src={userImg} alt="" width={40} />
      <p>{message}</p>
    </div>
  );
}
export default ChatMsg;
