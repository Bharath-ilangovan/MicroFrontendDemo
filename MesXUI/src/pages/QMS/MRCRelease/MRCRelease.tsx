import { ProgressContainer, Stack } from "CDS";
import useCurrentRoute from "../../../hooks/Navigation/useCurrentRoute";
import { Outlet } from "react-router-dom";

interface Props {}

const MRCRelease = (props: Props) => {
  const { label, description } = useCurrentRoute();
  return (
    <Stack spacing={2} width={"100%"}>
      <ProgressContainer
        variant={"standard"}
        label={label}
        description={description}
        children={undefined}
      />
      <Stack sx={{ px: "1vw" }}>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default MRCRelease;
