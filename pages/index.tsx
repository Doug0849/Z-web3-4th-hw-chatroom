import type { NextPage } from "next";
import Head from "next/head";
import LeftBoard from "../components/LeftBoard";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

import NonSSRWrapper from "../components/NoSSRWrapper";
import MessageBoard from "../components/MessageBoard";
import RightBoard from "../components/RightBoard";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dhal 4th week home work chatroom</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav styles={styles} />
      <main className={styles.main}>
        {/* nonSSR -> prevent hydration error */}
        <NonSSRWrapper>
          <LeftBoard styles={styles} />
          <MessageBoard styles={styles} />
          <RightBoard styles={styles} />
        </NonSSRWrapper>
      </main>
      <footer className={styles.footer}>
        <a href="https://rainbow.me" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  );
};

export default Home;
