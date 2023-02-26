import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useGlobalData from "@docusaurus/useGlobalData";

function Versions() {
  const ctx = useGlobalData();
  const pluginContentDocs = ctx["docusaurus-plugin-content-docs"];

  const versions = pluginContentDocs.default.versions;
  const stableVersions = versions.filter((v) => v.name !== "current");
  const pastVersions = stableVersions.filter((v) => !v.isLast);
  const latestVersion = stableVersions.filter((v) => v.isLast)[0];

  return (
    <Layout>
      <main style={{ padding: "4rem 2rem" }}>
        <b style={{ fontSize: "2em" }}>Current version(Stable)</b>
        <table>
          <tbody>
            <tr>
              <th>{latestVersion.label}</th>
              <td>
                <Link to="/docs/intro">Documentation</Link>
              </td>
            </tr>
          </tbody>
        </table>

        <b style={{ fontSize: "2em" }}>Past versions</b>

        <table>
          <tbody>
            {pastVersions.map((v) => {
              return (
                <tr key={v.name}>
                  <th>{v.label}</th>
                  <td>
                    <Link to={`/docs/${v.name}/intro`}>Documentation</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </Layout>
  );
}

export default Versions;
