"use client";

import { useState, useEffect } from 'react';

// --- DATA PROYEK ---
const projectsData = [
  {
    id: 1,
    title: "Drava Data Visualization",
    category: "Data Analysis",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
    ],
    description: "Drava adalah platform berbasis web universal untuk visualisasi dan analisis data time series. Sistem ini dilengkapi dengan fitur pendeteksi anomali (anomaly detection) dan forecasting untuk membantu pengambilan keputusan yang lebih akurat.",
    tools: [
      { name: "PHP", icon: "ph-file-code" },
      { name: "Database", icon: "ph-database" },
      { name: "Data Viz", icon: "ph-chart-line-up" }
    ]
  },
  {
    id: 2,
    title: "JHT Simulator System",
    category: "Web App",
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200"
    ],
    description: "Sebuah sistem kalkulator simulator Jaminan Hari Tua (JHT) yang dirancang menggunakan formula matematis dan logika terstruktur untuk memproyeksikan saldo jaminan kesehatan bagi para pekerja.",
    tools: [
      { name: "Web Dev", icon: "ph-browsers" },
      { name: "Calculator", icon: "ph-calculator" }
    ]
  },
  {
    id: 3,
    title: "Sistem Manajemen Kos",
    category: "Web App",
    thumbnail: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200"
    ],
    description: "Aplikasi sistem informasi untuk memanajemen operasional kos-kosan, meliputi pencatatan penghuni, status pembayaran, hingga manajemen fasilitas kamar yang terintegrasi dalam satu dashboard.",
    tools: [
      { name: "Web App", icon: "ph-house-line" },
      { name: "Code", icon: "ph-code" }
    ]
  },
  {
    id: 4,
    title: "Stunting Expert System",
    category: "Data Analysis",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=1200"
    ],
    description: "Sistem pakar yang dikembangkan untuk mendeteksi dan mengkalkulasi stunting pada anak berdasarkan variabel standar dari WHO seperti tinggi, berat badan, dan nutrisi.",
    tools: [
      { name: "Logic", icon: "ph-brain" },
      { name: "Health Tech", icon: "ph-stethoscope" }
    ]
  },
  {
    id: 5,
    title: "Smart To Do",
    category: "Web App",
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200"
    ],
    description: "Aplikasi manajemen tugas (Task Management) yang efisien, dikembangkan menggunakan framework Next.js dan di-deploy ke dalam Oracle Cloud Infrastructure (OCI).",
    tools: [
      { name: "Next.js", icon: "ph-atom" },
      { name: "Cloud", icon: "ph-cloud" }
    ]
  },
  {
    id: 6,
    title: "UI/UX Portfolio Design",
    category: "UI/UX Design",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200"
    ],
    description: "Eksplorasi desain antarmuka (UI) dan pengalaman pengguna (UX) untuk website portofolio profesional bergaya minimalis, lengkap dengan interaksi komponen dan animasi.",
    tools: [
      { name: "Figma", icon: "ph-figma-logo" },
      { name: "Design", icon: "ph-bezier-curve" }
    ]
  },
  {
    id: 7,
    title: "Project Tambahan Contoh 1",
    category: "Web App",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800",
    images: ["https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200"],
    description: "Ini adalah proyek demonstrasi tambahan untuk melihat cara kerja sistem see others ketika proyek Anda sudah lebih dari 6.",
    tools: [{ name: "Next.js", icon: "ph-atom" }]
  }
];

const servicesData = [
  { name: "Data Analytics", icon: "ph-chart-bar" },
  { name: "Data Visualization", icon: "ph-graph" },
  { name: "UI/UX Design", icon: "ph-pen-nib" },
  { name: "WEB Development", icon: "ph-code" }
];

const filterCategories = ["All Project", "Data Analysis", "Web App", "UI/UX Design"];

export default function Home() {
  const typingWords = ["Data Analyst", "Web Developer", "Data Visualization", "UI/UX Designer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [activeCategory, setActiveCategory] = useState("All Project");
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects = activeCategory === "All Project" 
    ? projectsData 
    : projectsData.filter((project) => project.category === activeCategory);

  const currentLimit = showAll ? filteredProjects.length : (isMobile ? 3 : 6);
  const visibleProjects = filteredProjects.slice(0, currentLimit);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000;

    const handleTyping = () => {
      const fullWord = typingWords[currentWordIndex];

      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const openModal = (project: any) => {
    setSelectedProject(project);
    setCurrentSlide(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="font-sans text-black bg-white min-h-screen relative">
      
      {/* Floating Navbar */}
      <div className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4">
        <nav className="w-full max-w-[1200px] bg-white/60 backdrop-blur-md border border-black rounded-full px-4 py-2 flex justify-between items-center text-[12px] font-medium shadow-sm">
          <div className="flex items-center gap-6">
            <span className="bg-[#D7E6FF] flex items-center gap-2 px-4 py-1.5 rounded-full lg:text-[16px]">
              <span className="w-3 h-3 rounded-full bg-green-500"></span> Open to Work
            </span>
            <span className="hidden md:block tracking-[0.15em] lg:text-[16px] uppercase text-xs">Satria Bima Bagaskara</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-gray-500 lg:text-[16px] transition-colors">
              Home
            </a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-gray-500 lg:text-[16px] transition-colors">
              Projects [{projectsData.length}]
            </a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-gray-500 lg:text-[16px] transition-colors">
              Services [{servicesData.length}]
            </a>
          </div>
          
          <div>
            <a href="#" className="bg-[#D7E6FF] px-6 py-2 rounded-full flex items-center lg:text-[16px] gap-2 hover:bg-[#c0d6f9] transition-colors">
              Let's Collaborate <i className="ph-bold ph-arrow-right"></i>
            </a>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="home" className="w-full h-screen min-h-[700px] flex flex-col relative overflow-hidden scroll-mt-24">
        <div className="flex-1 w-full max-w-[1200px] mx-auto px-6 flex flex-col justify-center pt-20">
          <div className="w-full flex justify-center">
            <div className="flex flex-col items-end w-max relative">
              <div className="relative inline-block">
                <h1 className="text-[100px] md:text-[200px] lg:text-[300px] font-black leading-none text-black m-0 p-0">
                  <span className="tracking-[0.15em]">BIM</span>A
                </h1>
                <sup className="text-4xl md:text-3xl lg:text-[60px] font-normal absolute top-[10%] -right-6 md:-right-12 lg:-right-16 tracking-normal">®</sup>
              </div>
              <div className="text-[12px] lg:text-[20px] text-gray-700 font-medium">
                One complete solution.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto px-6 pb-12 md:pb-16">
          <div className="flex flex-col md:flex-row justify-between items-end w-full">
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <p className="text-[14px] lg:text-[20px] font-medium mb-1 lg:mb-2 text-gray-800">Hello, I'm a</p>
              <h2 className="text-4xl md:text-5xl lg:text-[64px] pl-0 md:pl-[30px] font-bold tracking-wide leading-none min-h-[40px] lg:min-h-[64px] flex items-center">
                {currentText}
                <span className="font-normal text-black animate-pulse ml-1">|</span>
              </h2>
            </div>
            <div className="w-full md:w-auto flex md:justify-end">
              <p className="w-full md:max-w-[430px] lg:max-w-[400px] text-[14px] lg:text-[20px] text-gray-500 text-right leading-relaxed">
                Transforming complex logic and ideas into seamless, functional digital experiences.
              </p>
            </div>
          </div>
        </div>
        <hr className="w-full border-t-[2px] border-black absolute bottom-0 left-0 right-0" />
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-[1200px] mx-auto px-6 pt-16 pb-24 scroll-mt-24">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 text-[13px] font-medium gap-6">
          <span className="bg-[#82A8E5] text-white lg:text-[20px] px-6 py-1.5 rounded-full shrink-0">
            Project Archive
          </span>
          <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
            {filterCategories.map((category) => (
              <span 
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`cursor-pointer lg:text-[20px] transition-colors ${
                  activeCategory === category 
                    ? "bg-[#82A8E5] text-white px-6 py-1.5 rounded-full" 
                    : "hover:text-gray-500 px-2"
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* --- GRID PROYEK (Sudah memanggil array visualProjects) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => openModal(project)}
              className="group relative bg-[#1A1A1A] aspect-[4/4.5] rounded-[2rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 pointer-events-none">
                <h3 className="text-white text-xl md:text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-[#D7E6FF] text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Click to view details <i className="ph-bold ph-arrow-right inline-block ml-1"></i>
                </p>
              </div>
            </div>
          ))}
          
          {visibleProjects.length === 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20 text-gray-500 lg:text-[20px]">
              Belum ada proyek di kategori ini.
            </div>
          )}
        </div>

        {/* --- TOMBOL SEE OTHERS --- */}
        {!showAll && filteredProjects.length > currentLimit && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => setShowAll(true)} 
              className="bg-[#82A8E5] text-white lg:text-[20px] px-8 py-2 rounded-full text-[13px] hover:bg-[#6b95d8] transition-all duration-300 shadow-md hover:scale-105"
            >
              see others...
            </button>
          </div>
        )}
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#D7E6FF] py-24 px-6 scroll-mt-12">
        <div className="w-full max-w-[1200px] mx-auto">
          <h3 className="text-[16px] lg:text-[24px] font-medium mb-8 text-black">Services</h3>
          <div className="flex flex-wrap gap-4 lg:gap-6">
            {servicesData.map((service, index) => (
              <div key={index} className="border border-black/60 px-6 py-4 lg:px-8 lg:py-5 rounded-2xl flex items-center gap-4 w-max hover:bg-white/50 transition-colors cursor-default">
                <i className={`ph ${service.icon} text-2xl lg:text-[28px] text-[#82A8E5]`}></i>
                <span className="font-medium text-[12px] lg:text-[20px] tracking-wide text-black">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-6 text-center bg-white flex flex-col items-center">
        <h2 className="text-[2rem] font-medium tracking-wide mb-10 text-black">Ready to Collaborate?</h2>
        <button className="bg-[#D7E6FF] w-40 h-15 rounded-full flex items-center justify-center mx-auto hover:bg-[#c0d6f9] transition-colors py-3">
          <i className="ph-bold ph-arrow-right lg:text-[40px] text-white"></i>
        </button>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#D7E6FF] pt-24 pb-12 px-6">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-16 text-black">
            <div className="max-w-[320px]">
              <div className="text-[11px] lg:text-[14px] font-medium leading-[2.2] tracking-[0.15em]">
                I help businesses build intelligent, high-performance digital solutions that solve complex problems.
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-16 lg:gap-24">
              <div>
                <h4 className="text-[11px] lg:text-[14px] font-semibold tracking-[0.15em] border-b border-black inline-block pb-1 mb-3">Social Media</h4>
                <div className="flex gap-4 text-[26px]">
                  <a href="#" className="hover:text-gray-600 transition-colors"><i className="ph ph-github-logo"></i></a>
                  <a href="#" className="hover:text-gray-600 transition-colors"><i className="ph ph-linkedin-logo"></i></a>
                  <a href="#" className="hover:text-gray-600 transition-colors"><i className="ph ph-instagram-logo"></i></a>
                </div>
              </div>
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
          <div className="mt-16 lg:mt-10 text-[10px] lg:text-[12px] font-medium tracking-[0.15em] text-center w-full text-black">
            © 2026 Satria Bima Bagaskara.
          </div>
        </div>
      </footer>

      {/* --- MODAL / POPUP OVERLAY --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/70 backdrop-blur-sm transition-opacity" onClick={closeModal}>
          <div className="bg-white w-full max-w-6xl max-h-[95vh] rounded-[2rem] overflow-hidden flex flex-col md:flex-row relative shadow-2xl animate-[fadeIn_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/10 hover:bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center transition-colors text-black">
              <i className="ph-bold ph-x text-2xl"></i>
            </button>
            <div className="w-full md:w-1/2 relative bg-gray-100 aspect-video md:aspect-auto h-64 md:h-auto group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedProject.images[currentSlide]} alt="Project Slider" className="w-full h-full object-cover" />
              {selectedProject.images.length > 1 && (
                <>
                  <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-black shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="ph-bold ph-caret-left text-xl"></i>
                  </button>
                  <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-black shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="ph-bold ph-caret-right text-xl"></i>
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_: any, idx: number) => (
                      <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-4' : 'bg-white/50'}`} />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white text-black flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{selectedProject.title}</h3>
              <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed mb-10">{selectedProject.description}</p>
              <div>
                <h4 className="text-[14px] font-bold tracking-widest uppercase border-b-2 border-black/10 pb-3 mb-6">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-4">
                  {selectedProject.tools.map((tool: any, index: number) => (
                    <div key={index} className="flex items-center gap-2 bg-[#D7E6FF] px-4 py-2 rounded-full">
                      <i className={`ph ${tool.icon} text-xl text-[#82A8E5]`}></i>
                      <span className="text-[13px] font-semibold">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="mt-12 bg-black text-white px-8 py-3 rounded-full w-max flex items-center gap-2 hover:bg-gray-800 transition-colors">
                View Live Project <i className="ph-bold ph-arrow-up-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}