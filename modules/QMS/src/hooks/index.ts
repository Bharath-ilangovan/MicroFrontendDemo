import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { QmsAppDispatch, QmsRootState } from "../store/store";

export const useQMSAppDispatch = useDispatch.withTypes<QmsAppDispatch>();
export const useQMSAppSelector = useSelector.withTypes<QmsRootState>();
