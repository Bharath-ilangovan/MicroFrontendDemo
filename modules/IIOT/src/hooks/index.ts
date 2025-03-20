import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IIOTAppDispatch,IIOTRootState } from "../store/store";

export const useIIOTAppDispatch = useDispatch.withTypes<IIOTAppDispatch>();
export const useIIOTAppSelector = useSelector.withTypes<IIOTRootState>();
