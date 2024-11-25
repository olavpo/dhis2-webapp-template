import React from "react";
import { createRoot } from "react-dom/client";
import { HeaderBar } from "@dhis2/ui";
import { DataProvider } from "@dhis2/app-runtime";
import { QueryClient, QueryClientProvider } from "react-query";
//import "@dhis2/ui/styles/index.css";  // Import global styles for DHIS2 UI

const dhisDevConfig = DHIS_CONFIG;
const isDev = "baseUrl" in dhisDevConfig;
const baseUrl = isDev ? dhisDevConfig.baseUrl : "../../..";

const queryClient = new QueryClient();

const config = {
    baseUrl: baseUrl,
    apiVersion: "33",
    headers: {
        Authorization: "Basic " + btoa(dhisDevConfig.username + ":" + dhisDevConfig.password)
    }
};

// Function to render the HeaderBar component
function renderHeaderBar() {
    const headerBarContainer = document.getElementById("header-bar");

    if (headerBarContainer) {
        const root = createRoot(headerBarContainer);
        root.render(
            React.createElement(DataProvider, {
                config
            }, 
            React.createElement(QueryClientProvider, {
                client: queryClient
            }, React.createElement(HeaderBar, { appName: "DHIS2 App" })))
        );
    }
}

// Export the function for initialization
export { renderHeaderBar };
