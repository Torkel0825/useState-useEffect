import {useState} from "react";
import "../styling.css";

export default function CookieClicker() {
  //
  const [setCookie, setNewCookie] = useState(0);

  //

  return (
    <>
      <div>
        <button>
          <img
            src="/cookie-1.png"
            alt="picture of a cookie"
            className="cookieBtn"
            onClick={() => setNewCookie((setCookie) => setCookie + 1)}
          />
        </button>
        <h3>Cookies clicked: {setCookie}</h3>
      </div>
    </>
  );
}
