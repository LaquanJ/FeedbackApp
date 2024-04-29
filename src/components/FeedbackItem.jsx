import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
//Custom Modules
import Card from './global/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
1;

export default FeedbackItem;
