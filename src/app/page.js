import Environmetn from "@/components/Environment";
import HeroSection from "@/components/HeroSection";
import Journy from "@/components/Journy";
import Look from "@/components/Look";
import Map from "@/components/Map";
import Partner from "@/components/Partnet";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container bg-white mx-auto">
      <HeroSection></HeroSection>
      <Map />
      <Journy />
      <Environmetn />
      <Partner />
      <Look/>

    </main>
  );
}
