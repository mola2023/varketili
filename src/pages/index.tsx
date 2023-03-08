import Link from "next/link";

export default function Index(){
    
    return (
    <>
      <main className="bg-[#242424] min-h-screen h-auto text-white pb-52">
        <div className="text-center pt-10">
<div className="flex justify-center md:items-center md:gap-10">
<img className="md:h-[120px] w-[75px] h-[75px] md:w-[120px] md:flex md:justify-center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Vorovskaya-zvezda-aue.svg/2048px-Vorovskaya-zvezda-aue.svg.png"/>
<div className="md:pb-7 mt-3 mx-2 md:mt-0 hover:text-[#000000] font-semibold md:text-7xl text-4xl"> პლატო </div>
<img className="md:h-[120px] w-[75px] h-[75px] md:w-[120px] md:flex md:justify-center" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Vorovskaya-zvezda-aue.svg/2048px-Vorovskaya-zvezda-aue.svg.png"/>

</div>
        </div>
<div className=" mt-[40px] text-black border border-white my-2 mx-auto w-72"> </div>
<div className="py-5 text-white text-center w-full flex justify-center text-lg">
პლატოს ტოჩკები
</div>


<div className="py-5 text-white text-center w-full flex justify-center text-lg">
  <Link href="https://goo.gl/maps/BE2QD2F5sT1mMqyi6" target="_blank">
პლატო რობოს წყარო
  </Link>
</div>

<div className="fixed bottom-0 text-center w-full h-[35px]">Developed by Giorgi Molashvili © 2023</div>

      </main>
    </>
  );
}

