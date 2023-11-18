import Image, { StaticImageData } from "next/image";

type CardProps = {
  icon: StaticImageData;
  altIcon: string;
  title: string;
  description: string;
};

function Card({ icon, altIcon, title, description }: CardProps) {
  return (
    <div
      className={
        "flex min-h-[250px] flex-col items-center justify-start gap-4 rounded-3xl p-5 text-center shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-shadow duration-500 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]"
      }>
      <Image src={icon} alt={altIcon} />
      <h3 className={"text-2xl font-bold"}>{title}</h3>
      <p className={"flex-auto text-lg"}>{description}</p>
    </div>
  );
}

export default Card;
