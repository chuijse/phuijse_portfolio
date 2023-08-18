import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo({
  pageTitle = "Pablo Huijse's personal website",
  description = "Pablo Huijse is an assistant professor at Universidad Austral de Chile and young researcher at the Millennium Institute of Astrophysics. His research is on machine learning and data science with applications in astronomy and engineering.",

  icon16 = "/favicon-16x16.png",
  icon32 = "/favicon-32x32.png",
  icon96 = "/favicon-96x96.png",
  icon192 = "/android-icon-192x192.png",
  iconApple57 = "/apple-icon-57x57.png",
  iconApple60 = "/apple-icon-60x60.png",
  iconApple72 = "/apple-icon-72x72.png",
  iconApple76 = "/apple-icon-76x76.png",
  iconApple114 = "/apple-icon-114x114.png",
  iconApple144 = "/apple-icon-144x144.png",
  iconApple152 = "/apple-icon-152x152.png",
  iconApple180 = "/apple-icon-180x180.png",
  image = "/meta-data.jpg",
  year = "2023",
  author = "Cristian Huijse Heise",
  //linkedin = "https://cl.linkedin.com/in/pablohuijse",
  github = "https://github.com/phuijse",
  article = false,
  keywords = "pablo huijse, machine learning, deep learning, information theory, bayesian inference, statistical signal processing, astroinformatics, electrical enginering, software developer",
}) {
  const CANONICAL_DOMAIN = "https://www.phh.cl";
  const router = useRouter();

  const _pathSliceLength = Math.min.apply(Math, [
    router.asPath.indexOf("?") > 0
      ? router.asPath.indexOf("?")
      : router.asPath.length,
    router.asPath.indexOf("#") > 0
      ? router.asPath.indexOf("#")
      : router.asPath.length,
  ]);
  const canonicalURL =
    CANONICAL_DOMAIN + router.asPath.substring(0, _pathSliceLength);

  //console.log(canonicalURL);

  return (
    <Head>
      <link rel="canonical" href={canonicalURL} />
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
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} key="description" />
      <meta property="og:site_name" content="Pablo huijse website" />
      <meta property="og:author" content={author} />
      {/* Twitter Meta Tags */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={`PHH | ${pageTitle}`} />
      <meta property="twitter:url" content={canonicalURL} />
      <meta property="twitter:domain" content={CANONICAL_DOMAIN} />{" "}
      {/* cambiar por chh.work en el futuro */}
      <meta property="twitter:description" content={description} />
      <meta property="twitter:author" content={author} />
      <meta property="twitter:image" content={image} />
      {/* email */}
      <meta name="reply-to" content="pablo.huijse@gmail.com" />
      <link rev="made" href="mailto:pablo.huijse@gmail.com" />
      {/*icons*/}
      <link rel="apple-touch-icon" sizes="57x57" href={iconApple57} />
      <link rel="apple-touch-icon" sizes="60x60" href={iconApple60} />
      <link rel="apple-touch-icon" sizes="72x72" href={iconApple72} />
      <link rel="apple-touch-icon" sizes="76x76" href={iconApple76} />
      <link rel="apple-touch-icon" sizes="114x114" href={iconApple114} />
      <link rel="apple-touch-icon" sizes="144x144" href={iconApple144} />
      <link rel="apple-touch-icon" sizes="152x152" href={iconApple152} />
      <link rel="apple-touch-icon" sizes="180x180" href={iconApple180} />
      <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
      <link rel="icon" type="image/png" sizes="96x96" href={icon96} />
      <link rel="icon" type="image/png" sizes="192x192" href={icon192} />
      <link rel="manifest" href="/manifest.json" />
      {/*<meta name="theme-color" content="#ffffff" />*/}
    </Head>
  );
}
