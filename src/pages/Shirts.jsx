import CollectionPage from "../components/CollectionPage";
import { SHIRTS } from "../data/shirts";

export default function Shirts() {
  return <CollectionPage title="Shirts" products={SHIRTS} />;
}
