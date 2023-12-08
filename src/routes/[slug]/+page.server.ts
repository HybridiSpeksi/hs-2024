import { getPageBySlug } from "$lib/data/pages";
import { error } from "@sveltejs/kit";
export const load = async ({ params }) => {
    const { slug } = params;
    const page = await getPageBySlug(slug);
    
    // console.log(page)

    if (!page) {
        throw error(404, {
            message: "Page not founds"
        });
    }
    return page.data;
};