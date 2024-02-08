import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param) => {
    return /^((songs)|(laulut)|(sanat)|(laulukirja))$/.test(param);
}) satisfies ParamMatcher