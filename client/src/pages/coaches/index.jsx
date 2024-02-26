import Grid from "@mui/material/Grid";
import { coaches } from "../../api/coaches";
import React, { useState } from "react";
import CoachCard from "../../components/CoachCard";
import { Button } from "@mui/material";

function Coaches() {
  const [allCoaches, setallCoaches] = useState([]);

  React.useEffect(() => {
    coaches
      .getAll()
      .then((r) => {
        setallCoaches(r.data.coaches);
      })
      .catch((error) => {
        console.error("Error solicitando los entrenadores", error);
      });
  }, []);

  console.log(allCoaches);
  return (
    <Grid direction="row" spacing={4} container margin={2}>
                <Button variant="contained" >Agregar entrenador</Button>

      {allCoaches.map((coach) => (
        <Grid item key={coach._id}>
          <CoachCard name={coach.name} lastName={coach.lastName} numberPhone={coach.numberPhone} medails={coach.medails} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Coaches;
