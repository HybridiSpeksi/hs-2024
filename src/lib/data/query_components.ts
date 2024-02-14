export const components = [
    {
        name: 'CoreParagraph',
        attributes: [
            'content',
            'align',
            'fontSize'
        ]
    },
    {
        name: 'CoreHeading',
        attributes: [
            'content',
            'textAlign',
            'fontSize',
            'level'
        ]
    },
    {
        name: 'CoreMediaText',
        attributes: [
            'align',
            'verticalAlignment',
            'isStackedOnMobile',
            'href',
            'mediaAlt',
            'mediaSizeSlug',
            'mediaPosition',
            'mediaSizeSlug',
            'mediaWidth',
            'mediaType',
            'mediaLink',
            'mediaUrl'
        ],
        innerBlocks: `
            innerBlocks {
                ... on CoreParagraph {
                    attributes {
                        content
                        align
                        fontSize
                    }
                }
            }
        `
    },
    {
        name: 'CoreImage',
        attributes: [
            'align',
            'alt',
            'caption',
            'aspectRatio',
            'scale',
            'sizeSlug',
            'height',
            'width',
            'href',
            'src',
            'url'
        ]
    },
    {
        name: 'CoreVideo',
        attributes: [
            'src'
        ]
    }
]