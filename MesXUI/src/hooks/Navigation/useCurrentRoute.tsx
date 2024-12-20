import { useNavigate, NavigateOptions, useMatches } from "react-router-dom";

const useCurrentRoute = () => {
  const matches = useMatches();
  const crumbs = matches
    .filter((match: any) => Boolean(match.handle?.crumb))
    .map((match: any) => match.handle.crumb(match.data));

  return {
    label: crumbs[0]?.length > 0 ? crumbs[crumbs.length - 2] : crumbs[0],
    description:
      //   typeof customCrumb === "string"
      //     ? customCrumb
      //     :
      crumbs[0]?.length > 0 ? crumbs[crumbs?.length - 1] : crumbs[1],
  };
};

export default useCurrentRoute;
