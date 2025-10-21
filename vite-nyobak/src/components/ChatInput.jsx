import { useState } from "react";

function ChatInput() {
  return (
    <div className="input-box">
      <input type="text" placeholder="Text here....." size={40} />
      <button>send</button>
    </div>
  );
}

export default ChatInput;
