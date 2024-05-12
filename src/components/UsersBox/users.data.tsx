import { faker } from "@faker-js/faker";

const getRandomEmail = (name:string) => {
    const nameFiltered = name.replace(/\s/g, ".").toLowerCase();
    return `${nameFiltered}@${faker.internet.domainName()}`;
};

function getRandomFakerUser() {
    const id = faker.string.uuid();
    const name = faker.person.fullName();
    const email = getRandomEmail(name);

    return {
      id: id,
      name: name,
      email: email,
      avatar: "icons/noavatar.png",
    };
}

export const users = Array.from({ length: 10 }, getRandomFakerUser);
