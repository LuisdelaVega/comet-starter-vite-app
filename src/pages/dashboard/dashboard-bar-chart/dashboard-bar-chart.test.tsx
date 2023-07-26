import { launchData } from "@src/data/launch";
import { act, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { DashboardBarChart } from "./dashboard-bar-chart";

describe("DashboardBarChart", () => {
  test("should render successfully", async () => {
    const { baseElement } = render(
      <RecoilRoot>
        <BrowserRouter>
          <DashboardBarChart items={launchData} />
        </BrowserRouter>
      </RecoilRoot>,
    );
    await act(async () => {
      expect(baseElement).toBeTruthy();
    });
    expect(baseElement.querySelector(".VictoryContainer")).toBeDefined();
  });
});
