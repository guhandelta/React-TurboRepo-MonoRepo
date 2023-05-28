import { Group, Header, AppShell as MantineAppShell, MantineProvider, Navbar, Text, Title, UnstyledButton } from "@mantine/core";
import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Link, Outlet, Routes, Route } from 'react-router-dom'

// component exports
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

function MainLink({ label, path }: NavLink) {
    return (
        <Link to={path}>
            <UnstyledButton
                sx={theme => ({
                    display: "block",
                    width: "100%",
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
                    "&:hover":{
                        backgroundColor: 
                            theme.colorScheme === "dark" 
                            ? theme.colors.dark[6] 
                            : theme.colors.gray[0]
                    },
                })}
            >
                <Group>
                    <Text size="sm">{label}</Text>
                </Group>
            </UnstyledButton>
        </Link>
    );
}

export const AppShell: FunctionComponent<{ 
    title: string; 
    colorScheme?:"light" | "dark";
    routes: Route[];
    navLinks: NavLink[];
}> = ({ title, colorScheme, routes, navLinks }) =>(
    <Router>
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme
            }}
        >
            <MantineAppShell
                padding="md"
                navbar={
                    <Navbar width={{ base:300 }} height={300} p="xs">
                        {navLinks.map(link => (
                            <MainLink {...link} key={link.path} />
                        ))}
                    </Navbar>
                }
                header={
                    <Header
                        height={60}
                        p="xs"
                        sx={{
                            display: "flex",
                        }}
                        styles={theme => ({
                            main:{
                                backgroundColor:
                                    theme.colorScheme === "dark"
                                        ? theme.colors.dark[8]
                                        : theme.colors.gray[0]
                            }
                        })}
                    >
                        <Title>{title}</Title>
                    </Header>
                        
                }
            >
                <Routes>
                    {routes.map((route) => (
                        <Route 
                            key={route.path}
                            path={route.path}
                            element={<route.element />}
                        />
                    ))}
                </Routes>
                <Outlet />
            </MantineAppShell>
        </MantineProvider>
    </Router>
)
