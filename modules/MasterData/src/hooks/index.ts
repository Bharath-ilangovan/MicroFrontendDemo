import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { MasterDataAppDispatch, MasterDataRootState } from "../store/store";

export const useMasterDataAppDispatch =
  useDispatch.withTypes<MasterDataAppDispatch>();
export const useMasterDataAppSelector =
  useSelector.withTypes<MasterDataRootState>();
