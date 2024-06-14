class User {
    constructor(name, surname, email, phone) {
        this.id = 300837; // find out how id is assigning
        this.name = name;
        this.surname = surname || null;
        this.email = email;
        this.phone = phone;
        this.birthday = null;
        this.orders = null;
        this.currentAddressId = null;
        this.addresses = null;
    }
}

export default User;
