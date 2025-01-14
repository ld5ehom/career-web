import { injectFactory } from "@career-web/shell-router";
import { routes } from "./routes";

const inject = injectFactory({
    routes,
});

export default inject;
