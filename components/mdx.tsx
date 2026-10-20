import defaultMdxComponents from "fumadocs-ui/mdx";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Callout } from "fumadocs-ui/components/callout";
import { Card, Cards } from "fumadocs-ui/components/card";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import type { MDXComponents } from "mdx/types";
import { Screenshot } from "@/components/screenshot";
import { Carousel } from "@/components/carousel";
import { UIPath } from "@/components/ui-path";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: (props) => {
      const Img = defaultMdxComponents.img as any;
      return <Img {...props} className="gl-doc-image" />;
    },
    Screenshot,
    Carousel,
    UIPath,
    Steps,
    Step,
    Tab,
    Tabs,
    Callout,
    Card,
    Cards,
    Accordion,
    Accordions,
    ...components,
  };
}
