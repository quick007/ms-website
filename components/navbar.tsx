import Link from "next/link"


const Navbar = (props: {sticky?: boolean, bg?: boolean, scrolled?: boolean  }) => {
  return (
    <>
      <div className={"flex text-gray-50 py-4  bg-opacity-75 backdrop-blur " + (props.sticky == true || props.sticky == undefined ? "sticky top-0 " : "") + (props.bg == true || props.bg == undefined ? "bg-black" : "")}>
				<div className="mx-auto max-w-screen-lg flex items-center justify-between w-full">
					<div>
						<h1 className="text-4xl font-bold tracking-wide">Mellow Services</h1>
					</div>
					<ol className="space-x-6 flex my-auto items-center font-medium">
						<Link href="#about" ><a className="">About</a></Link>
						<a>Our Services</a>
						<a>Contact</a>
						<div className="rounded-lg bg-blue-700 px-4 py-1.5 font-bold">Discord</div>
					</ol>
				</div>
			</div>

    </>
  )
}

export default Navbar