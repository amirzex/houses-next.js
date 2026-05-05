import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

export interface DestinationCardProps {
    title: string;
    count: number | string;
    countLabel?: string;
    imageSrc: string | StaticImageData;
}

const DestinationCard: FC<DestinationCardProps> = ({
    title = "اجاره ویلا در سوادکوه",
    count = 50,
    countLabel = "مورد",
    imageSrc
}) => {
    return (
        <div className="relative w-[25%] h-90  aspect-[4/3] rounded-3xl overflow-hidden shadow-md font-sans">
            {/* تصویر پس‌زمینه */}
            <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
                unoptimized
            />

            {/* باکس سفید پایین عکس */}
            <div
                dir="rtl"
                className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl px-5 py-5 flex justify-between items-center shadow-lg"
            >
                {/* عنوان */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {title}
                </h3>

                {/* دکمه / نشانگر تعداد */}
                <div className="border border-[#1E3A8A] text-[#1E3A8A] rounded-full px-5 py-2 font-bold text-2xl flex gap-1 justify-center items-center">
                    <span>{count}</span>
                    <span>{countLabel}</span>
                </div>
            </div>
        </div>
    );
}

export default DestinationCard;
