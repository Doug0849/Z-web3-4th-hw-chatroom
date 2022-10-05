import { ethers } from "ethers";
import { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import contractABI from "../abi/contractABI.json";

export default function NewAnnouncementBtn({ input }: any) {
  const [pay, setPay] = useState("0");
  const { config } = usePrepareContractWrite({
    addressOrName: "0x5442dC15613dD6B6eA3E74dea9F9AC954B3DA898",
    contractInterface: contractABI,
    functionName: "newAnnouncement",
    args: [input, { value: ethers.utils.parseEther(pay) }],
    chainId: 5,
  });

  const { data, isLoading, isSuccess, write, status } =
    useContractWrite(config);

  return (
    <>
      <input
        type="text"
        style={{ width: "150px", marginRight: "5px", marginLeft: "5px" }}
        placeholder="How much ETH you wanna pay"
        value={pay}
        onChange={(event) => setPay(event.target.value)}
      />
      ETH
      <button
        type="submit"
        style={{ marginLeft: "5px", marginRight: "5px" }}
        disabled={!write}
        onClick={() => {
          write?.();
          setPay("0");
        }}
      >
        New Announcement
      </button>
      <span style={{ color: "grey", width: "340px", marginBottom: "5px" }}>
        Tx Status: {status}
      </span>
    </>
  );
}
