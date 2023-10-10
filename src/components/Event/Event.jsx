import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { formatEventStart, formatEventDuration } from "helpers";
import { iconSize } from "constants";
import PropTypes from 'prop-types';
import css from "./Event.module.css"


export const Event = ({ name, location, speaker, type, start, end }) => {
    

    const formatStartTime = formatEventStart(start);
    const duration = formatEventDuration(start, end);

    console.log(css[type]);
    console.log(css);
    return (
  <div className={css.event}>
            <h2 className={css.title}>{name}</h2>
  <p className={css.info}>
                <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
    {location}
  </p>
  <p className={css.info}>
                <FaUserAlt className={css.icon} size={iconSize.sm} />
    {speaker}
  </p>
  <p className={css.info}>
    <FaCalendarAlt className={css.icon} size={iconSize.sm}/>
    {formatStartTime}
  </p>
  <p className={css.info}>
    <FaClock className={css.icon} size={iconSize.sm}/>
    {duration}
  </p>
            <span className={`${css.chip} ${css[type]}`}>{type}</span>
</div>
    )
}

Event.prototypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}