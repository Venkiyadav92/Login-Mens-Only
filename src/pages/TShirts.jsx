import CollectionPage from "../components/CollectionPage";
import { TSHIRTS } from "../data/tshirts";

export default function TShirts() {
  return <CollectionPage title="T-Shirts" products={TSHIRTS} />;
}
