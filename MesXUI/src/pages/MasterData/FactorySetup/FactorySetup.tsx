// import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import useCurrentRoute from "src/hooks/Navigation/useCurrentRoute";
// import { MesProgressContainer } from "CDS";

interface Props {}

const FactorySetup = (props: Props) => {
  const { label, description } = useCurrentRoute();
  return (
    // <Stack spacing={2} width={"100%"}>
    //   <MesProgressContainer
    //     variant={"standard"}
    //     label={label}
    //     description={description}
    //     children={undefined}
    //   />
    //   <Stack sx={{ px: "1vw" }}>
    //     <Outlet />
    //   </Stack>
    // </Stack>
    <div>
      {label - description}
      <Outlet />
    </div>
  );
};

export default FactorySetup;
