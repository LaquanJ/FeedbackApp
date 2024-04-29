import { useState, useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import FeedbackContext from '../context/FeedbackContext';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6a95',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(5);
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">{selected} Stars</Typography>
      <StyledRating
        name="rating"
        defaultValue={selected}
        max={10}
        value={selected}
        onChange={handleChange}
      />
    </Box>
  );
}
export default RatingSelect;
