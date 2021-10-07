import faker from "faker";
import { nanoid } from "nanoid";

export enum Type {
  range = "RANGE",
  indoor = "INDOOR",
}

export interface Facility {
  id: string;
  name: string;
  address: string;
  createdAt: string;
  type: Type;
}

export interface Tournament {
  id: string;
  name: string;
  address: string;
  createdAt: string;
  type: Type;
  date: string;
  price: number;
  sponsors: Company[];
}

export interface Company {}

function createFacility(): Facility {
  const name: string = faker.company.companyName();
  const createdAt: string = new Date().toISOString();
  const type: Type = Math.random() > 0.5 ? Type.range : Type.indoor;
  const address: string = faker.address.streetAddress();
  const id: string = nanoid();
  return { name, createdAt, type, address, id };
}

function createFacilities(count: number): Facility[] {
  return [...Array(count)].map(() => createFacility());
}

export const trackman = {
  facilities: createFacilities(100),
  tournament: [],
};
