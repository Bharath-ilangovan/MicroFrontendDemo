import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CMMSAppDispatch, CMMSRootState} from "../store/store";


export const useCMMSAppDispatch = useDispatch.withTypes<CMMSAppDispatch>();
export const useCMMSAppSelector = useSelector.withTypes<CMMSRootState>();
