import ContentLoader from "react-content-loader";

const Loader = () => (
  <div className="border border-gray-500 p-5">
    <ContentLoader style={{ width: "100%" }}>
      <rect x="0" y="0" width="150" height="150" />
      <rect x="180" y="5" width="250" height="20" />
      <rect x="180" y="35" width="300" height="15" />
      <rect x="180" y="65" width="350" height="60" />
    </ContentLoader>
  </div>
);

export default Loader;
