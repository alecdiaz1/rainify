import { RiPlayCircleFill, RiSkipBackFill, RiSkipForwardFill } from "react-icons/ri";

export const Player = () => {
  return (
    <div className="fixed bottom-0 bg-gray-200 w-full h-24 flex justify-center items-center">
      <RiSkipBackFill size={32} />
      <div className="mx-4">
        <RiPlayCircleFill size={64} style={{ cursor: "pointer" }}/>
      </div>
      <RiSkipForwardFill size={32} />
    </div>
  )
}
