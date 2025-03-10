import beautifulDay, { currentYear as year, currentMonth as month, currentDay } from '../../util/util'

function Greetings() {
    return (
        <div class='greetings'>
            <div>Day: {beautifulDay()}</div>
            <div>Year: {year()}</div>
            <div>Month: {month()}</div>
            <div>Day of Month: {currentDay()}</div>
        </div>
    );
}

export default Greetings;
