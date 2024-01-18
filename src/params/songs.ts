import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param) => {
    return /^((songs)|(laulut)|(sanat))$/.test(param);
}) satisfies ParamMatcher