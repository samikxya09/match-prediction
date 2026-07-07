import { useEffect , useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";

function Team() {
  const [name, setName] = useState("");
  const [captain, setCaptain] = useState("");
  const [coach, setCoach] = useState("");
  const [teams, setTeams] = useState([]);
  const [editingId, setEditingId] = useState(null);

  async function sendTeamData(event) 
  {
    event.preventDefault();
       await axios.post("http://localhost:3000/createteam",{
        name: name,
        captain: captain,
        coach: coach,
      });
      fetchTeams();
 console.log(name,captain,coach)
    }
async function fetchTeams() {
  const response = await axios.get("http://localhost:3000/fetch-teams");

  console.log(response.data);

  setTeams(response.data.data); // in backend it is use as teamname:teamname so object should look like this so data.data
}


//delete
async function deleteTeam(id) {
  await axios.delete(`http://localhost:3000/delete-team/${id}`); //await=Wait until the backend finishes deleting the team.

  fetchTeams();  //dekhauxa feri delete vaye paxi 
}



//update
function editTeam(team){
   setName(team.teamname);
  setCaptain(team.teamcaptain);
  setCoach(team.teamcoach);

  setEditingId(team.id);
}




useEffect(() => {
  fetchTeams();
}, []);



  return (
    <>
      <Navbar />

      <form onSubmit={sendTeamData}>
        <input
          type="text"
          placeholder="Team Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Captain"
          value={captain}
          onChange={(e) => setCaptain(e.target.value)}
        />

        <input
          type="text"
          placeholder="Coach"
          value={coach}
          onChange={(e) => setCoach(e.target.value)}
        />

        <button type="submit">Save Team</button>
      </form>
        <div className="min-h-screen bg-gray-100 py-10 px-6">
  <div className="max-w-6xl mx-auto">

    <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
      Football Teams
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {teams.map((team) => (
        <div
          key={team.id}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
            {team.teamname}
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">
                Captain
              </span>

              <span className="text-gray-800">
                {team.teamcaptain}
              </span>
            </div>

            <hr />

            <div className="flex justify-between">
              <span className="font-semibold text-gray-600">
                Coach
              </span>

              <span className="text-gray-800">
                {team.teamcoach}
              </span>
            </div>

          </div>

          
<button
  onClick={() => editTeam(team)}
  className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
>
  Edit
</button>
              <button
      onClick={() => deleteTeam(team.id)}
      className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
      Delete
    </button>


          
        </div>
      ))}

    </div>
  </div>
</div>

               
    </>
  );

}
export default Team;