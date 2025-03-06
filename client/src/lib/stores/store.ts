import { createContext } from "react";
import CounterStore from "./counter-store";
import UIStore from "./ui-store";

interface Store {
   counterStore: CounterStore;
   uiStore: UIStore;
}

export const store: Store = {
   counterStore: new CounterStore(),
   uiStore: new UIStore(),
}

export const StoreContext = createContext(store)