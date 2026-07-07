import CollectionPage from "../components/CollectionPage";
import { PANTS } from "../data/pants";

export default function Pants() {
  return <CollectionPage title="Pants" products={PANTS} />;
}
