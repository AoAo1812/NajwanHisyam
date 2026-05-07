export default function holidaypage() {
    return(
        <div className="bg-gray-300 h-screen flex gap-4 justify-center items-center flex-col text-black">

                <div className="bg-white h-110 w-80 flex p-4 rounded-4xl flex-col gap-4">

                    <div className="flex justify-center ">
                        <img src="pemandangan.webp"className="h-60 w-78 items-center rounded-4xl"></img>
                    </div>

                    <div className="flex flex-col">
                        <p  className="text-2xl font-bold text-black"> San Fransico</p>
                        <p className="text-gray-500"> Premium economy </p>

                    </div>

                    <div className="flex justify-between">
                        <img src="tag.svg"></img>
                        <p>from $240</p>
                        <img src="plane-tilt.svg"></img>
                        <p>SFO</p>
                    </div>
                        <div className="flex justify-between">
                            <button className="bg-blue-500 text-white px-6 py-2 w-50 rounded-4xl text-center">
                            Search flight
                            </button>
                        <div className="bg-white justify-center h-8 w-8 rounded">
                            <img src="heart.svg"></img>
                        </div>
                    </div>
                </div>

        </div>

    )
}