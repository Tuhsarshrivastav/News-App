import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Toolbar } from "../components/toolbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News-App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-container">
        <Toolbar />
        <div className={styles.main}>
          <h1>Next.js News App</h1>
          <h3>Your one step for the latest news articles</h3>
        </div>
      </div>
    </div>
  );
}
