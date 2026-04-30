export default function learnpage() {
    return (
    <div className=" bg-white h-screen flex gap-4 justify-center" >
        <div className=" bg-purple-300 h-72 w-100 flex flex-col justify-between p-8 rounded-4xl text-black"> 
            <div className=" flex gap-4"> 
                <img src="/palette.svg" />
                <p> Design </p>
                </div>
                <div className="">
                    <h1 className="text-4x1 font-bold ">FIGMA</h1>
                    <p className="text-lg"> 8 hours' ago </p>
            </div>
        </div>

        <div className=" bg-blue-300 h-72 w-100 flex flex-col justify-between p-8 rounded-4xl text-black"> 
            <div className=" flex gap-4"> 
                <img src="/palette.svg" />
                <p> Design </p>
                </div>
                <div className=" ">
                    <h1 className="text-4x1 font-bold ">PYTHON</h1>
                    <p className="text-lg"> 8 hours' ago </p>
            </div>
        </div>

        <div className=" bg-yellow-300 h-72 w-100 flex flex-col justify-between p-8 rounded-4xl text-black"> 
            <div className="flex gap-4"> 
                <img src="/palette.svg" />
                <p> Design </p>
                </div>
                <div className=" ">
                    <h1 className="text-4x1 font-bold ">CSS</h1>
                    <p className="text-lg"> 8 hours' ago </p>
            </div>
        </div>
    </div>
    
    )
}
