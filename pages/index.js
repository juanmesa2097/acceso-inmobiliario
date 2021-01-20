import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container h-full">
      <Head>
        <title>Welcome to next starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="mt-16 text-4xl font-bold text-center">
          Welcome to <a href="https://nextjs.org">Next.js starter!</a>
        </h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
