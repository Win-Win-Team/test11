import { extractStore } from "@/store/extractStore";
import { defineStore } from "pinia";
import { useActions } from "./actions";
import { useGetters } from "./getters";
import { useState } from "./state";

export const useUserStore = defineStore("user", () => {
  return {
    ...extractStore(useState()),
    ...extractStore(useGetters()),
    ...extractStore(useActions()),
  };
});
