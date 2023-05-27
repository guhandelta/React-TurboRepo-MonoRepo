import { AppShell as MantineAppShell } from "@mantine/core";
import * as React from "react";

// component exports
export * from "./Button";
export * from "./Header";

export const AppShell: React.FunctionComponent = () =>(
    <MantineAppShell>
        <div className="">Hello</div>
    </MantineAppShell>
)
