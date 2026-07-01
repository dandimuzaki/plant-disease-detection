import { api } from "../lib/api"

export const predictService = {
  async predict(form: FormData) {
    console.log("form", form)
    const response = await api.post("/plant_disease_detection/predict?model=efficientnet", form);
    console.log("response", response)
    return response;
  },
};