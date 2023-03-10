import React from "react";
import App from "./App";
import { AuthProvider } from "./components/Auth";
import { LoaderProvider } from "./components/Loader/LoaderProvider";
import { ModalProvider } from "./components/Modal";

export function Root() {
  return (
    <>
      <LoaderProvider>
        <ModalProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ModalProvider>
      </LoaderProvider>
    </>
  );
}
