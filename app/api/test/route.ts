import { auth } from "@/auth"

export const GET = auth((req) => {
    if (req.auth) {
        return Response.json({ data: "Test data!" })
    }

    return Response.json({ message: "Not authenticated" }, { status: 401 })
});
