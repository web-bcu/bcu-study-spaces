import Footer from "@/components/Footer";
import HeroContent from "@/components/HeroContents";
import HomeComponent from "@/components/HomeComponent";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <HeroContent/>
      <HomeComponent/>
      <Footer/>
    </Layout>
  )
}