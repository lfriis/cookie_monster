import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { Header, Footer } from "~/layouts";

interface PageProps {
  children: React.ReactNode;
}

const Home: NextPage<PageProps> = ({ children }) => {
  const { status } = useSession();
  const loading = status === "loading";
  const loggedIn = status === "authenticated";

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <Head>
        <title>Crumbs {">"} Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {loggedIn && <Header />}
        {children}
        {loggedIn && <Footer />}
      </main>
    </>
  );
};

export default Home;
