import { NextResponse } from "next/server";

let favorites: string[] =[];


export async function GET() {
    return NextResponse.json(favorites);
}

export async function POST(req: Request) {
    const {  id } = await req.json();

    if(!favorites.includes(id)){
        favorites.push(id)
    }
    return NextResponse.json(favorites);    
}

export async function DELETE(req: Request) {
    const { id } = await req.json();
    favorites = favorites.filter((fav) => fav !== id);

    return NextResponse.json(favorites);
    
}