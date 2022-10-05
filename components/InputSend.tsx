import { useContractEvent } from "wagmi";
import { useState } from "react";
import contractABI from "../abi/contractABI.json";
import NewMsgBtn from "./NewMsgBtn";
import NewAnnouncementBtn from "./NewAnnouncementBtn";

export default function InputSend({ styles }: any) {
  const [input, setInput] = useState("");

  useContractEvent({
    addressOrName: "0x5442dC15613dD6B6eA3E74dea9F9AC954B3DA898",
    contractInterface: contractABI,
    eventName: "newMessage",
    listener: (event) => {
      // refetch();
    },
  });

  return (
    <div className={styles.inputWrap}>
      <div className={styles.inputMsg}>
        <div className={styles.msgWrap}>
          <input
            style={{ width: "200px" }}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="What do you want to say ?"
          ></input>
          <NewMsgBtn input={input} />
        </div>
        <div className={styles.msgWrap}>
          <NewAnnouncementBtn input={input} />
        </div>
      </div>
    </div>
  );
}
