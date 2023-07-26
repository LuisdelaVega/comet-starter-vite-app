import { Footer } from "@src/components/footer/footer";
import { Header } from "@src/components/header/header";
import { Dashboard } from "@src/pages/dashboard/dashboard";
import Details from "@src/pages/details/details";
import { Home } from "@src/pages/home/home";
import { SignIn } from "@src/pages/sign-in/sign-in";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactElement } from "react";
import { Route, Routes } from "react-router";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

export const App = (): ReactElement => (
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <main id="mainSection" className="usa-section">
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  </RecoilRoot>
);
