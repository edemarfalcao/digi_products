import React from "react";

const Home = React.lazy(() => import('~/pages/Home'));

interface RouteComponents {
    [key: string]: React.FC
}

export const routeComponents: RouteComponents = {
    Home
}
