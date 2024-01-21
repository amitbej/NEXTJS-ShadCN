import Image from "next/image";

const logo = () => {
  return (
    <div className="flex flex-row justify-center align-middle items-center">
      <Image
        src="/images/logo/mainlogo.png"
        width={60}
        height={60}
        alt="Page-Logo"
      />
      {/*<h1 className="font-bold">SNB</h1> */}  
    </div>
  );
};

export default logo;
