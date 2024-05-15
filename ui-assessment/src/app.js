import "./app.css";
import { css, ThemeProvider } from "styled-components";
import AccountOverview from "./account-overview";

export const breakpoints = {
  small: (...args) => css`
    @media (max-width: 576px) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  large: (...args) => css`
    @media (min-width: 992px) {
      ${css(...args)}
    }
  `,
};

function App() {
  const accountOverviewStub = {
    supportContact: {
      name: "John Smith",
      email: "john.smith@feefo.com",
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
    },
  };

  return (
    <div className="App">
      <ThemeProvider theme={{ breakpoints }}>
        <AccountOverview data={accountOverviewStub} />
      </ThemeProvider>
    </div>
  );
}

export default App;
