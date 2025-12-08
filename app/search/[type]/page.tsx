
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import SearchPageClient from "@/app/Components/SearchPageComponents/SearchPageClient";

const page = ({ params }: { params: { type: string } }) => {
 
  return (
    <>
      <Header active={params.type} page="search" />
      <SearchPageClient params={params.type} />
      <Footer />
      
    </>
  );
};

export default page;
