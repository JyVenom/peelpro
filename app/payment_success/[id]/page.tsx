export default async function Page({ params }: { params: { id: string } }){
   const data = await Data(params.id)
    return (
        <div className="flex text-4xl text-banana font-red bg-cover p-8 bg-[url('/background.svg')] full center min-h-screen min-w-screen">
            <div className="aspect-square flex-col full max-w-2xl rounded-2xl flex center bg-brown shadow-2xl">
                <div className="uppercase text-center">YOUR CODE IS:</div>
                <div className="text-center">{data[0].checkout_id}</div>
            </div>
        </div>
    )
}

async function Data(id: string){
    const res = await fetch(`http://localhost:3000/api/success_code/${id}`, { cache: 'force-cache' })
    return res.json()
}