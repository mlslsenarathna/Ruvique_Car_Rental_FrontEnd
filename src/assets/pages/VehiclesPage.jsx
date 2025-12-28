import CarCard from "../components/CarCard";
import CustomerNavbar from "../components/CustomerNavbar";


function VehiclePage() {
    return (
        <>
            <CustomerNavbar />

            <div className="row">
                <div className="col">
                     <CarCard />

                </div>
            </div>

           

        </>
    );


}
export default VehiclePage;