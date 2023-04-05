import { NextPage } from "next";
import { Favorites, Layout } from "@/components";

const FavoritesPage: NextPage = () => {
  return (
    <Layout title="Favorites">
      <Favorites />
    </Layout>
  );
};

export default FavoritesPage;
