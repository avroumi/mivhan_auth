import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ZustandStore {
  token: string | null;
  setToken: (tokenString: string) => void;
  logout: () => void;
}

export const UseAuthStore = create<ZustandStore>()(
  persist(
    (set) => ({
      token: null,
      setToken: (tokenString) => {
        set({ token: tokenString });
      },
      logout: () => {
        set({ token: null });
      },
    }),
    { name: "token-storage" },
  ),
);
