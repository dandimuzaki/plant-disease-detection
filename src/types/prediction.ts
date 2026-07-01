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
  index: number,
  nama_bahasa_inggris: string,
  nama_bahasa_indonesia: string,
  deskripsi: string,
  penyebab: string,
  gejala: string[],
  penyebaran: string,
  langkah_pencegahan: string[],
  langkah_penanganan: string[],
  jenis_pestisida: JenisPestisida[],
  jadwal_penyemprotan: string[],
  referensi: Referensi[]
}

export interface Prediction {
  class: string,
  confidence: number,
}