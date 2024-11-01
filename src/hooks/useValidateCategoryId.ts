import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import useCategoryStore from "../store/useCategoryStore";

const useValidateCategoryId = (id: string | null) => {
  const navigate = useNavigate();
  const categories = useCategoryStore((state) => state.categories);

  useEffect(() => {
    const isValidCategoryId =
      !id || categories.findIndex((c) => c.id === id) !== -1;

    if (!isValidCategoryId) {
      throw new Error("Invalid category ID");
    }
  }, [id, categories, navigate]);
};

export default useValidateCategoryId;
