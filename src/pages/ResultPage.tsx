import { useLocation } from "react-router";
import Badge from "../components/Badge";
import HealthyResult from "../components/HealthyResult";
import DiseaseResult from "../components/DiseaseResult";

export default function ResultPage() {
  const { state } = useLocation();
  console.log("state", state)

  return (
    <>
      <section className="grid gap-4 lg:gap-8 lg:grid-cols-2 px-8 py-12 lg:px-12 lg:py-16">
        <div className="lg:col-span-2 flex flex-col items-center justify-center">
          <Badge text="Result"/>
          <h2 className="mt-1 lg:mt-2 text-accent-bg text-center">
            Hasil Prediksi
          </h2>
        </div>
        {state.is_healthy ? <HealthyResult state={state}/> : <DiseaseResult state={state}/>}
      </section>
    </>
  )
}