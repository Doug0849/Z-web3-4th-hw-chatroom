import { useAccount, useBalance, useEnsName } from "wagmi";

export default function LeftBoard({ styles }: any) {
  const { address, isConnecting, isDisconnected } = useAccount();

  const { data, error, isLoading, refetch } = useEnsName({
    address: "0x08C5E50244FC58bc15Bf07BDAbb67453e624CB17",
    enabled: false,
  });

  const balance = useBalance({
    addressOrName: address,
  });

  return (
    <div className={styles.left}>
      <h2>Account Info</h2>

      {!isConnecting && !isDisconnected && (
        <h4>
          Address: <br />
          {address}
        </h4>
      )}

      <h4>
        ENS:
        <br />
        {data ? JSON.stringify(data) : "You don't have ENS in test chain."}
      </h4>
      {/* <pre>{JSON.stringify(balance, null, 2)}</pre> */}
      {balance.data && (
        <h4>
          Balnce:
          <br />
          {balance.data.formatted} {balance.data.symbol}
        </h4>
      )}
    </div>
  );
}
