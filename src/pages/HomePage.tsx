import { useNavigate } from "react-router";
import { predictService } from "../services/predict.service";
import { useState } from "react";
import Badge from "../components/Badge";
import ValueCard from "../components/ValueCard";
import {CameraAlt, Spa, StickyNote2, TouchApp, Upload} from '@mui/icons-material';
import StepCard from "../components/StepCard";
import ResultCard from "../components/ResultCard";
import ModelComparisonTable from "../components/Model";
import FAQSection from "../components/FAQ";

export default function HomePage() {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setImage(file);
  };

  const preview = image ? URL.createObjectURL(image) : null;

  const navigate = useNavigate()
  const handlePredict = async (e) => {
    try {
      e.preventDefault();
      if (!image) {
        alert("Please select an image.");
        return;
      }

      const formData = new FormData();
      formData.append("image", image);

      const result = await predictService.predict(formData);
      navigate("/result", {
        state: {
          main_image: preview,
          ...result
        },
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  const values = [
    {
      src: "/cepat.jfif",
      title: "Prediksi Cepat",
      subtitle: "Cukup unggah satu foto daun dan AI akan menganalisis penyakit tanaman dalam beberapa detik."
    },
    {
      src: "/ai.jpg",
      title: "Model AI Terlatih",
      subtitle: "Menggunakan model Convolutional Neural Network yang telah dilatih pada ribuan citra penyakit tanaman."
    },
    {
      src: "/lengkap.webp",
      title: "Informasi Lengkap",
      subtitle: "Tidak hanya memberikan nama penyakit, tetapi juga gejala, penyebab, penanganan, dan langkah pencegahan."
    },
    {
      src: "/mudah.webp",
      title: "Mudah Digunakan",
      subtitle: "Tidak memerlukan pengetahuan teknis. Cukup ambil foto daun dan biarkan PeriksaKit membantu proses identifikasi."
    }
  ]

  const images = [
    {
      name: "Apple Scab",
      src: "/AppleScab3.JPG"
    },
    {
      name: "Corn Common Rust",
      src: "/CornCommonRust2.JPG"
    },
    {
      name: "Potato Early Blight",
      src: "/PotatoEarlyBlight2.JPG"
    },
    {
      name: "Tomato Early Blight",
      src: "/TomatoEarlyBlight4.JPG"
    }
  ]

  async function selectSample(url: string) {
    const response = await fetch(url);
    const blob = await response.blob();
    const file = new File([blob], "sample.jpg", { type: blob.type });

    setImage(file);
  }

  console.log(image)

  return (
    <>
      <section id="start" className="mt-[-64px] h-screen w-full z-1 relative overflow-hidden">
        <img src="/hero.jpg" alt="PeriksaKit" className="brightness-80 absolute h-full w-full z-0 object-cover"/>
        <div className="text-center lg:text-left px-8 relative z-1 flex flex-col items-center lg:items-start justify-center h-full w-full lg:px-12">
          <div className="flex items-center gap-1 w-fit px-2 py-1 lg:px-4 lg:py-2 rounded-full bg-primary/50 text-accent-bg text-xs lg:text-sm text-white">
            <Spa/>
            Deteksi Penyakit Tanaman Berbasis AI
          </div>
          <h1 className="text-primary mt-4">
            Kenali Penyakit Tanamanmu<br/>Lebih Cepat dengan <span className="font-bold text-background">PeriksaKit</span>
          </h1>
          <p className="mt-4 text-white lg:max-w-2/3 lg:text-base text-sm">
            PeriksaKit membantu mengidentifikasi penyakit pada daun tanaman menggunakan teknologi Artificial Intelligence (AI). Dapatkan prediksi penyakit beserta informasi mengenai gejala, penyebab, langkah penanganan, dan cara pencegahan untuk menjaga tanaman tetap sehat.
          </p>
          <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
            <button className="w-45 flex">
              <a href="/home/#predict" className="btn-primary">
                Periksa Sekarang
              </a>
            </button>
            <button className="w-45 flex">
              <a href="/predict" className="btn-outlined">
                Kunjungi Github
              </a>
            </button>
          </div>
        </div>
      </section>
      <section className="px-8 py-12 lg:px-12 lg:py-16 flex flex-col items-center">
        <Badge text="Our Features"/>
        <h2 className="mt-1 lg:mt-2 text-accent-bg text-center">
          Mengapa Menggunakan PeriksaKit?
        </h2>
        <div className="mt-4 lg:mt-6 grid lg:grid-cols-4 gap-6">
          {values.map(v => <ValueCard key={v.src} src={v.src} title={v.title} subtitle={v.subtitle}/>)}
        </div>
      </section>
      <section className="grid lg:grid-cols-2 lg:gap-8 justify-center items-center bg-accent-bg">
        <img src="/how-it-works.png" className="lg:pt-16 h-fit w-full order-2 lg:order-1"/>
        <div className="mt-4 lg:mt-6 px-8 py-12 lg:pr-12 order-1 lg:order-2 flex flex-col items-center lg:block">
          <Badge text="How It Works"/>
          <h2 className="mt-2 text-primary">
            Hanya Tiga Langkah Mudah
          </h2>
          <div className="grid gap-4 lg:gap-6 mt-4 lg:mt-6">
            <StepCard text="Unggah foto daun" subtext="Atau gunakan contoh gambar yang tersedia">
              <CameraAlt/>
            </StepCard>
            <StepCard text='Klik "Periksa"' subtext="Tunggu AI menganalisis">
              <TouchApp/>
            </StepCard>
            <StepCard text='Lihat hasil prediksi' subtext="Pelajari penyebab dan cara menanganinya">
              <StickyNote2/>
            </StepCard>
          </div>
        </div>
      </section>
      <section id="predict" className="px-12 py-16 gap-8 grid lg:grid-cols-[2fr_3fr] items-center">
        <div className="hidden lg:flex overflow-hidden h-full w-full rounded-lg bg-primary/50 items-center justify-center text-accent-bg/50">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="h-full w-full"
            />
            ) : <p>Preview</p>}
        </div>
        <form onSubmit={handlePredict} className="flex flex-col items-center justify-center">
          <Badge text="Try It Now"/>
          <h2 className="mt-1 lg:mt-2 text-accent-bg">
            Periksa Tanamanmu Sekarang
          </h2>
          <label className="relative z-0 w-50 h-50 mt-4 flex lg:hidden overflow-hidden h-full aspect-square rounded-lg bg-primary/50 items-center justify-center text-accent-bg/50">
            {preview ? (
              <>
                <img
                  src={preview}
                  alt="Preview"
                  className="h-full w-full"
                />
                <div className="h-full w-full hover:bg-black/50 text-transparent hover:text-white absolute z-1 flex flex-col gap-2 items-center justify-center text-accent-bg p-4">
                  <Upload className="w-8 h-8" />
                  <span className="text-sm text-center">
                    Upload Gambar
                  </span>
                </div>
              </>
              ) : 
            <div className="flex flex-col gap-2 items-center text-accent-bg p-4">
              <Upload className="w-8 h-8" />
              <span className="text-sm text-center">
                Upload Gambar
              </span>
            </div>}
            <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
          </label>
          <label className="hidden lg:flex mt-4 lg:mt-6 px-4 py-2 gap-1 items-center justify-center bg-primary text-accent-bg hover:bg-primary/60 rounded-lg cursor-pointer transition">
            <Upload className="w-8 h-8 text-muted-foreground" />
            <span className="text-sm text-muted-foreground text-center">
              Upload Gambar
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
          <p className="text-accent-bg mt-4 lg:mt-6 text-center lg:text-base text-sm">atau gunakan contoh gambar yang tersedia</p>
          <div className="mt-4 lg:mt-6 grid grid-cols-4 gap-2 lg:gap-4">
            {images.map(img => <img key={img.src} src={img.src} alt={img.name} className="cursor-pointer w-full h-full object-cover rounded-lg" onClick={() => selectSample(img.src)}/>)}
          </div>
          <button className="mt-6 w-full px-4 py-2 flex gap-1 items-center justify-center bg-primary text-accent-bg hover:bg-primary/60 rounded-lg cursor-pointer transition" type="submit">Periksa Sekarang</button>
        </form>
      </section>
      <section className="lg:gap-8 px-8 py-12 lg:px-12 lg:py-16 grid lg:grid-cols-2 items-center bg-accent-bg min-h-screen">
        <div className="flex flex-col items-center justify-center lg:block">
          <Badge text="Get The Result"/>
          <h2 className="mt-2 lg:mt-4 text-primary text-center lg:text-left">
            Hasil Analisis yang Lebih dari Sekadar Prediksi
          </h2>
          <p className="mt-2 lg:mt-4 text-sm lg:text-base text-background text-center lg:text-left">
            PeriksaKit tidak hanya menampilkan hasil prediksi penyakit, tetapi juga memberikan informasi pendukung untuk membantu Anda memahami kondisi tanaman dan menentukan langkah penanganan yang tepat.
          </p>
        </div>
        <div className="relative grid grid-cols-2 z-1">
          <img src="/phone-result.jpg" alt="Prediction Result" className="outline-accent-bg outline-offset-[-2px] outline-2 w-50 z-0 absolute top-[50%] left-[50%] translate-[-50%]"/>
          <div className="z-1 flex flex-col items-end gap-4">
            <ResultCard className="mr-8" text="Nama Penyakit"/>
            <ResultCard className="mr-16" text="Gejala"/>
            <ResultCard className="mr-20" text="Pencegahan"/>
            <ResultCard className="mr-8 text-right" text="Gambar Penyakit Serupa"/>
          </div>
          <div className="z-1 flex flex-col items-start gap-4">
            <ResultCard className="ml-8" text="Tingkat Kepercayaan"/>
            <ResultCard className="ml-16" text="Penyebab"/>
            <ResultCard className="ml-20" text="Penanganan"/>
            <ResultCard className="ml-16" text="Referensi"/>
          </div>
        </div>
      </section>
      <section id="model" className="px-8 py-12 lg:px-12 lg:py-16 flex flex-col items-center">
        <Badge text="Our Models"/>
        <h2 className="mt-1 lg:mt-2 text-accent-bg text-center">
          Model AI yang Digunakan
        </h2>
        <p className="text-sm lg:text-base text-center mt-4 lg:mt-6">
          PeriksaKit dikembangkan sebagai proyek eksperimen untuk membandingkan performa beberapa arsitektur Convolutional Neural Network dalam mendeteksi penyakit tanaman dari citra daun.
        </p>
        <ModelComparisonTable/>
      </section>
      <section className="lg:gap-8 px-8 py-12 lg:px-12 lg:py-16 grid lg:grid-cols-2 items-center bg-accent-bg">
        <img src="/dataset.jpg" alt="Dataset" className="h-full"/>
        <div className="flex flex-col items-center justify-center lg:block">
          <Badge text="Dataset"/>
          <h2 className="mt-2 lg:mt-4 text-primary text-center lg:text-left">
            Dataset yang Digunakan
          </h2>
          <p className="mt-2 lg:mt-4 text-xl lg:text-2xl text-background font-bold">
            New Plant Disease Dataset
          </p>
          <p className="mt-1 font-medium text-primary">
            by Samir Bhattarai
          </p>
          <div className="mt-4 lg:mt-6 grid grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-background/50">
              <p className="font-bold text-primary text-2xl lg:text-3xl">
                38
              </p>
              <p className="text-background text-sm">classes</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <p className="font-bold text-primary text-2xl lg:text-3xl">
                70,295
              </p>
              <p className="text-background text-sm">training images</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <p className="font-bold text-primary text-2xl lg:text-3xl">
                17,572
              </p>
              <p className="text-background text-sm">validation images</p>
            </div>
          </div>
        </div>
      </section>
      <FAQSection/>
      <section className="flex flex-col items-center justify-center px-8 py-12 lg:px-12 lg:py-16 bg-center bg-[linear-gradient(rgba(0,0,0,0.5)),url('/farm.jpg')]">
        <h2 className="text-primary">Mulai Periksa Tanamanmu Hari Ini</h2>
        <p className="mt-2 lg:mt-4 text-background text-center text-sm lg:text-base">
          Unggah foto daun dan dapatkan analisis penyakit beserta rekomendasi penanganannya hanya dalam beberapa detik.
        </p>
        <button className="w-45 flex lg:w-fit mt-4 lg:mt-6">
          <a href="/home/#predict" className="btn-primary">
            Periksa Sekarang
          </a>
        </button>
      </section>
    </>
  )
}