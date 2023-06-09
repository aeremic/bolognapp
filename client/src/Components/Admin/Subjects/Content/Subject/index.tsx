import { ThemeProvider } from "@mui/material";
import theme from "../../../../../styles";
import Header from "../../../../Common/Header";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../../../Common/ErrorComponent";
import Content from "./Content";

const Subject = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ErrorBoundary fallback={<ErrorComponent />}>
        <Content />
        {/* <Wrapper>
    <Sidebar />
    <ErrorBoundary>
      <React.Suspense fallback={<Loader />}>
        <Content />
      </React.Suspense>
    </ErrorBoundary>
  </Wrapper> */}
      </ErrorBoundary>
    </ThemeProvider>
  );
};
export default Subject;
