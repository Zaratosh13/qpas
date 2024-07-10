import { faker } from '@faker-js/faker';

// Create a function to generate a random user
export function createRandomUser() {
    return {
        profile: faker.image.avatar(),
        policyNumber: faker.string.alphanumeric(10),
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        effectiveDate: faker.date.past(1).toISOString().split('T')[0], // Format: YYYY-MM-DD
    };
}

// Generate an array of random users
export const USERS = faker.helpers.multiple(createRandomUser, {
    count: 300, // Adjust the count as needed
});
