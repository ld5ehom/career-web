import React from "react";
import { LayoutWrapper } from "./layout.styles";
import ApplyStatusContainer from "../containers/apply-status-container";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <LayoutWrapper>
            <div className="jobs--layout-apply-status">
                <ApplyStatusContainer />
            </div>
            <div className="jobs--layout-children">{children}</div>
        </LayoutWrapper>
    );
};

export default Layout;
