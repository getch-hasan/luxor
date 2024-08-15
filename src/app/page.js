import Award from "@/components/Awart";
import Bannar from "@/components/Bannar";
import Environmetn from "@/components/Environment";
import Gallary from "@/components/Gallery";
import HappyCustomer from "@/components/HappyCoustomer";
import HeroSection from "@/components/HeroSection";
import Journy from "@/components/Journy";
import Look from "@/components/Look";
import Map from "@/components/Map";
import New from "@/components/New";
import Partner from "@/components/Partnet";
import World from "@/components/World";

export default function Home() {
  return (
    <main className="container bg-white mx-auto">
      <Bannar />
      <HeroSection></HeroSection>
      <Map />
      <New></New>
      <World></World>
      <Journy />
      <Environmetn />
      <Gallary />
      <Partner />
      <Look />
      {/* <HappyCustomer/> */}
      <Award />

    </main>
  );
}
