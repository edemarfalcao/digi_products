import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FullPageLoading from "../components/FullPageLoading";
import NotFound from "../components/NotFound";
import { mapRoutes } from "./mapRoutes";
import { routeComponents } from "./routeComponents";

const ApplicationRouter: React.FC = () => {

    return (
        <Suspense fallback={<FullPageLoading />}>
            <Routes>
                <Route path="*" element={<NotFound />} />

                {
                    Object.entries(mapRoutes).map(([key, value]) => {
                        const Component = routeComponents[value.component];
                        return (
                            <Route key={key}
                                path={value.path}
                                element={
                                    <Component />
                                }
                            />
                        )
                    })
                }

            </Routes>
        </Suspense>
    )
}


export default ApplicationRouter;
