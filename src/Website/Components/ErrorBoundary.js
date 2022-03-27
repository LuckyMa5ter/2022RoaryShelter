import React from "react";
class ErrorBoundary extends React.Component {

    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
        return { isError: true };
      }
      componentDidCatch(error, errorInfo) {
        this.setState({ error: error, errorInfo: errorInfo })
      }
  
    render() {
        if (this.state.error && this.state.errorInfo) {
          return (
            <div>
              <p>Caught an Error: {this.state.error.toString()}</p>
              <div>
                {this.state.errorInfo.componentStack}
              </div>
            </div>
          );
        } else {
          return this.props.children;
        }
      }
  }
  export default ErrorBoundary