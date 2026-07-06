import { useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";

function Match() {
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [matchDate, setMatchDate] = useState("");
  
  async function sendMatchData(event) {
    event.preventDefault();
      const response = await axios.post(
        "http://localhost:3000/team-match",
        {
          teamA,
          teamB,
          matchDate,
        }
      );
      alert(response.data.message);
      // Clear the form
      setTeamA("");
      setTeamB("");
      setMatchDate("");
   
  }

  

  
{
    axios.get("/fetch")
}
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <form
          onSubmit={sendMatchData}
          className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Match
          </h2>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Team A</label>
            <input
              type="text"
              placeholder="Enter Team A"
              value={teamA}
              onChange={(e) => setTeamA(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Team B</label>
            <input
              type="text"
              placeholder="Enter Team B"
              value={teamB}
              onChange={(e) => setTeamB(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">Match Date</label>
            <input
              type="date"
              value={matchDate}
              onChange={(e) => setMatchDate(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create Match
          </button>
        </form>
      </div>
    </>
  );
}

export default Match;