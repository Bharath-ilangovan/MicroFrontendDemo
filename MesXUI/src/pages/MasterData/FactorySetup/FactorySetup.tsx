import { Stack } from "@mui/material";
import CDSProgressContainer from "../../../components/CDSProgressContainer/CDSProgressContainer";
import { Outlet } from "react-router-dom";
import useCurrentRoute from "src/hooks/Navigation/useCurrentRoute";

interface Props {}

const FactorySetup = (props: Props) => {
  const { label, description } = useCurrentRoute();
  return (
    <Stack spacing={2} width={"100%"}>
      <CDSProgressContainer icon={undefined} />
      <h2>{label}</h2>
      <h1>{description}</h1>
      <Stack sx={{ px: "1vw" }}>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default FactorySetup;
