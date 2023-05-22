import ModalImage from "react-modal-image";

const ImageViewer = () => {
  return (
    <ModalImage
      small="https://placehold.co/600x400"
      large="https://placehold.co/1920x1080"
      alt="placeholder"
      showRotate
    />
  );
};

export default ImageViewer;
