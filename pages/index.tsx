import Head from "next/head";
import axios from "axios";
import { useEffect } from "react";

import img from "../public/jornalismo.jpeg";

export default function Home({ ip }) {
  useEffect(() => {
    const api = axios.create({ baseURL: "https://fofocando.herokuapp.com/" });
    api
      .post("/", { ipAddress: ip })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, [ip]);

  const currentURL = "http://fofocando.vercel.com.br";
  const previewImage =
    "https://www.tupi.fm/wp-content/uploads/2019/08/repórter-300x140.png";
  const siteName = "Fofocando Maringá";
  const pageTitle = "Bomba Jornalista de Maringá trai esposa";
  const description =
    "Um jornalista de Maringá está enfrentando uma situação complicada em sua vida conjugal....";

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org"></a>
        </h1>
      </main>
    </div>
  );
}

Home.getInitialProps = async ({ req }) => {
  const ip = req.headers["x-real-ip"] || req.connection.remoteAddress;
  return { ip };
};
