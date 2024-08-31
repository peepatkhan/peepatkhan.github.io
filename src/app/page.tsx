import Image from "next/image";

export default function Home() {
  const image = [
    {
      image: "/asset/images/firstPhoto.png",
      width: 10,
      height: 10,
    },
    {
      image: "/asset/images/oldApartment.png",
      width: 10,
      height: 10,
    },
    {
      image: "/asset/images/library.png",
      width: 10,
      height: 10,
    },
    {
      image: "/asset/images/cute.png",
      width: 10,
      height: 10,
    },
    {
      image: "/asset/images/test_convert.png",
      width: 10,
      height: 10,
    },
    {
      image: "/asset/images/gym.png",
      width: 10,
      height: 10,
    },
    {
      image: "/asset/images/badminton.png",
      width: 10,
      height: 10,
    },
    {
      image: "/asset/images/newCondo.png",
      width: 10,
      height: 10,
    },
    // {
    //   image: "/asset/images/pattaya.png",
    //   width: 10,
    //   height: 10,
    // },
    {
      image: "/asset/images/jatujak.png",
      width: 10,
      height: 10,
    },
    {
      image: "/asset/images/farm.png",
      width: 10,
      height: 10,
    },
    // {
    //   image: "/asset/images/stoneBeach.png",
    //   width: 10,
    //   height: 10,
    // },
    {
      image: "/asset/images/unionmall.png",
      width: 10,
      height: 10,
    },
    {
      image: "/asset/images/terminal.png",
      width: 10,
      height: 10,
    },
    {
      image: "/asset/images/somePicture.png",
      width: 10,
      height: 10,
    },
    {
      image: "/asset/images/IMG_0438.jpg",
      width: 10,
      height: 10,
    },
    {
      image: "/asset/images/IMG_0439.jpg",
      width: 10,
      height: 10,
    },
    {
      image: "/asset/images/IMG_0440.jpg",
      width: 10,
      height: 10,
    },
    {
      image: "/asset/images/IMG_0441.jpg",
      width: 10,
      height: 10,
    },
    {
      image: "/asset/images/IMG_0442.jpg",
      width: 10,
      height: 10,
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-pink-200">
      <div className="text-4xl text-black">🎊Celebrating to our 2nd Anniversary🎊</div>
      <div className="grid grid-cols-3 gap-6 mt-5">
        {image.map((item, index) => (
          <div key={index} className="w-full">
            <Image src={item.image} layout="responsive" width={item.width} height={item.height} className="object-cover" alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
