import React from "react";

// COMPONENTS
import SEO from "../components/Seo";
import Header from "../components/Header";
import { MainWrapper } from "../styles/index/styles";

function BasicLayout({ children, title, description, ...props }) {
  return (
    <MainWrapper>
      <SEO title={title || ""} description={description || ""} {...props} />
      <Header />
      {children}
    </MainWrapper>
  );
}

export default BasicLayout;
