
export const Step2Form = ({ onNext, onBack }) => (
    <div className="w-full flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-300">
        <p className="text-center text-sm text-gray-500">کد تایید ارسال شده را وارد کنید</p>

        <div className="flex justify-center gap-3" dir="ltr">
            {[1, 2, 3, 4].map((i) => (
                <input
                    key={i}
                    type="text"
                    maxLength="1"
                    className="w-12 h-12 text-center border border-gray-200 rounded-xl text-lg font-bold focus:border-[#1a3b99] focus:outline-none transition-colors"
                />
            ))}
        </div>

        <div className="text-center text-xs text-gray-400 mt-[-10px]">
            ارسال مجدد کد تا ۰۱:۵۹
        </div>

        <button
            onClick={(e) => { e.preventDefault(); onNext(); }}
            className="bg-[#1a3b99] text-white p-4 rounded-full font-bold text-sm hover:bg-blue-900 transition-colors"
        >
            ارسال کد تایید
        </button>

        <div className="flex justify-end mt-2">
            <button onClick={onBack} className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1">
                بازگشت
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
        </div>
    </div>
);