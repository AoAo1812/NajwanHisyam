 export default function task2page() {
    return (
    <div className=" bg-white h-screen flex gap-4 justify-center items-center flex-col">
        <div className=" flex gap-4 justify-center">

        <div className=" bg-blue-100 h-75 w-116 flex flex-col justify-between p-12 rounded-4xl text-black"> 
            <div className="flex gap-2"> 
                <img src="/palette.svg" />
                <p> Design </p>
            </div>
                <div className=" ">
                    <h1 className="text-3xl font-bold ">Adobe Photoshop</h1>
            
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-lg"> in 3 days' ago </p>
                        <div className="flex -space-x-3 items-center">
                            <img src="/e0cb05c649a41b39269b840348b0d51c.jpg" className="w-8 h-8 rounded-full border-2 border-white" />
                            <img src="/783c9e82e0e1d99402e6a21223cb4b42.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-3" />
                            <img src="/images.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-3" />
                            <div className="w-8 h-8 rounded-full bg-blue-100 p-2 text-xs">
                            +3
                        </div>
                        </div>
                    </div>
                 </div>
        </div>
            <div className=" bg-green-100 h-75 w-116 flex flex-col justify-between p-12 rounded-4xl text-black"> 
                    <div className="flex justify-between items-center" > 
                        <div className=" flex gap-2"> 
                            <img src="/terminal-2.svg" />
                            <p> AI </p>
                        </div>
                            <img src= "/star.svg"/>
                    </div>
                <div>
                     <h1 className="text-2xl font-bold ">DALL-E 2, Midjourny, Stable Diffusion</h1>
                 
                    <div className="flex items-center justify-between mt-3">
                            <p className="text-lg justify-center"> in 5 days' ago </p>
                        <div className="flex -space-x-3 items-center">
                            <img src="/e0cb05c649a41b39269b840348b0d51c.jpg" className="w-8 h-8 rounded-full border-2 border-white" />
                            <img src="/783c9e82e0e1d99402e6a21223cb4b42.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-3" />
                            <img src="/images.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-3" />
                            <div className="w-8 h-8 rounded-full bg-green-100 p-2 text-xs">
                                +3
                            </div>
                        </div>
                    </div>
                </div>
             </div>           
        </div>
    <div className="flex gap-4 justify-center" >
        <div className=" bg-purple-200 h-72 w-75 flex flex-col justify-between p-8 rounded-4xl text-black"> 
                    <div className=" flex gap-4"> 
                        <img src="/palette.svg" />
                        <p> Design </p>
                    </div>
                <div className="">
                    <h1 className="text-3xl font-bold ">FIGMA</h1>
                    <p className="text-lg"> 8 hours' ago </p>
                </div>
        </div>

        <div className=" bg-red-100 h-72 w-75 flex flex-col justify-between p-8 rounded-4xl text-black"> 
            <div className=" flex gap-4"> 
                <img src="/terminal.svg" />
                <p> Coding </p>
                </div>
                <div className=" ">
                    <h1 className="text-3xl font-bold ">PYTHON</h1>
                    <p className="text-lg"> 2 Days' ago </p>
            </div>
        </div>

        <div className=" bg-pink-100 h-72 w-75 flex flex-col justify-between p-8 rounded-4xl text-black"> 
            <div className="flex gap-4"> 
                <img src="/palette.svg" />
                <p> Design </p>
            </div>
                <div className=" ">
                    <h1 className="text-3xl font-bold ">SKETCH</h1>
                    <p className="text-lg"> 4 Days' ago </p>
                </div>
        </div>
    </div>
</div>
    
    )
}