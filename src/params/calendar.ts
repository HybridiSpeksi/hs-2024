import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param) => {
    return /^((calendar)|(kalenteri))$/.test(param);
}) satisfies ParamMatcher