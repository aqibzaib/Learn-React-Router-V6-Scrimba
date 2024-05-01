import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();
  console.log("current van>>>", currentVan);
  return <img src={currentVan.imageUrl} className="host-van-detail-image" />;
}
