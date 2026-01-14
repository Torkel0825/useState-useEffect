import {useState} from "react";

export default function CatFactsGatheringSpot() {
  const [facts, setFacts] = useState([]);
  const url = "https://catfact.ninja/facts?limit=5";

  // should i use a useEffect for the fetch of information, then the const under for the button and calling the useEffect((),[...]) for more facts? Or is that necessary?

  // need some explanation on the structure of createBrowserRouter() form "react-router-dom", since it's use, structure and setup is still confusing. Isn't a page setup with a e.html file better? or necessary?

  // lastly, how useContext() works. I found it generally very confusing.

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

  // useEffect(() => {
  //   fetchFacts();
  // }, []);
  //       {/* map over the array containing the facts gathered; {data: [{ fact: "...", length: 43}, ...]} */}
  //     {/* Button to run the function once more, gathering 5 more facts */}

  //

  return (
    <div>
      <div>
        {facts.map((item, i) => (
          <p key={i}>{item.fact}</p>
        ))}
      </div>
      <button
        onClick={() => {
          fetchFacts();
        }}
      >
        Gwet more facts!
      </button>
    </div>
  );
}
