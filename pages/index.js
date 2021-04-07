import Head from "next/head";
import Hero from "../components/Hero";
import HeroImage from "../components/HeroImage";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";

const Index = () => (
  <main className="bg-gray-50">
    <Head>
      <title>Aurora - Open Source Analytics Platform</title>
      <meta
        name="description"
        content="Aurora is the Open Source Cookieless Analytics Platform - Designed for Humans & Developers"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://www.useaurora.app" />
      <meta name="twitter:site" content="@itsrennyman" />
      <meta name="twitter:creator" content="@itsrennyman" />
      <meta name="twitter:title" content="Use Aurora!" />
      <meta
        name="twitter:description"
        content="Open Source Cookieless Analytics Platform - Designed for Humans & Developers"
      />
      <meta
        name="twitter:image:src"
        content="https://www.useaurora.app/og.png"
      />
    </Head>

    <Hero />
    <HeroImage />
    <Features />
    <CallToAction />
  </main>
);

export default Index;
