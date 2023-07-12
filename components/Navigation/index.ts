import { lazy } from "react";

export { default as Navigation } from "./Navigation";
export { default as Burger } from "./Burger";
export { default as Nav } from "./Nav";
export { default as NavigationItem } from "./NavigationItem";
export const LazyBurgerMenu = lazy(() => import("./BurgerMenu"));

