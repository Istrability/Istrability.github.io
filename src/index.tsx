import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./views/Home";
import { BrowserRouter } from "react-router-dom";
import CustomIntlProvider from "./CustomIntlProvider";

const theme = createTheme();

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <CustomIntlProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </ThemeProvider>
      </CustomIntlProvider>
    </Provider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
