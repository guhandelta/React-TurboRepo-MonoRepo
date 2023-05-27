import { jsx as _jsx } from "react/jsx-runtime";
import { AppShell as MantineAppShell } from "@mantine/core";
// component exports
export * from "./Button";
export * from "./Header";
export const AppShell = () => (_jsx(MantineAppShell, { children: _jsx("div", Object.assign({ className: "" }, { children: "Hello" })) }));
