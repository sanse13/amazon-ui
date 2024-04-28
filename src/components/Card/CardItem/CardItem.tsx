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

interface CardItemProps {
  name: string;
  description: string;
  image: string;
  price: number;
}

export default function CardItem(props: CardItemProps) {
  return (
    <Card className="w-full">
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<span className="text-lg">{props.name}</span>}
        subheader={`${props.price}€`}
      />
      <CardMedia
        component="img"
        className="w-[10rem] h-[10rem]"
        image={props.image}
        alt="Default image photo"
        sx={{ padding: '1em 1em 0 1em', objectFit: 'contain' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description}
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
