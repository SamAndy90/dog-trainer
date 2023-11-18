import { twMerge } from "tailwind-merge";

export type TitleProps = {
    children: React.ReactNode;
    component?: React.ElementType;
    className?: string;
};

export function Title(props: TitleProps) {
    const { children, component = "h2", className } = props;
    const Component = component;

    return (
        <Component
            className={twMerge("text-[40px] font-semibold !leading-tight md:text-5xl", className)}>
            {children}
        </Component>
    );
}
