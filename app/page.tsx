import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Story } from "@/components/story";
import { Menu } from "@/components/menu";
import { Cafe } from "@/components/cafe";
import { Reviews } from "@/components/reviews";
import { Orders } from "@/components/orders";
import { Faq } from "@/components/faq";
import { Visit } from "@/components/visit";
import { Instagram } from "@/components/instagram";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Cafe />
        <Reviews />
        <Orders />
        <Faq />
        <Visit />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}
