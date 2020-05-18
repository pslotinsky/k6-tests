import faker from '@vendors/faker/index.js';
import { randomName } from '@common/faker.js'

export const generateCreationParams = ({
    id = faker.random.uuid(),
    snils = faker.phone.phoneNumber('###########'),
    inn = faker.phone.phoneNumber('############'),
    phone = faker.phone.phoneNumber('###########'),
    email = faker.internet.email(),
    birthDate = new Date(faker.date.between('1950-01-01', '2019-01-01')).toISOString().substr(0, 10),
} = {}) => {
    const gender = Math.round(Math.random());
    const sex = gender ? 'm' : 'f';
    const firstName = generateFirstName(gender);
    const lastName = faker.name.lastName(gender);

    return { id, snils, inn, phone, email, birthDate, sex, firstName, lastName };
};

export function generateFirstName(gender?: number) {
    return randomName();
}
