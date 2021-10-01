Supplier = class {
    constructor(name, password, products = []) {
        this.name = name,
        this.password = password,
        this.products = products
    }
}

Mechanic = class {
    constructor(name, password, skills, finishedWorks = []) {
        this.name = name,
        this.password = password,
        this.finishedWorks = finishedWorks
    }
}

Company = class {
    constructor(name, password, location, adverts = []) {
        this.name = name,
        this.password = password,
        this.location = location,
        this.adverts = adverts
    }
}