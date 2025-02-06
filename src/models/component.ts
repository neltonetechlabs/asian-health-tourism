import { StaticImageData } from "next/image";
import { ButtonType, ButtonVariant } from "@/enum/enum";
import { ReactNode } from 'react';

export interface PictureCompProps {
    desktopImg: string;
    mobileImg: string;
}

export interface ButtonProps {
    onClick?: Function;
    title?: string;
    rightImage?: StaticImageData | string;
    leftImage?: StaticImageData | string;
    type?: ButtonType;
    variant?: ButtonVariant;
    customClass?: string;
    linkUrl?: string;
}

export interface FeatureCardProps {
    icon?: StaticImageData | string;
    title: string;
}

export interface SecHeadTitle {
    title: string;
    rightTitle?: string;
    rightTarget?: string;
    rightSection?: ReactNode;
}

export interface SectionLink {
    title: string;
    to: string;
    isMobile?: boolean;
}

export interface StatCardProps {
    count: string;
    title: string;
}

export interface PrideCardProps {
    icon?: StaticImageData | string;
    title: string;
    count: string;
    delay: number;
}

export interface BlogCardProps {
    id: number;
    image?: string | null;
    title: string;
    description?: string;
    slug?: string;
    date: string;
    delay?: number;
    locale: string;
}

export interface BannerProps {
    image?: string | null;
    title?: string;
    subTitle?: string;
    page: string;
}

export interface CheckListProps {
    listItems: string[];
}

export interface ImageWrapTemplProps {
    title: string;
    headerComp?: ReactNode;
    image: string | StaticImageData;
    content: string;
    primaryBtnText?: string;
    secondaryBtnText?: string;
    primaryLink?: string;
    secondaryLink?: string;
}

export interface ListCardProps {
    title: string;
    image: string | StaticImageData | null;
    description: string;
    slug: string;
    locale?: string;
}

export interface DefaultPageParam {
    params: { locale: string }
}
export interface DetailPageParam {
    params: { locale: string; procedure: string }
}
