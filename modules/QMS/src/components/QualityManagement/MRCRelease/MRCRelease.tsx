import React from "react";
import MRCReleaseDataGrid from "./MRCReleaseDataGrid";

interface IMRCRelease {}

const MRCRelease = (props: IMRCRelease) => {
  return (
    <div>
      <h2>MRCRelease</h2>
      <MRCReleaseDataGrid />
    </div>
  );
};

export default MRCRelease;
