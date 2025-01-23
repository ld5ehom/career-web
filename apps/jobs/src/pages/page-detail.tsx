import React from "react";
import { useParams } from "react-router-dom";

// Detail Page
const PageDetail: React.FC = () => {
    const { id } = useParams();
    return <div> Detail id: {id}</div>;
};

export default PageDetail;
