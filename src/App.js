import React, { Suspense, lazy } from "react";
import { Spinner } from "react-bootstrap";

import NavigationTabBar from "./components/NavigationTabBar";
import Footer from "./components/Footer";


const About = lazy(() => import("./pages/About"));


const Loading = () => {
    return (
        <div className="center outer-structure" style={{ display: "flex", flexDirection: "column" }}>
            <Spinner animation="border" variant="dark" />
        </div>
    );
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "about",
        };
        this.componentList = [ "about"]
    }

    setTab = (newTab) => {
        this.setState({ currentTab: newTab });
    };

    renderSwitch(currentTab) {
        switch (currentTab) {
            
            default:
                return <About />;
            
            
            
        }
    }

    render() {
        return (
            <div>
                <NavigationTabBar tabs={this.componentList} currentTab={this.state.currentTab} setTab={this.setTab} />
                <Suspense fallback={Loading()}>{this.renderSwitch(this.state.currentTab)}</Suspense>
                <Footer style={{ zIndex: -2 }} />
            </div>
        );
    }
}

export default App;
