import { faker } from "@faker-js/faker";

function getFakerTables() {

  return {
    id: faker.string.uuid(),
    name: faker.music.genre(),
    columns: Math.floor(Math.random() * 10) + 1,
    size : faker.number.float(),
  };
}

export const tablas = Array.from({ length: 5 }, getFakerTables);
