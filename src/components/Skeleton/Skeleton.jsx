import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader speed={2} width={320} height={304} viewBox="0 0 320 304" backgroundColor="#d6c7c7" foregroundColor="#ecebeb" {...props}>
    <rect x="0" y="0" rx="15" ry="15" width="241" height="280" />
  </ContentLoader>
);

export default Skeleton;
