import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

function Stats({ bookings, confirmedStays, numDays, cabinsCount }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => (acc += cur.totalPrice), 0);

  const checkins = confirmedStays.length;

  const occupacy =
    confirmedStays.reduce((acc, cur) => (acc += cur.numNights), 0) /
    (cabinsCount * numDays);
  // rate = num checked / (cabins count * numdays)
  //   rate: checked on total cabins and the range between today and last 7 / 30 / 90 days

  return (
    <>
      <Stat
        title="Booking"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />

      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />

      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />

      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupacy * 100) + "%"}
      />
    </>
  );
}

export default Stats;
