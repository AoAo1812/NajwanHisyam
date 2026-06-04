export default function Navbar(){
    return(
        <div className="h-screen bg-gray-700 flex-between flex-gap justify-center items-center">
                <div className="bg-gray-200 p-4 h-183 w-60 flex gap ">
                <div className="itmes-center flex-gap-3 flex p-4">
                    <div classname="">
                    <div className="ietms-center flex-gap-4">
                        <img src="layout-dashboard.svg" className="justify-center h-5 w-5 "/>
                    </div> 
                    <button className="flex flex-between items-center flex-gap gap-4">
                        <h1 className="text-black ">Dashboard</h1>
                    </button>

                    <div className="itmes-center flex-gap-3">
                    <div className="ietms-center flex-gap-4">
                        <img src="message-circle.svg" className="justify-center h-5 w-5 "/>
                    </div> 
                    <button className="flex flex-between items-center flex-gap gap-4">
                        <h1 className="text-black ">message</h1>
                    </button>
                    </div>
                    <div className="itmes-center flex-gap-3">
                    <div className="ietms-center flex-gap-4">
                        <img src="circle-check.svg" className="justify-center h-5 w-5 "/>
                    </div> 
                    <button className="flex flex-between items-center flex-gap gap-4">
                        <h1 className="text-black ">Tasks</h1>
                    </button>
                    </div>
                     <div className="itmes-center flex-gap-3">
                    <div className="ietms-center flex-gap-4">
                        <img src="notes.svg" className="justify-center h-5 w-5 "/>
                    </div> 
                    <button className="flex flex-between items-center flex-gap gap-4">
                        <h1 className="text-black ">Notes</h1>
                    </button>
                </div>
                    <div className="itmes-center flex-gap-3">
                    <div className="ietms-center flex-gap-4">
                        <img src="brand-databricks.svg" className="justify-center h-5 w-5 "/>
                    </div> 
                    <button className="flex flex-between items-center flex-gap gap-4">
                        <h1 className="text-black ">report</h1>
                    </button>
                    </div>                  
                    <div className="itmes-center flex-gap-3">
                    <div className="ietms-center flex-gap-4">
                        <img src="arrow-bear-left-2.svg" className="justify-center h-5 w-5 "/>
                    </div> 
                    <button className="flex flex-between items-center flex-gap gap-4">
                        <h1 className="text-black ">Automation</h1>
                    </button>
                    </div>
                                        <div className="itmes-center flex-gap-3">
                    <div className="ietms-center flex-gap-4">
                        <img src="sitemap.svg" className="justify-center h-5 w-5 "/>
                    </div> 
                    <button className="flex flex-between items-center flex-gap gap-4">
                        <h1 className="text-black ">WorkFlows</h1>
                    </button>
                    </div>
                    </div>
                

                </div>
            </div>
        </div>
            
    )
}