import { useState, useEffect } from "react";
import Image from "next/dist/client/image";

// STYLES
import { ImageHolder } from "../styles/index/styles";

// LAYOUT
import BasicLayout from "../layouts/basic-layout";

// COMPONENTS
import CTABar from "../components/CTABar";
import HowTo from "../components/HowTo";
import Techs from "../components/Techs/Techs";
import Banner from "../components/Banner/Banner";

// SERVICES
import { getTechs } from "../services/techs";
import { gatFAQs } from "../services/faq";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [techs, setTechs] = useState([]);
  const [faqItems, setFaqItems] = useState([]);

  const fetch = async () => {
    setIsLoading(true);

    try {
      let _techs = await getTechs();
      let _faqs = await gatFAQs();

      setTechs(_techs);
      setFaqItems(_faqs);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <BasicLayout
      title="Gui Benitez Frontend Dev"
      description="Welcome Gui's Homepage"
    >
      <ImageHolder>
        <Image
          src="/index/bannerImage.png"
          alt="Finb Logo"
          width={1961}
          height={2830}
        />
      </ImageHolder>

      <Banner />

      <Techs techs={techs} />

      <CTABar
        hide
        title="Did not find what you were looking for?"
        description="Don't worry, call me so we can create a custom solution."
      />

      <HowTo faqItems={faqItems} />
    </BasicLayout>
  );
}
