import { LAMPORTS_PER_SOL, Connection } from "@solana/web3.js"
import React, { useState, useEffect, useCallback } from "react"
import ReactXnft, { Text, View, usePublicKey, Button } from "react-xnft"
//
// On connection to the host environment, warm the cache.
//
ReactXnft.events.on("connect", () => {
  // no-op
})

export function Tab2() {
  const publicKey = usePublicKey()
  const connection = new Connection("https://api.devnet.solana.com/")

  const [balance, setBalance] = useState(0)

  const getBalance = useCallback(async () => {
    const balance = await connection.getBalance(publicKey, "confirmed")
    setBalance(parseFloat((balance / LAMPORTS_PER_SOL).toFixed(2)))
  }, [publicKey])

  useEffect(() => {
    getBalance()
  }, [publicKey])

  const airdrop = useCallback(async () => {
    const transactionSignature = await connection.requestAirdrop(
      publicKey,
      2 * LAMPORTS_PER_SOL
    )

    const latestBlockHash = await connection.getLatestBlockhash()
    await connection.confirmTransaction({
      blockhash: latestBlockHash.blockhash,
      lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
      signature: transactionSignature,
    })

    getBalance()
  }, [publicKey])

  return (
    <View
      style={{
        textAlign: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: 400,
          margin: "12px",
        }}
      >
        Tab One
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: "15px",
          fontWeight: 100,
          lineHeight: "150%",
          margin: "12px",
        }}
      >
        Balance is {balance}
      </Text>

      <Button
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "15px",
          fontWeight: 100,
          lineHeight: "150%",
          margin: "12px",
        }}
        onClick={() => airdrop()}
      >
        Airdrop
      </Button>
    </View>
  )
}
