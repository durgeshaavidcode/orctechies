import React from 'react';

class RemoteErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Failed to stream micro-frontend container:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 border border-red-300 bg-red-50 text-red-700 rounded">
          <p className="font-semibold">Failed to load this section.</p>
          <p className="text-sm">The remote micro-frontend might be offline or undergoing maintenance.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default RemoteErrorBoundary;