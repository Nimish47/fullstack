import React from 'react';
import { ErrorBoundaryComponent } from './ErrorBoundaryComponent';

class RootErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can log error to monitoring service here
        console.error("Error caught by boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorBoundaryComponent />;
        }

        return this.props.children;
    }
}

export default RootErrorBoundary;
