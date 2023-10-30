import Calendar from "react-calendar"
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
const Calenderpg = () => {
    const [date, setdate] = useState(new Date())
    return (
        <div>
            <Calendar value={date} />
        </div>
    )
}

export default Calenderpg
