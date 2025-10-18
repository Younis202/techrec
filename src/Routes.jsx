import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import Layout from "components/Layout";
import NotFound from "pages/NotFound";
import ServicesPage from './pages/services';
import PartnerAccessPage from './pages/partner-access';
import HomePage from './pages/home';
import TeamPage from './pages/team';
import ProcessPage from './pages/process';
import CandidatesPage from './pages/candidates';

const Routes = () => {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <ScrollToTop />
                <Layout>
                    <RouterRoutes>
                        {/* Define your route here */}
                        <Route path="/" element={<HomePage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/partner-access" element={<PartnerAccessPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/team" element={<TeamPage />} />
                        <Route path="/process" element={<ProcessPage />} />
                        <Route path="/candidates" element={<CandidatesPage />} />
                        <Route path="*" element={<NotFound />} />
                    </RouterRoutes>
                </Layout>
            </ErrorBoundary>
        </BrowserRouter>
    );
};

export default Routes;
