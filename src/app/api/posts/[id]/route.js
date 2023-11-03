import { NextResponse } from "next/server";
import connect from "@/utils/db";
// import Post from "@/models/Post";
import NewPost from "@/models/NewPost";

export const GET = async (request, { params }) => {
    const { id } = params;
    try {
        await connect();
        const post = await NewPost.findById(id);
        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    const { id } = params;
    try {
        await connect();
        await NewPost.findByIdAndDelete(id);
        return new NextResponse("Post has been Deleted", { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};
