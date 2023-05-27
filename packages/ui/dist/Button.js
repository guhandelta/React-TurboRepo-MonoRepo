"use client";
import { jsx as _jsx } from "react/jsx-runtime";
export const Button = () => {
    return _jsx("button", Object.assign({ onClick: () => alert("boop") }, { children: "Boop" }));
};
