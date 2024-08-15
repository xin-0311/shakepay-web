"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import PageFour from "./page-four";
import PageOne from "./page-one";
import PageThree from "./page-three";
import PageTwo from "./page-two";
import TradePairs from "./trade";
import { LazyMotion, m } from "framer-motion"
const loadFeatures = () =>
  import("../features.js").then(res => res.default)

export default function HomePage () {

  return (
    <LazyMotion features={loadFeatures}>
      <Header />
      <PageOne />
      <PageTwo />
      <TradePairs />
      <PageThree />
      <TradePairs />
      <PageFour />
      <Footer />
    </LazyMotion>
  )
}