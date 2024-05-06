export default {
    name: 'outcomePage',
    type: 'document',
    title: 'Outcome Page',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading'
        },
        {
            name: 'outcomeImage',
            type: 'image',
            title: 'Outcome Image'
        },
        {
            name: 'para',
            type: 'text',
            title: 'Outcome Para'
        },
        {
            name: 'outcomes',
            type: 'array',
            title: 'Outcome Para',
            of: [{type: 'string'}]
        },
    ]
}