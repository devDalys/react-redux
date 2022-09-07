import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootType } from "../store/reducers";

export const useTypeSelector: TypedUseSelectorHook<rootType> = useSelector