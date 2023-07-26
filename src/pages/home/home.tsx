import { Alert } from "@metrostar/comet-uswds";
import useAuth from "@src/hooks/use-auth";
import { getDisplayName } from "@src/utils/auth";
import { ReactElement } from "react";

export const Home = (): ReactElement => {
  const { isSignedIn, currentUserData } = useAuth();
  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col">
          <h1>
            Welcome{" "}
            {currentUserData ? getDisplayName(currentUserData) : "Guest"}
          </h1>
        </div>
      </div>
      {!isSignedIn && (
        <div className="grid-row">
          <div className="grid-col">
            <Alert id="sign-in-alert" type="info">
              You are not currently signed in. Please Sign In to access the
              Dashboard.
            </Alert>
          </div>
        </div>
      )}
    </div>
  );
};
