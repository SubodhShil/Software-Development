import React, { useState, useEffect } from "react";
import Country from "../Country/Country";

function Countries() {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((RES) => RES.json())
            .then((data) => setCountries(data));
    }, []);

    const handleVisitedCountries = (country) => {
        if (!visitedCountries.includes(country)) {
            setVisitedCountries((prevVisitedCountries) => [
                ...prevVisitedCountries,
                country
            ]);
        }
        console.log(`${country.name.common}`);
    };

    return (
        <div className="">
            <section className="p-3 m-0 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white fixed w-10/12">
                <div className="font-bold">
                    <h2 className="text-3xl">
                        Total {countries.length} countries
                    </h2>
                    <h2 className="text-xl">
                        Visited countries: {visitedCountries.length}
                    </h2>
                </div>
            </section>

            <section className="">
                <ul>
                    {visitedCountries.map((currentCountry) => (
                        <li>{currentCountry.name.common}</li>
                    ))}
                </ul>
            </section>  

            <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-4">
                {countries.map((country) => (
                    <Country
                        key={country?.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                    />
                ))}
            </div>
        </div>
    );
}

export default Countries;
