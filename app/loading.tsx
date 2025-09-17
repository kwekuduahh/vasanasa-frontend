import Image from 'next/image'

function loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-pulse h-32 w-32">
                <Image src="/images/Black-Logo.png" alt="logo" width={150} height={150} />
            </div>
        </div>
    )
}

export default loading