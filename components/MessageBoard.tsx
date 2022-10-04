import InputSend from "./InputSend";
import { useContractRead, useAccount } from "wagmi";
import { useEffect, useState } from "react";
import contractABI from "../abi/contractABI.json";
import { ethers } from "ethers";

export default function MessageBoard({ styles }: any) {
  const [latestFive, setLatestFive] = useState([]);
  const [announcement, setAnnouncement] = useState('')
  const [announcementLastPaidVal, setAnnouncementLastPaidVal] = useState(0);
  const { address } = useAccount();
  const getLatestFive = useContractRead({
    addressOrName: "0x5442dC15613dD6B6eA3E74dea9F9AC954B3DA898",
    contractInterface: JSON.stringify(contractABI),
    functionName: "showLastestMsg",
    args: ["5", address],
    chainId: 5,
    watch: true,
  });

  const geAannouncementLastPaidVal = useContractRead({
    addressOrName: "0x5442dC15613dD6B6eA3E74dea9F9AC954B3DA898",
    contractInterface: JSON.stringify(contractABI),
    functionName: "announcementLastPaidVal",
    chainId: 5,
    watch: true,
  });

  const getAnnouncement = useContractRead({
    addressOrName: "0x5442dC15613dD6B6eA3E74dea9F9AC954B3DA898",
    contractInterface: JSON.stringify(contractABI),
    functionName: "announcement",
    chainId: 5,
    watch: true,
  });

  useEffect(() => {
    setLatestFive(getLatestFive.data);
    setAnnouncementLastPaidVal(
      ethers.utils.formatEther(geAannouncementLastPaidVal.data)
    );
    setAnnouncement(getAnnouncement.data);
  }, [
    getLatestFive.data,
    geAannouncementLastPaidVal.data,
    getAnnouncement.data,
  ]);

  return (
    <div className={styles.centerWrap}>
      <span className={styles.chatroomTitle}>Chatroom</span>
      {announcement && (
        <div className={styles.announcement}>Announcement: <br/>{announcement}</div>
      )}
      {announcementLastPaidVal && (
        <div className={styles.lastPay}>The last time payment : {announcementLastPaidVal} ETH</div>
      )}
      <div className={styles.message}>
        {latestFive && <pre>&gt; {latestFive.join("\r\n> ")}</pre>}
      </div>
      <InputSend styles={styles} />
    </div>
  );
}
