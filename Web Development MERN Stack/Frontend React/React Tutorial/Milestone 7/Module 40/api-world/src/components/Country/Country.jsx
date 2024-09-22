import React, { useState } from "react";

function Country({ country, handleVisitedCountries }) {
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited((val) => !visited);
        // handleVisitedCountries(country);
    };

    // console.log(country);
    const { name, flags, population, area, cca3 } = country;

    return (
        <div
            className={`border border-green-400 p-3 rounded-md w-fit ${
                visited && "bg-green-400"
            }`}
        >
            <h2 className="text-center font-bold text-3xl">{name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>

            {/* <button className="border-black border-2 p-2 rounded-md font-bold">
                Mark visited
            </button> */}

            <br />
            <br />
            <button
                className="border-black border-2 p-2 rounded-md font-bold"
                onClick={() => {
                    handleVisited();
                    handleVisitedCountries(country);
                }}
            >
                {visited ? "Visited" : "Not Visited"}
            </button>
            <br />
            {visited
                ? "I have visited this country"
                : "I have not visited this country"}
            <br />
            <br />
            <a
                className="text-center font-bold hover:underline"
                target="_blank"
                href="{https://restcountries.com/v3.1/alpha/}"
            >
                {/* Know more about <span>{cca3}</span> */}
            </a>
        </div>
    );
}

export default Country;
