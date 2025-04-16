import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-modal";

import { fetchImages } from "./api/unsplash-api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

Modal.setAppElement("#root");

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;

    const load = async () => {
      try {
        setLoading(true);
        const { images: newImages, total } = await fetchImages(query, page);
        setImages((prev) => [...prev, ...newImages]);
        setTotalPages(Math.ceil(total / 12));
      } catch (err) {
        setError("Failed to load images");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    if (!newQuery.trim()) {
      toast("Please enter a search term.");
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const openModal = (image) => setModalData(image);
  const closeModal = () => setModalData(null);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      {images.length > 0 && page < totalPages && !loading && (
        <LoadMoreBtn onClick={() => setPage((p) => p + 1)} />
      )}
      {modalData && <ImageModal data={modalData} onClose={closeModal} />}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default App;