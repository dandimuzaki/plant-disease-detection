import type { State } from "../types/prediction"
import Notes from "./Notes"

export default function DiseaseResult({state}: {state: State}) {
  const { 
    nama_bahasa_inggris, 
    nama_bahasa_indonesia, 
    penyebab,
    gejala,
    penyebaran,
    langkah_pencegahan,
    langkah_penanganan,
    jenis_pestisida,
    jadwal_penyemprotan,
    referensi
  } = state.explanation

  if (nama_bahasa_inggris && 
    nama_bahasa_indonesia && 
    penyebab &&
    gejala &&
    penyebaran &&
    langkah_pencegahan &&
    langkah_penanganan &&
    jenis_pestisida &&
    jadwal_penyemprotan &&
    referensi) return (
    <>
      <div className="space-y-4">
        <div className="rounded-lg bg-primary gap-2 lg:gap-4 p-4 grid lg:grid-cols-[2fr_3fr]">
          <h2 className="text-accent-bg text-center lg:text-left lg:col-span-2">Tanaman Terdeteksi Sakit</h2>
          <p className="text-center lg:text-left lg:col-span-2 text-xs lg:text-sm">
            Model AI mendeteksi bahwa tanaman Anda kemungkinan mengalami {nama_bahasa_inggris}. Cocokkan gejala pada tanaman Anda dengan informasi di bawah untuk memperoleh gambaran yang lebih lengkap sebelum menentukan langkah penanganan.
          </p>
          <img alt="Hasil Prediksi" src={state.main_image} className="w-full h-full aspect-square lg:aspect-auto object-cover"/>
          <div className="flex flex-col gap-2 lg:gap-4 items-center lg:items-start justify-center">
            <div className="text-center lg:text-left">
              <p>Nama Bahasa Inggris</p>
              <h3 className="">{nama_bahasa_inggris}</h3>
            </div>
            <div className="text-center lg:text-left">
              <p>Nama Bahasa Indonesia</p>
              <h3 className="">{nama_bahasa_indonesia}</h3>
            </div>
            <div className="text-center lg:text-left">
              <p>Tingkat Kepercayaan</p>
              <h3 className="">{(state.confidence*100).toFixed(2)}%</h3>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-accent-bg lg:gap-4 p-4 space-y-2">
          <h2 className="text-primary">Penyebab</h2>
          <p className="text-xs lg:text-sm text-background">
            {penyebab}
          </p>
        </div>
        <div className="rounded-lg bg-primary lg:gap-4 p-4 space-y-2">
          <h2 className="text-accent-bg">Gejala</h2>
          <ol className="list-decimal pl-4 text-xs lg:text-sm text-accent-bg space-y-2">
            {gejala.map((gej) => 
              <li key={gej}>
                {gej}
              </li>
            )}
          </ol>
        </div>
        <div className="rounded-lg bg-accent-bg lg:gap-4 p-4 space-y-2">
          <h2 className="text-primary">Penyebaran</h2>
          <p className="text-xs lg:text-sm text-background">
            {penyebaran}
          </p>
        </div>
        <div className="rounded-lg bg-primary lg:gap-4 p-4 space-y-2">
          <h2 className="text-accent-bg">Langkah Pencegahan</h2>
          <ol className="list-decimal pl-4 text-xs lg:text-sm text-accent-bg space-y-2">
            {langkah_pencegahan.map((lang) => 
              <li key={lang}>
                {lang}
              </li>
            )}
          </ol>
        </div>
      </div>
      <div className="space-y-4">
        <div className="rounded-lg bg-accent-bg lg:gap-4 p-4 space-y-2">
          <h2 className="text-primary">Langkah Penanganan</h2>
          <ol className="list-decimal pl-4 text-xs lg:text-sm text-background space-y-2">
            {langkah_penanganan.map((lang) => 
              <li key={lang}>
                {lang}
              </li>
            )}
          </ol>
        </div>
        <div className="rounded-lg bg-primary lg:gap-4 p-4 space-y-2">
          <h2 className="text-accent-bg">Jenis Pestisida</h2>
          <ol className="list-decimal pl-4 text-xs lg:text-sm text-accent-bg space-y-2">
            {jenis_pestisida.map((jen) => 
                <li key={jen.kategori}>
                  <div>
                    <p className="font-bold">
                    {jen.kategori}
                  </p>
                  <p>
                    Contoh: {jen.contoh}
                  </p>
                  <p>{jen.catatan}</p>
                  </div>
                </li>
            )}
          </ol>
        </div>
        <div className="rounded-lg bg-accent-bg lg:gap-4 p-4 space-y-2">
          <h2 className="text-primary">Jadwal Penyemprotan</h2>
          <ol className="list-decimal pl-4 text-xs lg:text-sm text-background space-y-2">
            {jadwal_penyemprotan.map((jad) => 
              <li key={jad}>
                {jad}
              </li>
            )}
          </ol>
        </div>
        <div className="rounded-lg bg-primary lg:gap-4 p-4 space-y-2">
          <h2 className="text-accent-bg">Referensi</h2>
          <ol className="list-decimal pl-4 text-xs lg:text-sm text-accent-bg space-y-2">
            {referensi.map((ref) => 
                <li key={ref.judul}>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer">
                    {ref.judul}, {ref.sumber}
                  </a>
                </li>
            )}
          </ol>
        </div>
        <Notes/>
      </div>
    </>
  )
}