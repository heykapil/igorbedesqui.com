export default function bebop() {
  const { t, lang } = useTranslation("projs/bebop");
  const bebopMeta = useMeta("bebop", "projs");
  return (
    <>
      <Seo t={t} lang={lang} url="p/bebop" />

      <ProjectContainer key="bebopProj" backMessage={t("backMessage")}>
        <HeroBand heroVideo={"/videos/bebop/noodles"}>
          <TransWithComps i18nKey={"projs/bebop:heroTitle"} />
          <div className="mt-6">
            <CodeAndDemoButtons
              codeUrl="https://github.com/bdsqqq/bebop-webjam"
              demoUrl="https://bebop-webjam.vercel.app/"
            />
          </div>
        </HeroBand>

        <Band headline={{ bold: "01", thin: t("01Thin") }}>
          <p className="text-xl md:text-2xl max-w-[30em] mx-auto">
            <TransWithComps
              i18nKey={"projs/bebop:01Copy"}
              extraComponents={{
                hc: (
                  <HoverCard
                    content={
                      <TransWithComps i18nKey={"projs/bebop:webjamHc"} />
                    }
                  ></HoverCard>
                ),
                s: <span className="cursor-pointer font-bold"></span>,
              }}
            />
          </p>
        </Band>
        <Band dark headline={{ bold: "02", thin: t("02Thin") }}>
          <p className="text-xl md:text-2xl max-w-[30em] mx-auto">
            <TransWithComps i18nKey={"projs/bebop:02Copy"} />
          </p>
        </Band>
        {/*<Band gridless id="references"></Band> */}
        <Band dark headline={{ bold: "03", thin: t("03Thin") }}>
          <p className="text-xl md:text-2xl max-w-[30em] mx-auto">
            <TransWithComps i18nKey={"projs/bebop:03Copy"} />
          </p>
        </Band>
        <Band headline={{ bold: "04", thin: t("04Thin") }}>
          <p className="text-xl md:text-2xl">
            <TransWithComps
              i18nKey={"projs/bebop:04IntroCopy"}
              extraComponents={{
                a: (
                  <UnstyledLink
                    className="font-bold border-current border-solid border-b-2 opacity-90 hover:opacity-100 focus:opacity-100 transition"
                    href="https://bebop-webjam.vercel.app/"
                  ></UnstyledLink>
                ),
              }}
            />
          </p>
          <div className="grid grid-cols-4 gap-2 md:gap-4 h-96 my-4">
            <div className="relative col-start-1 col-end-2 w-full h-full">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/projs/bebop/smartphone-screenshot.png"
              ></Image>
            </div>
            <div className="relative col-start-2 col-end-5 w-full h-full">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/projs/bebop/desktop-screenshot.png"
              ></Image>
            </div>
          </div>
          <p className="text-xl md:text-2xl">
            <TransWithComps i18nKey={"projs/bebop:04Copy"} />
          </p>
        </Band>
        <DetailsBand id="details" projMeta={bebopMeta} t={t} />
      </ProjectContainer>
      <FABContainer>
        <BackToTop />
      </FABContainer>
    </>
  );
}

import useTranslation from "next-translate/useTranslation";
import TransWithComps from "@/components/i18nStuff/TransWithComps";

import ProjectContainer from "@/components/ProjectStuff/ProjectContainer";
import CodeAndDemoButtons from "@/components/ProjectStuff/CodeAndDemoButtons";
import Seo from "@/components/Seo";
import Band from "@/components/Band";
import HeroBand from "@/components/HeroBand";
import DetailsBand from "@/components/Bands/DetailsBand";
import HoverCard from "@/components/ui/HoverCard";
import Image from "next/image";
import { FABContainer, UnstyledLink } from "@/ui/primitives/";
import BackToTop from "@/components/ui/BackToTop";

import useMeta from "@/hooks/useMeta";
