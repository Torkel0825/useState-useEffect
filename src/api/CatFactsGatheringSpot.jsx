import {useState} from "react";

export function CatFactsGatheringSpot() {
  const [facts, setFacts] = useState([]);
  const url = "https://catfact.ninja/facts?limit=5";

  const fetchFacts = async () => {
    try {
      // get the data from the api
      const response = await fetch(url);
      // convert the data to json
      const json = await response.json();

      // append new facts to already gathered ones
      setFacts((prevFacts) => [...prevFacts, ...json.data]);
    } catch (error) {
      console.error("Failed to gather data from api: ", error);
    }
  };

  //

  return (
    <div>
      <div>
        {/* map over the array containing the facts gathered; {data: [{ fact: "...", length: 43}, ...]} */}
        {facts.map((item, i) => (
          <p key={i}>{item.fact}</p>
        ))}
      </div>
      {/* Button to run the function once more, gathering 5 more facts */}
      <button onClick={fetchFacts}>Gwet more facts!</button>
    </div>
  );
}
