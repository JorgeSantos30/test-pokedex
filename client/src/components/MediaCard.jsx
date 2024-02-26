import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ name }) {
  console.log(name);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.profesionalreview.com/wp-content/uploads/2017/05/Pronto-podr%C3%A1s-atrapar-los-pokemon-legendarios-1.jpg"
        title="imagen pokemon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Habilidad:
        </Typography>
      </CardContent>
    </Card>
  );
}
