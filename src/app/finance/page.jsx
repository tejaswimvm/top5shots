import { Subcategory } from "@/components/finance/Subcategory";
import axios from "axios";

import base_url from "@/components/helper/baseurl";
const category = "finance";

const page = async () => {
  try {
    console.log(base_url)
    const response = await axios.get(`${base_url}/filter/${category}`);
    const data = response.data;
    console.log("----data-----", data); // Optional: this won't show in browser, only in server logs

    return (
      <>
        <Subcategory category={category} data={data} />
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }
};

export default page;
