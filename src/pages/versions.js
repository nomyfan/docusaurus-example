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

  const trackSdkVersions = pluginContentDocs["track-sdk"].versions;
  const stableTrackSdkVersions = trackSdkVersions.filter(
    (v) => v.name !== "current"
  );
  const pastTrackSdkVersions = stableTrackSdkVersions.filter((v) => !v.isLast);
  const latestTrackSdkVersion = stableTrackSdkVersions.filter(
    (v) => v.isLast
  )[0];

  return (
    <Layout>
      <main style={{ padding: "4rem 2rem" }}>
        <h2>Default</h2>
        <h3>Current version(Stable)</h3>
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

        <h3>Past versions</h3>

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

        <hr />
        <h2>Track SDK</h2>
        <h3>Current version(Stable)</h3>
        {latestTrackSdkVersion && (
          <table>
            <tbody>
              <tr>
                <th>{latestTrackSdkVersion.label}</th>
                <td>
                  <Link to={latestTrackSdkVersion.path}>Documentation</Link>
                </td>
              </tr>
            </tbody>
          </table>
        )}

        <h3>Past versions</h3>

        <table>
          <tbody>
            {pastTrackSdkVersions.map((v) => {
              return (
                <tr key={v.name}>
                  <th>{v.label}</th>
                  <td>
                    <Link to={v.path}>Documentation</Link>
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
