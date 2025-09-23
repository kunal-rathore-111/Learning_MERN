import React from "react";


export class ErrorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(err) {
        return { hasError: true };
    }

    componentDidCatch(err, info) {
        console.log("Error- ", err, info);
    }

    render() {
        if (this.state.hasError) {
            return <div>There is some error check console if you are a developer</div>
        }
        return this.props.children;
    }
}