export default function learnpage() {
    return (
    <div className="bg-gray-600 h-screen flex justify-center items-center">

        <div className="bg-gray-100 h-105 w-90 gap-2 p-6 rounded-4xl text-black">

    {/* INI YANG PALING ATAS */}
            <div className="flex justify-between">
                <p>Client Detail</p>
                <p>✕</p>
            </div>

    {/* PROFILE GWEH */}
        <div className="flex items-center gap-3 ">
                <img src="/oraemon-chibi.jpg" className="w-15 h-15 rounded-full" />
            <div className="flex flex-col gap-1">  
                <h1 className=" text-black" gap-4="true">doraemon</h1>
                
                <div className="bg-green-200 flex item-center rounded-full w-fit ">
                    <img src="rosette-discount-check.svg" className="h-4"></img>
                    <p>Verified</p>
                </div>
            </div>  
                
        </div>

    {/* CONTAINER lagi ini */}
            <div className="bg-gray-300 border p-4 rounded-lg mt-4">
                <div className="flex justify-between">
                    <p className="font-bold">Project</p>
                    <p className="font-bold">Status</p>
                </div>

                <div className="flex justify-between mt-2">
                    <p> 2 ($2.8)</p>
                    <p>25 (%54)</p>
                </div>
            </div>

    {/* INFO DATA DIRI BOY */}
                <div className="flex justify-between mt-4">
                    <p className="text-black">Email</p>
                    <p className="text-black">najwanyusu8@email.com</p>
                </div>

                <div className="flex justify-between mt-2">
                    <p className="text-black">Phone</p>
                    <p className="text-black">081350948450</p>
                </div>

            <div className="flex items-center justify-between mt-6">

                <p className="text-xl text-black">⋮</p>

                <div className="flex mt-4 justify-center">
                    <button className="bg-blue-500 text-white px-6 py-2 w-70 rounded-x1 text-center">
                     Message
                    </button>
                </div>
            </div>
        </div>
    </div>

    )

}