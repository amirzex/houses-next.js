import { Users, Calendar, Wallet, Star } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    { title: "کل رزروها", value: "۱۲۴", icon: <Calendar className="text-blue-500" />, trend: "+۱۲٪" },
    { title: "موجودی کیف پول", value: "۴,۵۰۰,۰۰۰ تومان", icon: <Wallet className="text-emerald-500" />, trend: "+۵٪" },
    { title: "نظرات جدید", value: "۱۸", icon: <Star className="text-amber-500" />, trend: "جدید" },
    { title: "کاربران دعوت شده", value: "۹", icon: <Users className="text-purple-500" />, trend: "+۲" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black text-slate-800 dark:text-white">خوش آمدید، محمد عزیز 👋</h1>
        <p className="text-slate-500">خلاصه وضعیت حساب و فعالیت‌های شما در یک نگاه</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-[#1E1E1E] p-6 rounded-[32px] border border-gray-100 dark:border-white/5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-50 dark:bg-white/5 rounded-2xl">{stat.icon}</div>
              <span className="text-[10px] font-bold px-2 py-1 bg-emerald-50 text-emerald-600 rounded-lg">{stat.trend}</span>
            </div>
            <p className="text-slate-500 text-sm font-bold">{stat.title}</p>
            <p className="text-xl font-black mt-1 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1E1E1E] rounded-[32px] p-8 border border-gray-100 dark:border-white/5 shadow-sm">
          <h3 className="font-black text-lg mb-6 dark:text-white">آخرین رزروها</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-white/5 rounded-2xl transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold">#</div>
                  <div>
                    <p className="font-bold text-sm dark:text-white">رزرو ویلای دوبلکس ساحلی</p>
                    <p className="text-xs text-slate-400">۲۴ مهر ۱۴۰۲</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-500">تکمیل شده</span>
              </div>
            ))}
          </div>
        </div>

        {/* Wallet Brief */}
        <div className="bg-primary text-white rounded-[32px] p-8 shadow-xl shadow-primary/20 flex flex-col justify-between">
          <div>
            <h3 className="font-bold opacity-80 mb-2 text-sm">اعتبار فعلی</h3>
            <p className="text-3xl font-black">۴,۵۰۰,۰۰۰ <span className="text-sm">تومان</span></p>
          </div>
          <div className="mt-8 space-y-3">
            <button className="w-full py-4 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-2xl font-bold transition-all text-sm">افزایش موجودی</button>
            <button className="w-full py-4 bg-white text-primary rounded-2xl font-bold transition-all text-sm">برداشت وجه</button>
          </div>
        </div>
      </div>
    </div>
  );
}
