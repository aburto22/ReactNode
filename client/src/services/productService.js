import axios from "axios";

const productService = {
  getAll: async () => {
    try {
      const res = await axios.get(`/api/product`);
      return res.data || [];
    } catch (err) {
      console.error(err);
    }
  },
  deleteProduct: async (id) => {
    try {
      axios.delete(`api/product/${id}`);
    } catch (err) {
      console.error(err);
    }
  },
};

export default productService;
