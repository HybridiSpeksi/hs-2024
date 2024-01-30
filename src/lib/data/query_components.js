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
            'href'
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
            'href'
        ]
    },
    {
        name: 'CoreVideo',
        attributes: [
            'src'
        ]
    }
]