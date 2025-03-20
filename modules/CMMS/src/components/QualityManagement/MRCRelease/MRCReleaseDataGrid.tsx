import React, { useState } from "react";
// import { ProgressCard } from "CDS";

interface Props { }
interface IMRCReleaseDataGrid {
  label: string;
  value: number;
}
const MRCReleaseDataGrid = (props: Props) => {
  const [progressCards, setProgressCards] = useState<IMRCReleaseDataGrid[]>([
    {
      label: "Active",
      value: 23,
    },
    { label: "Released", value: 123 },
  ]);

  return progressCards.map((items: IMRCReleaseDataGrid) => (
    // <ProgressCard status={items.label} statusItems={items.value} />
    <></>
  ));
};

export default MRCReleaseDataGrid;
