module.exports = function () {
    var faker = require("faker");
    var _ = require("lodash");
    return {
        tabledata : _.times(5, function(n) {
            return {
                id: n,
                name: faker.name.findName(),
                salary: faker.random.number(),
                country: faker.address.country(),
                city: faker.address.city()
            }
        }),
        user : _.times(5, function(n) {
            return {
                id: n,
                name: faker.name.findName(),
                photo: faker.internet.avatar(),
                title: faker.name.jobTitle(),
                department: faker.name.jobArea()
            }
        }),
        client : _.times(5, function(n) {
            return {
                id: n,
                name: faker.company.companyName()
            }
        }),
        project : _.times(5, function(n) {
            return {
                id: n,
                name: faker.random.word()
            }
        }),
        department : _.times(5, function(n) {
            return {
                id: n,
                name: faker.name.jobArea()
            }
        }),
    }
}