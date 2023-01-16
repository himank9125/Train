import "./App.css";
import ChairIcon from "@mui/icons-material/Chair";
import { useState } from "react";

function App() {
  //  -----------------------Data Structure 2D Array Data of object--------------------
  const [seat, setSeat] = useState([
    [
      { num: 1, available: true },
      { num: 2, available: true },
      { num: 3, available: true },
      { num: 4, available: true },
      { num: 5, available: true },
      { num: 6, available: true },
      { num: 7, available: true },
    ],
    [
      { num: 1, available: true },
      { num: 2, available: true },
      { num: 3, available: true },
      { num: 4, available: true },
      { num: 5, available: true },
      { num: 6, available: true },
      { num: 7, available: true },
    ],
    [
      { num: 1, available: true },
      { num: 2, available: true },
      { num: 3, available: true },
      { num: 4, available: true },
      { num: 5, available: true },
      { num: 6, available: true },
      { num: 7, available: true },
    ],
    [
      { num: 1, available: true },
      { num: 2, available: true },
      { num: 3, available: true },
      { num: 4, available: true },
      { num: 5, available: true },
      { num: 6, available: true },
      { num: 7, available: true },
    ],
    [
      { num: 1, available: true },
      { num: 2, available: true },
      { num: 3, available: true },
      { num: 4, available: true },
      { num: 5, available: true },
      { num: 6, available: true },
      { num: 7, available: true },
    ],
    [
      { num: 1, available: true },
      { num: 2, available: true },
      { num: 3, available: true },
      { num: 4, available: true },
      { num: 5, available: true },
      { num: 6, available: true },
      { num: 7, available: true },
    ],
    [
      { num: 1, available: true },
      { num: 2, available: true },
      { num: 3, available: true },
      { num: 4, available: true },
      { num: 5, available: true },
      { num: 6, available: true },
      { num: 7, available: true },
    ],
    [
      { num: 1, available: true },
      { num: 2, available: true },
      { num: 3, available: true },
      { num: 4, available: true },
      { num: 5, available: true },
      { num: 6, available: true },
      { num: 7, available: true },
    ],
    [
      { num: 1, available: true },
      { num: 2, available: true },
      { num: 3, available: true },
      { num: 4, available: true },
      { num: 5, available: true },
      { num: 6, available: true },
      { num: 7, available: true },
    ],
    [
      { num: 1, available: true },
      { num: 2, available: true },
      { num: 3, available: true },
      { num: 4, available: true },
      { num: 5, available: true },
      { num: 6, available: true },
      { num: 7, available: true },
    ],
    [
      { num: 1, available: true },
      { num: 2, available: true },
      { num: 3, available: true },
      { num: 4, available: true },
      { num: 5, available: true },
      { num: 6, available: true },
      { num: 7, available: true },
    ],
    [
      { num: 1, available: true },
      { num: 2, available: true },
      { num: 3, available: true },
    ],
  ]);
  const [book, setBook] = useState(""); // state for taking input
  const [vacant, setVacant] = useState(80); //state for vacant seats
  // ------------------------------handleBooking Function------------------------------------
  const handleBooking = () => {
    let booking = Number.parseInt(book);
    const arr = [...seat]; //creating new array arr by destructuring seat Array.
    if (booking > 0 && booking <= 7 && vacant >= booking) {
      // checking the conditions and traversing the 2D array.
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
          if (arr[i][j]?.available && booking > 0) {
            arr[i][j].available = false; // updating the array arr
            booking--;
            setVacant((vacant) => vacant - 1);
            setSeat(arr);
          }
        }
      }
    } else {
      console.log("Booking not possible"); // Consoling if booking not passible
    }
    setBook(""); //Resetting the input Value
  };
  return (
    <div className="mainContainer">
      <div className="inputContainer">
        {/*---------------------- Rendering the vacant Seats----------------------- */}
        <h2>Available Seats {vacant}</h2>
        {/* -------------------------Taking input to book the seats------------------ */}
        <input
          type="number"
          value={book}
          onChange={(e) => {
            setBook(e.target.value);
          }}
        />
        <input type="button" value="Book Now" onClick={handleBooking} />
      </div>

      <div className="allseats">
        {/* ----------------------Mapping Seat 2D array -----------------------*/}
        {seat.map((row, rowId) => {
          return (
            // ---------------Rendering the Row------------------------------
            <div className="singleRow" key={rowId}>
              {row.map((col, colId) => {
                return (
                  //------Rendering the each Element-------------------
                  <div
                    className={col.available ? "available" : "notavailable"}
                    key={colId}
                  >
                    [{rowId + 1}][{col.num}]<br></br>
                    <ChairIcon />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
