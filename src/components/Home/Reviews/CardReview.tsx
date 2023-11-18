import Image from "next/image";
import { ReviewType } from ".";

type CardReviewProps = Omit<ReviewType, "id">;

function CardReview({ avatar, altAvatar, name, text, ocupation }: CardReviewProps) {
    return (
        <div className="flex flex-col gap-7 rounded-3xl bg-white py-7 px-5 min-h-[280px]">
            <div className="flex items-center justify-start gap-5">
                <Image
                    src={avatar}
                    alt={altAvatar}
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <div>
                    <h5 className="font-extrabold">{name}</h5>
                    <p className="font-light text-sm text-black/60">{ocupation}</p>
                </div>
            </div>
            <p className="flex-auto text-black/70">{text}</p>
        </div>
    );
}

export default CardReview;
