import { defineType } from "sanity";

export const herobanner = defineType({
    name:"heroBanner",
    title: "HeroBanner",
    type: "document",
    fields:[
        {
            name: "title",
            title: "Heading",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name:"description",
            title:"Description",
            validation: (rule) => rule.required(),
            type:"string"
        },
        {
            name:"cta",
            title: "Button",
            type: "object",
            fields:[
                {
                    name:"buttonText",
                    title:"Button Text",
                    validation: (rule) => rule.required(),
                    type:"string"
                },
                // {
                //     name: "buttonLink",
                //     title: "Button Link",
                //     type: "url"
                // }
            ]
        }
    ]

})
