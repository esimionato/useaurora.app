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
    </Head>

    <Hero />
    <HeroImage />
    <Features />
    <CallToAction />
  </main>
);

export default Index;
