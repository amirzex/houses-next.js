"use client"
import BookingChart from './Tooltip/BookingChart';
import { useDashboardSummary } from '@/core/api/dashboard/dashboardQuery/DashboardQuery';
import BookingTable from './table/BookingTable';
import State from './State/State';


export default function DashboardPage() {

  const { data, isLoading } = useDashboardSummary()

  if (isLoading) {
    return <div>در حال بارگذاری ...</div>;
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

      {/* Stats Grid */}
      <State  />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activities */}
        <BookingTable />

        {/* chart */}
        <BookingChart
          bookingCount={data?.bookings?.bookingCount || 6}
          pendingBookings={data?.bookings?.pendingBookings || 10}
          conformedBookings={data?.bookings?.conformedBookings || 15}
          canceledBookings={data?.bookings?.canceledBookings || 4}
        />

        {/* Wallet Brief */}
        {/* <div className="bg-primary text-white rounded-[32px] p-8 shadow-xl shadow-primary/20 flex flex-col justify-between">
          <div>
            <h3 className="font-bold opacity-80 mb-2 text-sm">اعتبار فعلی</h3>
            <p className="text-3xl font-black">۴,۵۰۰,۰۰۰ <span className="text-sm">تومان</span></p>
          </div>
          <div className="mt-8 space-y-3">
            <button className="w-full py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-2xl font-bold transition-all text-sm">افزایش موجودی</button>
            <button className="w-full py-4 bg-white text-primary rounded-2xl font-bold transition-all text-sm">برداشت وجه</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
