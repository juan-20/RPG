import Image from "next/image"

export default function Custom404() {
    return (
      <div className="">
        <Image src='https://abs.twimg.com/responsive-web/client-web/rubber-chicken-800x400.v1.3a2d1b19.png' width={800} height={400}  />
        <h1>404 - Error</h1>
      </div>
    )
  }