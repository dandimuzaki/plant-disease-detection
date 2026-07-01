import { Audiotrack, Email, LinkedIn, Instagram, WhatsApp, X, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className='bg-accent-bg overflow-hidden h-fit md:h-full'>
      <div className='flex justify-center items-center md:grid gap-4 px-8 lg:px-16 py-4 lg:py-8 text-white md:grid-cols-[2fr_1fr_1fr]'>
      <div className='flex flex-col gap-4'>
        <h2 className="text-primary">Periksa<span className="text-background">Kit</span></h2>
        <p className='hidden md:block text-sm/5'>
          PeriksaKit merupakan proyek deteksi penyakit tanaman berbasis Artificial Intelligence yang dikembangkan sebagai implementasi Computer Vision dan Deep Learning.
        </p>
        <div className='hidden md:flex justify-center md:justify-start gap-2'>
          <button className="aspect-square rounded-full h-full" ><Instagram fontSize='small'/></button>
          <button className="aspect-square rounded-full h-full"><X fontSize='small'/></button>
          <button className="aspect-square rounded-full h-full"><Audiotrack fontSize='small'/></button>
          <button className="aspect-square rounded-full h-full"><LinkedIn fontSize='small'/></button>
        </div>
      </div>
      <div className='hidden md:block space-y-2'>
        <p className='font-bold text-primary'>Quick Links</p>
        <div className="text-sm flex flex-col gap-1">
          <a href={"/home"} className='hover:text-primary'>Home</a>
          <a href={"/home/#predict"} className='hover:text-primary'>Buat Prediksi</a>
          <a href={"/home/#model"} className='hover:text-primary'>Pelajari Model</a>
          <a href={"/home/#faq"} className='hover:text-primary'>FAQ</a>
        </div>
      </div>
      <div className='hidden md:block space-y-2'>
        <p className='text-primary font-bold'>Get in Touch</p>
        <a className='flex gap-2 text-sm cursor-pointer items-center'><WhatsApp />+62 851-1738-8153</a>
        <a className='flex gap-2 text-sm cursor-pointer items-center'><Email />dandimuzaki@gmail.com</a>
        <a href="https://github.com/dandimuzaki/" className='flex gap-2 text-sm cursor-pointer'><GitHub/>github.com/dandimuzaki/</a>
      </div>
      </div>
    </div>
  );
};

export default Footer;