import Cover from "../Cover";
import Reservation from "./Reservation";
import image from "../../assets/cake.jpeg";

function ReservationPage() {
    return (
        <>
            <Cover
                subtitle={"Book a table"}
                title={"Reservation"}
                backgroundImage={image}
            />
            <Reservation />
        </>
    );
}

export default ReservationPage;
