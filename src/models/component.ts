import { title } from 'process';
import { title } from 'process';
import { StaticImageData } from "next/image";
import { ButtonType, ButtonVariant } from "@/enum/enum";

export interface PictureCompProps {
    desktopImg: string | StaticImageData;
    mobileImg: string | StaticImageData;
}

export interface ButtonProps {
    onClick?: Function;
    title?: string;
    rightImage?: StaticImageData | string;
    leftImage?: StaticImageData | string;
    type?: ButtonType;
    variant?: ButtonVariant;
    customClass?: string;
}

export interface FeatureCardProps {
    icon?: StaticImageData | string;
    title: string;
}

export interface SecHeadTitle {
    title: string;
    rightTitle?: string;
    rightTarget?: string;
}

export interface SectionLink {
    title: string;
    to: string;
}

export interface StatCardProps {
    count: string;
    title: string;
}

export interface PrideCardProps {
    icon?: StaticImageData | string;
    title: string;
    count: string;
}