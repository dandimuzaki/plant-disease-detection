import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import Badge from "./Badge";

const faqs = [
  {
    question: "Apa itu PeriksaKit?",
    answer:
      "PeriksaKit adalah aplikasi deteksi penyakit tanaman berbasis Artificial Intelligence (AI) yang mampu mengidentifikasi penyakit dari gambar daun. Selain memberikan prediksi, aplikasi ini juga menyajikan informasi mengenai gejala, penyebab, penanganan, dan langkah pencegahan penyakit.",
  },
  {
    question: "Bagaimana cara menggunakan PeriksaKit?",
    answer:
      "Unggah foto daun tanaman atau gunakan salah satu gambar contoh yang tersedia, pilih model AI yang diinginkan, kemudian klik tombol 'Periksa'. Dalam beberapa detik, sistem akan menampilkan hasil analisis beserta informasi pendukung.",
  },
  {
    question: "Apakah hasil prediksi selalu benar?",
    answer:
      "PeriksaKit memberikan prediksi berdasarkan model Artificial Intelligence yang telah dilatih menggunakan dataset penyakit tanaman. Meskipun memiliki tingkat akurasi yang tinggi, hasil prediksi tidak dapat dijadikan sebagai diagnosis mutlak dan sebaiknya digunakan sebagai alat bantu identifikasi awal.",
  },
  {
    question: "Mengapa tersedia beberapa model AI?",
    answer:
      "Aplikasi ini dikembangkan sebagai proyek eksperimen untuk membandingkan performa beberapa arsitektur Convolutional Neural Network, yaitu Custom CNN, MobileNet, ResNet, dan EfficientNet. Setiap model memiliki keunggulan masing-masing dari sisi akurasi maupun efisiensi.",
  },
  {
    question: "Model AI mana yang sebaiknya saya gunakan?",
    answer:
      "Untuk penggunaan sehari-hari, kami merekomendasikan EfficientNet karena memberikan keseimbangan terbaik antara akurasi dan kecepatan inferensi. Model lain tetap tersedia untuk kebutuhan eksperimen dan perbandingan.",
  },
  {
    question: "Tanaman apa saja yang didukung?",
    answer:
      "PeriksaKit mendukung berbagai jenis tanaman yang terdapat pada dataset, seperti apel, jagung, tomat, kentang, anggur, dan beberapa tanaman lainnya beserta berbagai kelas penyakitnya.",
  },
  {
    question: "Bagaimana cara mendapatkan hasil prediksi yang lebih akurat?",
    answer:
      "Gunakan foto daun yang terlihat jelas, memiliki pencahayaan yang cukup, fokus, dan menampilkan bagian daun yang mengalami gejala penyakit tanpa terlalu banyak objek lain di sekitarnya.",
  },
  {
    question: "Apakah foto yang saya unggah akan disimpan?",
    answer:
      "Tidak. Foto yang diunggah hanya digunakan untuk proses analisis dan tidak disimpan secara permanen oleh sistem.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-8 py-12 lg:py-16 lg:px-12 ">
      <div className="flex flex-col items-center justify-center text-center">
        <Badge text="Frequently Asked Questions"/>
        <h2 className="mt-2 lg:mt-4 text-accent-bg text-center lg:text-left">
          Pertanyaan yang Sering Diajukan
        </h2>

        <p className="mt-3 lg:text-base text-sm max-w-3xl">
          Temukan jawaban atas pertanyaan yang paling sering diajukan mengenai
          PeriksaKit dan proses deteksi penyakit tanaman.
        </p>
      <div className="mt-4 lg:mt-6 space-y-2 lg:space-y-4 lg:w-3xl">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="text-sm lg:text-base overflow-hidden rounded-xl border border-gray-400"
            >
              <button
                className="flex w-full items-center justify-between px-2 py-1 lg:px-4 lg:py-2 text-left font-semibold hover:bg-primary/50"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
              >
                {faq.question}

                <ExpandMore
                  className={`transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-gray-400 bg-primary/50 px-2 py-1 lg:px-4 lg:py-2 text-accent-bg">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}