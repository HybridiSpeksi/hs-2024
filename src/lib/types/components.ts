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