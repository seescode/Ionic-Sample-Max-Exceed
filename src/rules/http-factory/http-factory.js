import { HttpInterceptor } from "./http-inteceptor";
export function httpFactory(xhrBackend, requestOptions) {
    return new HttpInterceptor(xhrBackend, requestOptions);
}
//# sourceMappingURL=http-factory.js.map