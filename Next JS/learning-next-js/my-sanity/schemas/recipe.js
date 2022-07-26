export default {
    name: "recipe",
    title: "Recipe",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Recipe Name",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96
            }
        },
        {
            name: "chef",
            title: "chef",
            type: "reference",
            to: { type: "chef" }
        },
        {
            name: "mainImage",
            title: "Recipe Main Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "ingredients",
            title: "Ingredients",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "ingredient",
                            title: "Ingredient",
                            type: "reference",
                            to: [{ type: "ingredient" }]
                        },
                        {
                            name: "wholeNumber",
                            title: "whole Number",
                            type: "number"
                        },
                        {
                            name: "fraction",
                            title: "Fraction",
                            type: "string",
                            options: {
                                list: ["1/2", "1/3", "1/4", "2/3", "3/4"]
                            }
                        },
                        {
                            name: "unit",
                            title: "Unit",
                            type: "string",
                            options: ["grams", "cup", "t.spoon"]
                        }
                    ],
                    preview: {
                        select: {
                            title: "ingredient.name",
                            name: "ingredient.name",
                            media: "ingredient.image",
                            wholeNumber: "wholeNumber",
                            fraction: "fraction",
                            unit: "unit"
                        },
                        prepare({
                            title,
                            subtitle,
                            media,
                            wholeNumber = "(No whole number set",
                            fraction = "(No fraction number set",
                            unit = "(No unit set)"
                        }) {
                            return {
                                title,
                                subtitle: `${wholeNumber} ${fraction} ${unit} `,
                                media
                            }
                        }
                    }
                }
            ]
        }
    ]
}