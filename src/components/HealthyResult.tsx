import type { State } from "../types/prediction"
import Notes from "./Notes"

export default function HealthyResult({state}: {state: State}) {
  const { 
    nama_tanaman,
    deskripsi,
    rekomendasi_perawatan,
    pencegahan_penyakit
  } = state.explanation

  if (nama_tanaman && deskripsi && rekomendasi_perawatan && pencegahan_penyakit) return (
    <>
      <div className="space-y-4">
        <div className="rounded-lg bg-primary gap-2 lg:gap-4 p-4 grid lg:grid-cols-[2fr_3fr]">
          <h2 className="text-accent-bg text-center lg:text-left lg:col-span-2">Tanaman Terdeteksi Sehat</h2>
          <p className="text-center lg:text-left lg:col-span-2 text-xs lg:text-sm">
            {deskripsi}
          </p>
          <img alt="Hasil Prediksi" src={state.main_image} className="w-full h-full aspect-square lg:aspect-auto object-cover"/>
          <div className="flex flex-col gap-2 items-center lg:items-start justify-center">
            <div className="text-center lg:text-left">
              <p>Nama Tanaman</p>
              <h3 className="">{nama_tanaman}</h3>
            </div>
            <div className="text-center lg:text-left">
              <p>Kondisi</p>
              <h3 className="">Sehat</h3>
            </div>
            <div className="text-center lg:text-left">
              <p>Tingkat Kepercayaan</p>
              <h3 className="">{(state.confidence*100).toFixed(2)}%</h3>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-accent-bg lg:gap-4 p-4 space-y-2">
          <h2 className="text-primary">Rekomendasi Perawatan</h2>
          <ol className="list-decimal pl-4 text-xs lg:text-sm text-background space-y-2">
            {rekomendasi_perawatan.map((rek) => 
              <li key={rek}>
                {rek}
              </li>
            )}
          </ol>
        </div>
      </div>
      <div className="space-y-4">
        <div className="rounded-lg bg-primary lg:gap-4 p-4 space-y-2">
          <h2 className="text-accent-bg">Pencegahan Penyakit</h2>
          <ol className="list-decimal pl-4 text-xs lg:text-sm text-accent-bg space-y-2">
            {pencegahan_penyakit.map((pen) => 
              <li key={pen}>
                {pen}
              </li>
            )}
          </ol>
        </div>
        <Notes/>
      </div>
    </>
  )
}