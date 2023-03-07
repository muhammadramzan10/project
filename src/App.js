import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import Week from "./components/Week";
import Xpbox from "./components/Xpbox";



function App() {
	return (
		<div className=' w-[100%]  h-[100vh] flex'>
			<div className="  w-[20%] h-full ">
			<Sidebar />

			</div>
			<div className="flex justify-center items-center  bor w-[90%] h-full">
				<div className=" flex flex-col justify-between w-[90%] h-[90%]">
					<div className="w-full h-[25%] flex items-center justify-between">
						
						<div className=" w-[30%] h-[60%]">
							<Xpbox />
						</div>
						<div className="w-[30%] h-[60%]">
							<Profile />
						</div>
					</div>
					<div className=" w-full h-[75%] grid gap-4 grid-cols-2 grid-rows-2">
						<div className="w-full h-full bg-white bg-opacity-30 shadow-sm rounded-md">
							<Week week={1}/>
						</div>
						<div className="w-full h-full  bg-white bg-opacity-30 shadow-sm rounded-md">
							<Week week={2}/>
						</div>
						<div className="w-full  bg-white bg-opacity-30 shadow-sm rounded-md">
							<Week week={3}/>
						</div>
						<div className="w-full h-full  bg-white bg-opacity-30 shadow-sm rounded-md">
							<Week week={4}/>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
