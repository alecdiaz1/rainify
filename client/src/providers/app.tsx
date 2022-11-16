import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Oops, something went wrong :( </h2>
      <button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="h-screen">
        <Router>{children}</Router>
      </div>
    </ErrorBoundary>
  )
};
