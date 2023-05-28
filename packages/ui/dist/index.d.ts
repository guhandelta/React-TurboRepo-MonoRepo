import { FunctionComponent } from "react";
export * from "./Button";
export * from "./Header";
export type Route = {
    element: FunctionComponent;
    path: string;
};
export type NavLink = {
    label: string;
    path: string;
};
export declare const AppShell: FunctionComponent<{
    title: string;
    colorScheme?: "light" | "dark";
    routes: Route[];
    navLinks: NavLink[];
}>;
//# sourceMappingURL=index.d.ts.map