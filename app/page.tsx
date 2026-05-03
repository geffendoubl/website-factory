import { FNav } from "@/components/factory/FNav";
import { FHero } from "@/components/factory/FHero";
import { FTrust } from "@/components/factory/FTrust";
import { FPain } from "@/components/factory/FPain";
import { FPackages } from "@/components/factory/FPackages";
import { FTemplates } from "@/components/factory/FTemplates";
import { FAddons } from "@/components/factory/FAddons";
import { FProcess } from "@/components/factory/FProcess";
import { FWhyUs } from "@/components/factory/FWhyUs";
import { FFAQ } from "@/components/factory/FFAQ";
import { FCTA } from "@/components/factory/FCTA";
import { FFooter } from "@/components/factory/FFooter";
import { FFloatingCTA } from "@/components/factory/FFloatingCTA";

export default function Home() {
  return (
    <>
      <FNav />
      <main>
        <FHero />
        <FTrust />
        <FPain />
        <FPackages />
        <FAddons />
        <FTemplates />
        <FProcess />
        <FWhyUs />
        <FFAQ />
        <FCTA />
      </main>
      <FFooter />
      <FFloatingCTA />
    </>
  );
}
