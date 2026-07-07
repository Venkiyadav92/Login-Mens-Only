import CollectionPage from "../components/CollectionPage";
import { TRACK_PANTS } from "../data/trackpants";

export default function TrackPants() {
  return <CollectionPage title="Track Pants" products={TRACK_PANTS} />;
}
