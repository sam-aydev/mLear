export default function ErrorComp({resetErrorBoundary}){
    return(
        <div>
            <div className="flex justify-center items-center h-screen  px-16 bg-slate-200 text-center">
                <div className="text-xl bg-white py-8 rounded-xl px-9 text-center">
                   Something Went Wrong 🤦‍♂️🤔. Try clicking the button below.
                    <div>
                        <button onClick={resetErrorBoundary} className="mt-10 rounded px-3 py-2 hover:text-black hover:bg-slate-100 bg-black text-white">Take Me Home</button>
                    </div>
                </div>
            </div>
        </div>
    )
}