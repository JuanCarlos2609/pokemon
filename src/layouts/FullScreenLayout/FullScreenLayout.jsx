import React from "react";
import PropTypes from "prop-types";
import "./FullScreenLayout.scss";
import { Loader } from "../../components/Loader";
import { Modal } from "../../components/Modal";
import { ErrorBoundary } from "../../components/ErrorBoundary/ErrorBoundary";
import { Header } from "../../components/Header/Header";
import { useAuth } from "../../components/Auth/hooks/useAuth";

function FullScreenLayout({ children }) {
  const auth = useAuth();
  const role = auth?.user;

  return (
    <ErrorBoundary>
      <Loader />
      <Modal />
      {role === "user" && <Header />}

      <div className="full-screen-layout">{children}</div>
    </ErrorBoundary>
  );
}

FullScreenLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FullScreenLayout };
