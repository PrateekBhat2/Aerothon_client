import WeatherDisplay from "./WeatherDisplay";
import Form from "./Form";

export default function TravelInfo() {

    return (
        <div className="mt-20 grow flex flex-wrap">
            <Form/>
            <div className="ml-28 w-2/5 mt-4">
                <WeatherDisplay />
            </div>
        </div>
    );
}