import {
  useContractEvent,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import contractABI from "../abi/contractABI.json";

export default function NewMsgBtn({ input }: any) {


  const { config } = usePrepareContractWrite({
    addressOrName: "0x5442dC15613dD6B6eA3E74dea9F9AC954B3DA898",
    contractInterface: contractABI,
    functionName: "newMsg",
    args: [input],
    chainId: 5,
  });

  const { data, isLoading, isSuccess, write, status } =
    useContractWrite(config);

  return (
    <>
      <button
        type="submit"
        style={{ marginLeft: "5px", marginRight: "5px" }}
        disabled={!write}
        onClick={() => write?.()}
      >
        New Message
      </button>
      <span style={{ color: "grey", width: "340px", marginBottom: "5px" }}>
        Tx Status: {status}
      </span>
    </>
  );
}
