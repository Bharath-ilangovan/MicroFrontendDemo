import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { QmsAppDispatch, QmsRootState } from "../store/store";

export const useMasterDataAppDispatch = useDispatch.withTypes<QmsAppDispatch>();
export const useMasterDataAppSelector = useSelector.withTypes<QmsRootState>();
