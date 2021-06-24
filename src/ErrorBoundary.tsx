import { Link, Redirect } from "react-router-dom";
import React, { Component, ErrorInfo, ReactNode } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError(): { hasError: boolean; redirect: boolean } {
    return { hasError: true, redirect: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    //log to Azure Mointor, New Relic
    console.error("ErrorBoundart]y caught an error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render(): ReactNode {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <div>
          <h2>
            This listing has an error <Link to="/">Click here</Link> {""}to go back
            to the home page or wait five seconds
          </h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
