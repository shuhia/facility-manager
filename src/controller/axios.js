import { trackman } from "../store/trackman";

export const axios = {
  get(path) {
    if (path === "/facilities") {
      return new Promise((resolve) =>
        setTimeout(() => resolve(trackman.facilities), 10)
      );
    } else if (path.match("/facility/")) {
      const id = parseInt(path.split("/"), 10);
      return new Promise((resolve) =>
        setTimeout(
          () =>
            resolve(trackman.facilities.find((facility) => (facility.id = id))),
          1000
        )
      );
    }
  },
  set(path) {},
  put(path) {},
  delete(path) {},
};
