import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { coaches } from "../api/coaches";

export default function CoachCard(props) {
  const { name, lastName, numberPhone, medails } = props;

  const handleDelete = () => {
    coaches.deleteById()
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${name} ${lastName}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Numero de telefono: {numberPhone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Medallas: {medails}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Editar</Button>
        <Button size="small" onClick={handleDelete()}>Eliminar</Button>
      </CardActions>
    </Card>
  );
}
