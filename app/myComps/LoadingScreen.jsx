import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LoadingScreen() {
    return (
        <div className='flex justify-center items-center h-screen p-4'>
            <DotLottieReact
                src="https://lottie.host/8c7e4ef0-08e0-4929-9b3f-ddc54f68f9fc/m1fm3AsKmh.lottie"
                loop
                autoplay
                className=' w-[400] p-0 md:w-[600px] lg:w-[800px] '
            />
        </div>
    );
}