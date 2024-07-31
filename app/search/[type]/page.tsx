
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";

import SearchPage from "@/app/Components/SearchPageComponents/SearchPage";

const page = ({ params }: { params: { type: string } }) => {
 
  return (
    <>
      <Header active={params.type} page="search" />
      <SearchPage params={params.type} />
      <Footer />
    </>
  );
};

export default page;
