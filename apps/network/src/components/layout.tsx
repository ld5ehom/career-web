import React from "react";
import { LayoutWrapper } from "./layout.styles";
import MyNetworkContainer from "../containers/my-network-container";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <LayoutWrapper>
            <div className="network--layout-left">
                {/* Mynetwork Container */}
                <MyNetworkContainer />
            </div>
            <div className="network--layout-center">{children}</div>
        </LayoutWrapper>
    );
};

export default Layout;
