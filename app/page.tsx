export default function Home() {
  return (
    <main className="font-sans text-black bg-white min-h-screen">
      {/* Floating Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="w-full max-w-[1200px] bg-white border border-black rounded-full px-4 py-2 flex justify-between items-center text-[12px] font-medium">
          {/* Left */}
          <div className="flex items-center gap-6">
            <span className="bg-[#D7E6FF] flex items-center gap-2 px-4 py-1.5 rounded-full lg:text-[16px]">
              <span className="w-3 h-3 rounded-full bg-green-500"></span> Open to Work
            </span>
            <span className="hidden md:block tracking-[0.15em] lg:text-[16px] uppercase text-xs">Satria Bima Bagaskara</span>
          </div>
          
          {/* Center */}
          <div className="hidden lg:flex items-center gap-30">
            <a href="#" className="hover:text-gray-500 lg:text-[16px] transition-colors">Home</a>
            <a href="#" className="hover:text-gray-500 lg:text-[16px] transition-colors">Projects [1]</a>
            <a href="#" className="hover:text-gray-500 lg:text-[16px] transition-colors">Services [1]</a>
          </div>
          
          {/* Right */}
          <div>
            <a href="#" className="bg-[#D7E6FF] px-6 py-2 rounded-full flex items-center lg:text-[16px] gap-2 hover:bg-[#c0d6f9] transition-colors">
              Let's Collaborate <i className="ph ph-arrow-right"></i>
            </a>
          </div>
        </nav>
      </div>

      {/* Hero Section - 1 Halaman Full (100vh) */}
      <section className="w-full h-screen min-h-[700px] flex flex-col relative overflow-hidden">
        
        {/* Container untuk tulisan BIMA */}
        <div className="flex-1 w-full max-w-[1200px] mx-auto px-6 flex flex-col justify-center pt-20">
          <div className="w-full flex justify-center">
            <div className="flex flex-col items-end w-max relative">
              <div className="relative inline-block">
                {/* BIMA: 350px (di layar besar/desktop) */}
                <h1 className="text-[100px] md:text-[200px] lg:text-[300px] font-black leading-none text-black m-0 p-0">
                  <span className="tracking-[0.15em]">BIM</span>A
                </h1>
                <sup className="text-4xl md:text-3xl lg:text-[60px] font-normal absolute top-[10%] -right-6 md:-right-12 lg:-right-16 tracking-normal">®</sup>
              </div>
              {/* One complete solution: 20px */}
              <div className="text-[12px] lg:text-[20px] text-gray-700 font-medium">
                One complete solution.
              </div>
            </div>
          </div>
        </div>

        {/* Container untuk Subtitle (Menempel di atas garis) */}
        <div className="w-full max-w-[1200px] mx-auto px-6 pb-12 md:pb-16">
          <div className="flex flex-col md:flex-row justify-between items-end w-full">
            {/* Kiri */}
            <div className="w-full md:w-auto mb-6 md:mb-0">
              {/* Hello, I'm a: 20px */}
              <p className="text-[14px] lg:text-[20px] font-medium mb-1 lg:mb-2 text-gray-800">Hello, I'm a</p>
              {/* Data Analyst: 64px */}
              <h2 className="text-4xl lg:text-[64px] font-bold tracking-wide leading-none">Data Analyst</h2>
            </div>
            
            {/* Kanan */}
            <div className="w-full md:w-auto flex md:justify-end">
              {/* Transforming...: 24px (lebar container disesuaikan agar muat dengan font besar) */}
              <p className="w-full md:max-w-[430px] lg:max-w-[400px] text-[14px] lg:text-[20px] text-gray-500 text-right leading-relaxed">
                Transforming complex logic and ideas into seamless, functional digital experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Garis panjang full width dari kiri ke kanan ujung layar */}
        <hr className="w-full border-t-[2px] border-black absolute bottom-0 left-0 right-0" />
      </section>

      {/* Projects Section */}
      <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-24">
        {/* Filter Bar */}
        <div className="flex justify-between items-center mb-10 text-[13px] font-medium">
          <span className="bg-[#82A8E5] text-white lg:text-[20px] px-6 py-1.5 rounded-full">Project Archive</span>
          <div className="flex gap-6 items-center">
            <span className="bg-[#82A8E5] text-white lg:text-[20px] px-6 py-1.5 rounded-full">All Project</span>
            <span className="hover:text-gray-500 cursor-pointer lg:text-[20px]">Project</span>
            <span className="hover:text-gray-500 cursor-pointer lg:text-[20px]">Project</span>
            <span className="hover:text-gray-500 cursor-pointer lg:text-[20px]">Project</span>
          </div>
        </div>

        {/* Grid 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Box 1-6 */}
          <div className="bg-[#1A1A1A] aspect-[4/4.5] rounded-[2rem]"></div>
          <div className="bg-[#1A1A1A] aspect-[4/4.5] rounded-[2rem]"></div>
          <div className="bg-[#1A1A1A] aspect-[4/4.5] rounded-[2rem]"></div>
          <div className="bg-[#1A1A1A] aspect-[4/4.5] rounded-[2rem]"></div>
          <div className="bg-[#1A1A1A] aspect-[4/4.5] rounded-[2rem]"></div>
          <div className="bg-[#1A1A1A] aspect-[4/4.5] rounded-[2rem]"></div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-[#82A8E5] text-white lg:text-[20px] px-8 py-2 rounded-full text-[13px] hover:bg-[#6b95d8] transition-colors">
            others...
          </button>
        </div>
      </section>

      {/* Services Section - Diperbarui sesuai gambar */}
      <section className="bg-[#D7E6FF] py-24 px-6">
        <div className="w-full max-w-[1200px] mx-auto">
          <h3 className="text-[16px] lg:text-[24px] font-medium mb-8 text-black">Services</h3>
          <div className="flex flex-wrap gap-4 lg:gap-6">
            
            {/* Service Cards */}
            <div className="border border-black/60 px-6 py-4 lg:px-8 lg:py-5 rounded-2xl flex items-center gap-4 w-max hover:bg-white/50 transition-colors cursor-default">
              <i className="ph ph-chart-bar text-2xl lg:text-[28px] text-[#82A8E5]"></i>
              <span className="font-medium text-[12px] lg:text-[20px] tracking-wide text-black">Data Analytics</span>
            </div>
            <div className="border border-black/60 px-6 py-4 lg:px-8 lg:py-5 rounded-2xl flex items-center gap-4 w-max hover:bg-white/50 transition-colors cursor-default">
              <i className="ph ph-graph text-2xl lg:text-[28px] text-[#82A8E5]"></i>
              <span className="font-medium text-[12px] lg:text-[20px] tracking-wide text-black">Data Visualization</span>
            </div>
            <div className="border border-black/60 px-6 py-4 lg:px-8 lg:py-5 rounded-2xl flex items-center gap-4 w-max hover:bg-white/50 transition-colors cursor-default">
              <i className="ph ph-pen-nib text-2xl lg:text-[28px] text-[#82A8E5]"></i>
              <span className="font-medium text-[12px] lg:text-[20px] tracking-wide text-black">UI/UX Design</span>
            </div>
            <div className="border border-black/60 px-6 py-4 lg:px-8 lg:py-5 rounded-2xl flex items-center gap-4 w-max hover:bg-white/50 transition-colors cursor-default">
              <i className="ph ph-code text-2xl lg:text-[28px] text-[#82A8E5]"></i>
              <span className="font-medium text-[12px] lg:text-[20px] tracking-wide text-black">WEB Development</span>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6 text-center bg-white flex flex-col items-center">
        <h2 className="text-[2rem] font-medium tracking-wide mb-10 text-black">Ready to Collaborate?</h2>
        <button className="bg-[#D7E6FF] w-40 h-15 rounded-full flex items-center justify-center mx-auto hover:bg-[#c0d6f9] transition-colors">
          <i className="ph ph-arrow-right lg:text-[28px] text-white"></i>
        </button>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#D7E6FF] pt-24 pb-12 px-6">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
          
          {/* PEMBAGIAN KELOMPOK DENGAN FLEX JUSTIFY-BETWEEN */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-16 text-black">
            
            {/* KELOMPOK 1 (Rata Kiri) */}
            <div className="max-w-[320px]">
              <div className="text-[11px] lg:text-[14px] font-medium leading-[2.2] tracking-[0.15em]">
                I help businesses build intelligent, high-performance digital solutions that solve complex problems.
              </div>
            </div>
            
            {/* KELOMPOK 2 (Rata Kanan) -> Berisi Social Media & Address/Contact */}
            <div className="flex flex-col sm:flex-row gap-16 lg:gap-24">
              
              {/* Bagian Social Media */}
              <div>
                <h4 className="text-[11px] lg:text-[14px] font-semibold tracking-[0.15em] border-b border-black inline-block pb-1 mb-5">Social Media</h4>
                <div className="flex gap-4 text-[26px]">
                  <a href="#" className="hover:text-gray-600 transition-colors"><i className="ph ph-github-logo"></i></a>
                  <a href="#" className="hover:text-gray-600 transition-colors"><i className="ph ph-linkedin-logo"></i></a>
                  <a href="#" className="hover:text-gray-600 transition-colors"><i className="ph ph-instagram-logo"></i></a>
                </div>
              </div>

              {/* Bagian Address & Contact */}
              <div>
                <div className="mb-10">
                  <h4 className="text-[11px] lg:text-[14px] font-semibold tracking-[0.15em] border-b border-black inline-block pb-1 mb-4">Address</h4>
                  <p className="text-[11px] lg:text-[14px] font-medium tracking-[0.15em]">Lampung, Indonesia</p>
                </div>
                <div>
                  <h4 className="text-[11px] lg:text-[14px] font-semibold tracking-[0.15em] border-b border-black inline-block pb-1 mb-4">Contact</h4>
                  <p className="text-[11px] lg:text-[14px] font-medium tracking-[0.15em] mb-2">+62 85841902853</p>
                  <p className="text-[11px] lg:text-[14px] font-medium tracking-[0.15em]">iamkara2813@gmail.com</p>
                </div>
              </div>

            </div>

          </div>
          
          {/* Copyright */}
          <div className="mt-16 lg:mt-10 text-[10px] lg:text-[12px] font-medium tracking-[0.15em] text-center w-full text-black">
            © 2026 Satria Bima Bagaskara.
          </div>
        </div>
      </footer>
    </main>
  );
}