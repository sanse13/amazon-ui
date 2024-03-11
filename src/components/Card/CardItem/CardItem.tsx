import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function CardItem() {
  const msg = () => {
    console.log('hola');
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={msg}>
            <MoreVertIcon />
          </IconButton>
        }
        title="Garmin Epix Gen 2"
        subheader=""
      />
      <CardMedia
        component="img"
        height="194"
        image="default-product-image.jpeg"
        alt="Default image product"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          El Garmin epix Gen 2 representa la evolución de la línea de relojes
          inteligentes deportivos de Garmin, diseñado para atender las
          necesidades de entusiastas del deporte y actividades al aire libre.
          Este reloj cuenta con un GPS integrado que proporciona información
          precisa sobre la ubicación y el rendimiento durante las actividades.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
