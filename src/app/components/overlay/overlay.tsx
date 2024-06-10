interface OverlayProps {
  setShowModal: (show: boolean) => void;
}
const Overlay: React.FC<OverlayProps> = ({ setShowModal }) => {
  return (
    <div
      className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-black opacity-25 blur-lg"
      onClick={() => setShowModal(false)}
    ></div>
  );
};

export default Overlay;
