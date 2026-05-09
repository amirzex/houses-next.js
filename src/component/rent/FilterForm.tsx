import React from 'react';
import { SelectInput } from './SelectInput';

const FilterForm = () => {
    return (
        <form className="w-full flex flex-col gap-6" onSubmit={e => e.preventDefault()} dir='rtl'>
            {/* ردیف اول */}
            <div className="w-full flex flex-row max-sm:flex-col justify-center items-center gap-4 ">
                <div className="flex flex-col gap-3 w-[25%] max-sm:w-full ">
                    <label className="text-xs font-bold text-gray-800 px-2 dark:text-[#D9D9E0]">جستجو</label>
                    <input
                        type="text"
                        placeholder="نام محل مورد نظر ..."
                        className="w-full bg-gray-100/80 text-gray-500 dark:text-[#D9D9E0] dark:bg-[#353535] text-sm rounded-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#1a3b99]/20 transition-all placeholder:text-gray-400"
                    />
                </div>
                <div className='w-[75%] flex flex-row max-sm:flex-col max-sm:w-full justify-center gap-5 items-center'>
                    <SelectInput label="مرتب سازی بر اساس" placeholder="انتخاب کنید" />
                    <SelectInput label="محل مورد نظر" placeholder="انتخاب کنید" />
                    <SelectInput label="نوع ملک" placeholder="انتخاب کنید" />
                    <SelectInput label="نوع معامله" placeholder="انتخاب کنید" />
                </div>
            </div>

            {/* ردیف دوم */}
            <div className="flex flex-row max-sm:flex-col max-sm:w-full justify-center items-center gap-4 max-sm:px-0 px-20">
                <SelectInput label="حداکثر قیمت" placeholder="انتخاب کنید" />
                <p className='max-sm:hidden'>|</p>
                <SelectInput label="حداقل اجاره" placeholder="انتخاب کنید" />
                <SelectInput label="حداکثر اجاره" placeholder="انتخاب کنید" />
                <p className='max-sm:hidden'>|</p>
                <SelectInput label="حداقل متراژ" placeholder="انتخاب کنید" />
                <SelectInput label="حداکثر متراژ" placeholder="انتخاب کنید" />
            </div>
        </form>
    );
};

export default FilterForm;
