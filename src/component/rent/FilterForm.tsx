import React from "react";
import { SelectInput } from "./SelectInput";

const FilterForm = ({ filters, setFilters }: any) => {
    const handleChange = (name: string, value: any) => {
        setFilters((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <form className="w-full flex flex-col gap-6" onSubmit={e => e.preventDefault()} dir='rtl'>
            {/* ردیف اول */}
            <div className="w-full flex flex-row max-sm:flex-col justify-center items-center gap-4 ">
                <div className="flex flex-col gap-3 w-[25%] max-sm:w-full ">
                    <label className="text-xs font-bold text-gray-800 px-2 dark:text-[#D9D9E0]">
                        جستجو
                    </label>
                    <input
                        type="text"
                        value={filters?.search || ""}
                        onChange={(e) => handleChange("search", e.target.value)}
                        placeholder="نام محل مورد نظر ..."
                        className="w-full bg-gray-100/80 text-gray-500 dark:text-[#D9D9E0] dark:bg-[#353535] text-sm rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#1a3b99]/20 transition-all placeholder:text-gray-400"
                    />
                </div>

                <div className='w-[75%] flex flex-row max-sm:flex-col max-sm:w-full justify-center gap-5 items-center'>

                    <SelectInput
                        label="مرتب سازی بر اساس"
                        placeholder="انتخاب کنید"
                        value={filters?.sort}
                        onChange={(v: any) => handleChange("sort", v)}
                        options={[
                            { label: "جدیدترین", value: "last_updated" },
                            { label: "قدیمی ترین", value: "created_at" }
                        ]}
                    />

                    <SelectInput
                        label="محل مورد نظر"
                        placeholder="انتخاب کنید"
                        value={filters?.location}
                        onChange={(v: any) => handleChange("location", v)}
                        options={[
                            { label: "تهران", value: "tehran" },
                            { label: "مشهد", value: "mashhad" }
                        ]}
                    />

                    <SelectInput
                        label="نوع ملک"
                        placeholder="انتخاب کنید"
                        value={filters?.propertyType}
                        onChange={(v: any) => handleChange("propertyType", v)}
                        options={[
                            { label: "آپارتمان", value: "apartment" },
                            { label: "ویلا", value: "villa" }
                        ]}
                    />

                    <SelectInput
                        label="نوع معامله"
                        placeholder="انتخاب کنید"
                        value={filters?.transactionType}
                        onChange={(v: any) => handleChange("transactionType", v)}
                        options={[
                            { label: "اجاره", value: "rental" },
                            { label: "رزرو", value: "reservation" }
                        ]}
                    />

                </div>
            </div>

            {/* ردیف دوم */}
            <div className="flex flex-row max-sm:flex-col max-sm:w-full justify-center items-center gap-4 max-sm:px-0 px-20">

                <div className="flex flex-col gap-3 w-full">
                    <label className="text-xs font-bold text-gray-800 px-2 dark:text-[#D9D9E0]">
                        حداکثر قیمت
                    </label>
                    <input
                        type="number"
                        value={filters?.maxPrice || ""}
                        onChange={(e) => handleChange("maxPrice", e.target.value)}
                        placeholder="مقدار را وارد کنید"
                        className="w-full bg-gray-100/80 text-gray-500 dark:text-[#D9D9E0] dark:bg-[#353535] text-sm rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#1a3b99]/20"
                    />
                </div>

                <p className='max-sm:hidden'>|</p>

                <div className="flex flex-col gap-3 w-full">
                    <label className="text-xs font-bold text-gray-800 px-2 dark:text-[#D9D9E0]">
                        حداقل اجاره
                    </label>
                    <input
                        type="number"
                        value={filters?.minRent || ""}
                        onChange={(e) => handleChange("minRent", e.target.value)}
                        placeholder="مقدار را وارد کنید"
                        className="w-full bg-gray-100/80 text-gray-500 dark:text-[#D9D9E0] dark:bg-[#353535] text-sm rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#1a3b99]/20"
                    />
                </div>

                <div className="flex flex-col gap-3 w-full">
                    <label className="text-xs font-bold text-gray-800 px-2 dark:text-[#D9D9E0]">
                        حداکثر اجاره
                    </label>
                    <input
                        type="number"
                        value={filters?.maxRent || ""}
                        onChange={(e) => handleChange("maxRent", e.target.value)}
                        placeholder="مقدار را وارد کنید"
                        className="w-full bg-gray-100/80 text-gray-500 dark:text-[#D9D9E0] dark:bg-[#353535] text-sm rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#1a3b99]/20"
                    />
                </div>

                <p className='max-sm:hidden'>|</p>

                <div className="flex flex-col gap-3 w-full">
                    <label className="text-xs font-bold text-gray-800 px-2 dark:text-[#D9D9E0]">
                        حداقل متراژ
                    </label>
                    <input
                        type="number"
                        value={filters?.minArea || ""}
                        onChange={(e) => handleChange("minArea", e.target.value)}
                        placeholder="مقدار را وارد کنید"
                        className="w-full bg-gray-100/80 text-gray-500 dark:text-[#D9D9E0] dark:bg-[#353535] text-sm rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#1a3b99]/20"
                    />
                </div>

                <div className="flex flex-col gap-3 w-full">
                    <label className="text-xs font-bold text-gray-800 px-2 dark:text-[#D9D9E0]">
                        حداکثر متراژ
                    </label>
                    <input
                        type="number"
                        value={filters?.maxArea || ""}
                        onChange={(e) => handleChange("maxArea", e.target.value)}
                        placeholder="مقدار را وارد کنید"
                        className="w-full bg-gray-100/80 text-gray-500 dark:text-[#D9D9E0] dark:bg-[#353535] text-sm rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#1a3b99]/20"
                    />
                </div>

            </div>
        </form>
    );
};

export default FilterForm;
