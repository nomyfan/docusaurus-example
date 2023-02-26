import React from "react";
import OriginalNavBarItem from "@theme-original/NavbarItem";
import { useLocation } from "@docusaurus/router";
import useGlobalData from "@docusaurus/useGlobalData";

export default function NavbarItem(props) {
  const ctx = useGlobalData();
  const pluginContentDocs = ctx["docusaurus-plugin-content-docs"];

  const { type } = props;
  const { pathname } = useLocation();

  if (type === "docsVersionDropdown") {
    const plugins = Object.entries(pluginContentDocs);
    const matchedPlugin = plugins.find(
      ([_, { path }]) =>
        pathname === path || new RegExp(`^${path}/?`).test(pathname)
    );
    if (matchedPlugin) {
      return <OriginalNavBarItem {...props} docsPluginId={matchedPlugin[0]} />;
    }

    return null;
  }

  return (
    <>
      <OriginalNavBarItem {...props} />
    </>
  );
}
