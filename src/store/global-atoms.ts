import {atom} from 'jotai';
import { atomWithReset, atomWithStorage } from "jotai/utils";


export const loadingAtom = atom(false);

export type UserInfo = {
    id: number;
    username: string;
  };

export const userInfoAtom = atomWithStorage<UserInfo | undefined>(
    "user-info",
    undefined
  );
  
  export type ToastMessage = {
    message: string;
    type: "info" | "error" | "warning" | "success" | "loading";
  };
  
  export const messageAtom = atomWithReset<ToastMessage>({
    message: "",
    type: "info",
  });
  