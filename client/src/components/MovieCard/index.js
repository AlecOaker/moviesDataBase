import {
  Card,
  CardContent,
  CardMedia,
  MenuItem,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import React from "react";
import CardMenu from "../CardMenu";

const CardInfo = styled(CardContent)(({ theme }) => ({
  "&:last-child": {
    padding: theme.spacing(2),
  },
}));

const MovieCard = ({ movie, onCardSelect }) => {
  return (
    <Card sx={{ maxWidth: 190, position: "relative" }}>
      <CardMenu>
        <MenuItem onClick={onCardSelect}>Select</MenuItem>
      </CardMenu>
      <CardMedia
        component="img"
        height="250"
        image={movie.image}
        alt={movie.title}
      />

      <CardInfo>
        <Typography variant="h6" gutterBottom component="div">
          {movie.title}
        </Typography>
        <Typography variant="subtitle2" component="div">
          {movie.releaseDate}
        </Typography>
      </CardInfo>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
  }).isRequired,
  onCardSelect: PropTypes.func,
};

export default MovieCard;
