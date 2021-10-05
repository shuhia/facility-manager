import faker from "faker";
import { nanoid } from "nanoid";
function createFacility() {
  const name = faker.company.companyName("10");
  const createAt = new Date().toISOString;
  const type = Math.random() > 0.5 ? "range" : "indoor";
  const address = faker.address.streetAddress();
  const id = nanoid();
  return { name, createAt, type, address, id };
}

function createFacilities(count) {
  return [...Array(count)].map(() => createFacility());
}

export const trackman = {
  facilities: createFacilities(100),
};
