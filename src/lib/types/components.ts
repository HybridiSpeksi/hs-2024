export type CoreParagraph = {
    content: string
    align: string
    fontSize: string
}

export type CoreHeading = {
    content: string,
    textAlign: string,
    fontSize: string,
    level: number
}

export type CoreImage = {
    align: string,
    alt: string,
    caption: string,
    aspectRatio: string,
    scale: string,
    sizeSlug: string,
    height: string,
    width: string,
    href: string,
    src: string,
    url: string
}

export type MediaText = {
    align: string,
    content: string
}

export type CoreMediaText = {
    align: string,
    children: Array<MediaText>,
    href: string,
    isStackedOnMobile: boolean,
    mediaAlt: string,
    mediaPosition: string,
    mediaSizeSlug: string,
    mediaType: string,
    mediaUrl: string,
    mediaWidth: number,
    name: string,
    verticalAlignment: string
}