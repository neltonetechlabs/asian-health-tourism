import { title } from 'process';
import { title } from 'process';
import { StaticImageData } from "next/image";
import { ButtonType, ButtonVariant } from "@/enum/enum";
import { ReactNode } from 'react';

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
    rightSection?: ReactNode;
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

export interface BlogCardProps {
    id: number;
    image?: string;
    title: string;
    description?: string;
    slug?: string;
}

export interface BannerProps {
    image?: string;
    title?: string;
    subTitle?: string;
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
    image: string | StaticImageData;
    description: string;
    slug: string;
}