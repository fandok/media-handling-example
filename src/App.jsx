import ImageViewer from "./ImageViewer";
import MyUploader from "./MyUploader";
import PdfViewer from "./PdfViewer";
import VideoPlayer from "./VideoPlayer";

function App() {
  return (
    <>
      <MyUploader />
      <VideoPlayer />
      <ImageViewer />
      <PdfViewer />
    </>
  );
}

export default App;
