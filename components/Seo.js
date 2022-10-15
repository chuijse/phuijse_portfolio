import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo({
  pageTitle = "Pablo huijse portfolio",
  description = "Pablo huijse is an active university teacher and resarcher, his is especialist in machine learnig, deep learnig, information theory, bayesian Inference, statistical signal processing and astro informaticas",
  icon = "/favicon.ico",
  icon16 = "/favicon-16x16.png",
  icon32 = "/favicon-32x32.png",
  iconApple = "/apple-touch-icon.png",
  image = "/meta-data.jpg",
  year = "2022",
  author = "Cristian Huijse Heise",
  //linkedin = "https://cl.linkedin.com/in/pablohuijse",
  github = "https://github.com/phuijse",
  article = false,
  domain = "next-web-rose.vercel.app",
  keywords = "machine learnig, deep learnig, information theory, bayesian Inference, statistical signal processing, astro informatics, electronic enginering, software developer",
}) {
  const router = useRouter();
  return (
    <Head>
      <title>{`PHH | ${pageTitle}`}</title>
      <meta name="title" content={`PHH | ${pageTitle}`}></meta>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="year" content={year} />
      <meta name="author" content={author} />
      <meta name="github" content={github} />
      <meta name="keywords" content={keywords} />
      <meta name="Revisit-after" content="1 days" />
      <meta name="robots" content="index, follow" />
      {/* Facebook Meta Tags */}
      <meta property="og:title" content={`PHH | ${pageTitle}`} key="title" />
      <meta property="og:type" content={article ? "article" : "webpage"} />
      <meta
        property="og:url"
        content={router.route === "/" ? domain : `${domain}${router.pathname}`}
      />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} key="description" />
      <meta property="og:site_name" content="Cristian Huijse Portfolio" />
      <meta property="og:author" content={author} />
      {/* Twitter Meta Tags */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={`PHH | ${pageTitle}`} />
      <meta
        property="twitter:url"
        content={router.route === "/" ? domain : `${domain}${router.pathname}`}
      />
      <meta property="twitter:domain" content={domain} />{" "}
      {/* cambiar por chh.work en el futuro */}
      <meta property="twitter:description" content={description} />
      <meta property="twitter:author" content={author} />
      <meta property="twitter:image" content={image} />
      {/* email */}
      <meta name="reply-to" content="pablo.huijse@gmail.com" />
      <link rev="made" href="mailto:pablo.huijse@gmail.com" />
      {/*icons*/}
      <link rel="apple-touch-icon" sizes="180x180" href={iconApple} />
      <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
      <link rel="manifest" href="/site.webmanifest"></link>
    </Head>
  );
}
