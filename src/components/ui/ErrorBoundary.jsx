import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold mb-2">Oops! Something went wrong</h1>
          <p className="text-gray-600 mb-6">
            We're sorry for the inconvenience. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Refresh Page
          </button>
          {process.env.NODE_ENV === "development" && (
            <details className="mt-8 text-left max-w-2xl">
              <summary className="cursor-pointer text-red-600 font-semibold">
                Error Details (Development Only)
              </summary>
              <pre className="mt-4 p-4 bg-red-50 rounded text-sm overflow-auto">
                {this.state.error?.toString()}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
