class User {
    constructor(name, surname, email, phone) {
        this.id = 300837;
        this.name = name;
        this.surname = surname || null;
        this.email = email;
        this.phone = phone;
        this.birthday = null;
        this.orders = null;
        this.currentAddressId = null;
        this.addresses = null;
        this.reservations = [];
    }

    addReservation(reservation) {
        this.reservations.push(reservation);
    }
}

export default User;
