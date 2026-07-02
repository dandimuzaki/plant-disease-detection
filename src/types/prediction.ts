export interface JenisPestisida {
  kategori: string,
  contoh: string,
  catatan: string
}

export interface Referensi {
  judul: string,
  sumber: string,
  url: string
}

export interface Explanation {
  nama_bahasa_inggris?: string,
  nama_bahasa_indonesia?: string,
  deskripsi?: string,
  penyebab?: string,
  gejala?: string[],
  penyebaran?: string,
  langkah_pencegahan?: string[],
  langkah_penanganan?: string[],
  jenis_pestisida?: JenisPestisida[],
  jadwal_penyemprotan?: string[],
  referensi?: Referensi[],
  rekomendasi_perawatan?: string[],
  pencegahan_penyakit?: string[],
  nama_tanaman?: string
}

export interface Prediction {
  class: string,
  confidence: number,
  explanation: Explanation
}

export interface State {
  class: string,
  confidence: number,
  explanation: Explanation,
  main_image: string
}