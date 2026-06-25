import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coins, 
  Flame, 
  Users, 
  Copy, 
  Check, 
  ExternalLink, 
  Menu, 
  X, 
  Globe, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  Clock, 
  Lock, 
  ChevronRight, 
  ArrowUpRight,
  Info
} from 'lucide-react';
import { translations } from './data';
import logoImg from './assets/images/logo.jpg';

const CONTRACT_ADDRESS = "0x31918E77a0CAbcF2CCc50f80aB1540B8A3bD8c55";

export default function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Calculator state
  const [calcInput, setCalcInput] = useState<string>("1000");
  
  const t = translations[lang];

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Safe parsed investment amount
  const parsedInvestment = parseFloat(calcInput) || 0;
  const dailyYield = parsedInvestment * 0.015;
  const totalYield = parsedInvestment * 3.0; // 1.5% * 200 days = 300%

  return (
    <div id="app-root" className="min-h-screen font-sans bg-[#FFF8F0] text-[#4A2C2A] selection:bg-[#FAD4C0] selection:text-[#2D1614]">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#FFEAD9]/60 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-[400px] right-0 w-[400px] h-[400px] bg-[#FFE6D4]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-[200px] left-0 w-[500px] h-[500px] bg-[#FFF0E5]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <header id="header-nav" className="sticky top-0 z-50 bg-[#FFF8F0]/80 backdrop-blur-md border-b border-[#FAD4C0] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src={logoImg} 
                alt="JPEPE Mascot Logo" 
                className="w-12 h-12 rounded-xl border-2 border-[#FF6B35] shadow-lg hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tighter text-[#2D1614]">
                  JPEPE<span className="text-[#FF6B35]">ECO</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#FF6B35] -mt-1 font-mono">
                  BSC DUAL-TOKEN
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav id="desktop-nav" className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider">
              <a href="#narrative" className="hover:text-[#FF6B35] transition-colors">{t.navAbout}</a>
              <a href="#mechanisms" className="hover:text-[#FF6B35] transition-colors">{t.navFeatures}</a>
              <a href="#tokenomics" className="hover:text-[#FF6B35] transition-colors">{t.navTokenomics}</a>
              <a href="#calculator" className="hover:text-[#FF6B35] transition-colors">{t.calculatorTitle}</a>
              <a href="#community" className="hover:text-[#FF6B35] transition-colors">{t.navCommunity}</a>
            </nav>

            {/* Language & Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex bg-white rounded-full p-1 border border-[#FAD4C0] shadow-sm">
                <button 
                  onClick={() => setLang('en')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === 'en' ? 'bg-[#FF6B35] text-white shadow-md' : 'text-[#4A2C2A] hover:text-[#FF6B35]'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang('zh')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${lang === 'zh' ? 'bg-[#FF6B35] text-white shadow-md' : 'text-[#4A2C2A] hover:text-[#FF6B35]'}`}
                >
                  中文
                </button>
              </div>

              <a 
                href="https://t.me/UPEPE_JPEPE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#2D1614] hover:bg-[#4A2C2A] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center gap-1.5"
              >
                Telegram
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-3 md:hidden">
              {/* Language Switch for Mobile */}
              <button 
                onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
                className="flex items-center gap-1 bg-white border border-[#FAD4C0] text-xs font-bold px-2.5 py-1.5 rounded-full text-[#4A2C2A]"
              >
                <Globe className="w-3.5 h-3.5 text-[#FF6B35]" />
                {lang === 'en' ? '中文' : 'EN'}
              </button>

              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#4A2C2A] hover:bg-white rounded-lg border border-[#FAD4C0]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-[#FAD4C0] bg-[#FFF8F0]"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                <a 
                  href="#narrative" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-[#2D1614] hover:bg-white"
                >
                  {t.navAbout}
                </a>
                <a 
                  href="#mechanisms" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-[#2D1614] hover:bg-white"
                >
                  {t.navFeatures}
                </a>
                <a 
                  href="#tokenomics" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-[#2D1614] hover:bg-white"
                >
                  {t.navTokenomics}
                </a>
                <a 
                  href="#calculator" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-[#2D1614] hover:bg-white"
                >
                  {t.calculatorTitle}
                </a>
                <a 
                  href="#community" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-[#2D1614] hover:bg-white"
                >
                  {t.navCommunity}
                </a>
                <div className="pt-2">
                  <a 
                    href="https://t.me/UPEPE_JPEPE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full text-center bg-[#2D1614] hover:bg-[#4A2C2A] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    Telegram Community
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="hero-section" className="relative pt-12 pb-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#FE6B3522] text-[#FF6B35] rounded-md text-xs font-bold mb-6 uppercase tracking-wider"
              >
                <span className="flex h-2 w-2 rounded-full bg-[#FF6B35] animate-pulse" />
                The Value Foundation of UPEPE
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#2D1614] leading-[1.1]"
              >
                {lang === 'zh' ? (
                  <>
                    Pepe的<span className="text-[#FF6B35]">黄金时代</span>
                  </>
                ) : (
                  <>
                    The Ultimate <span className="text-[#FF6B35]">Deflationary</span> Dual-Token Ecosystem
                  </>
                )}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-base sm:text-lg text-[#4A2C2A] opacity-90 max-w-xl leading-relaxed italic border-l-4 border-[#FF6B35] pl-6"
              >
                {t.heroSubtitle}
              </motion.p>

              {/* Contract Address copy panel */}
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 w-full max-w-xl bg-white p-6 rounded-3xl border border-[#FAD4C0] shadow-xl shadow-[#FF6B3511] flex flex-col gap-3 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-b from-[#FFEAD9]/20 to-transparent pointer-events-none rounded-full blur-xl" />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#FF6B35] tracking-widest uppercase font-mono flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#FF6B35]" />
                    {t.contractAddress}
                  </span>
                  <span className="text-[10px] font-bold text-white bg-[#FF6B35] py-0.5 px-2 rounded-full tracking-wide">
                    BSC CHAIN (BEP-20)
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-1">
                  <div className="bg-[#FFF8F0] px-4 py-3.5 rounded-2xl border border-[#FAD4C0] text-xs font-mono font-bold text-[#4A2C2A] select-all flex-1 truncate text-center sm:text-left shadow-inner">
                    {CONTRACT_ADDRESS}
                  </div>
                  
                  <button 
                    onClick={handleCopy}
                    className="bg-[#FF6B35] hover:bg-[#E85A24] text-white px-6 py-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md active:scale-95 shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#FFF8F0]" />
                        <span className="text-white">{t.copiedBtn}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.copyBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>

              {/* Action Links */}
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a 
                  href="https://t.me/UPEPE_JPEPE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#2D1614] hover:bg-[#4A2C2A] text-white px-6 py-3.5 rounded-2xl font-bold text-sm transition-transform hover:scale-105 flex items-center gap-2 shadow-lg"
                >
                  <Coins className="w-4 h-4 text-[#FF6B35]" />
                  {t.joinTg}
                </a>

                <a 
                  href="https://x.com/UPEPE_BSC" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#FFF8F0] text-[#2D1614] border border-[#FAD4C0] px-6 py-3.5 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm"
                >
                  <Globe className="w-4 h-4 text-[#FF6B35]" />
                  {t.followX}
                </a>
              </motion.div>
            </div>

            {/* Right Media Column - Logo Feature */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
                className="relative"
              >
                {/* Visual Backdrop Rings */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD93D]/25 to-[#FF6B35]/25 rounded-full filter blur-3xl animate-pulse pointer-events-none -z-10" />
                <div className="absolute -inset-4 border-2 border-dashed border-[#FAD4C0]/60 rounded-full animate-[spin_40s_linear_infinite]" />
                <div className="absolute -inset-10 border border-[#FAD4C0]/30 rounded-full pointer-events-none" />

                {/* Main Logo Container */}
                <div className="relative bg-white p-5 rounded-[40px] border-8 border-[#FAD4C0] shadow-2xl overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFD93D] rounded-full blur-3xl opacity-20"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF6B35] rounded-full blur-3xl opacity-20"></div>

                  <img 
                    src={logoImg} 
                    alt="JPEPE Main mascot golden frog" 
                    className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-inner hover:scale-105 transition-transform duration-500 relative z-10"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 -right-2 bg-[#FF6B35] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 border border-[#FAD4C0] z-20">
                    <Coins className="w-3.5 h-3.5 text-white" />
                    <span>BSC Network</span>
                  </div>

                  <div className="absolute -bottom-2 left-6 bg-[#2D1614] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 border border-[#FF6B35] z-20">
                    <Flame className="w-3.5 h-3.5 text-[#FF6B35]" />
                    <span>100% Deflation</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Project Narrative Section */}
      <section id="narrative" className="py-20 bg-white border-t border-b border-[#FAD4C0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-xs font-extrabold tracking-widest text-[#FF6B35] uppercase mb-3">
              Core Paradigm / 核心设计
            </h2>
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#2D1614] tracking-tight">
              {t.narrativeTitle}
            </p>
            <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-[#4A2C2A] opacity-80 font-semibold text-sm sm:text-base">
              {t.narrativeSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* JPEPE Narrative */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-[32px] border border-[#FAD4C0] shadow-xl shadow-[#FF6B3511] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFEAD9]/30 rounded-full blur-xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#FFF3EC] rounded-2xl border border-[#FAD4C0] text-[#FF6B35] font-display font-black text-2xl shadow-inner">
                    🐸
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-black text-[#2D1614]">JPEPE</h3>
                    <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-wider font-mono">ECOSYSTEM CORNERSTONE</p>
                  </div>
                </div>
                <p className="text-base text-[#4A2C2A] leading-relaxed font-normal">
                  {t.narrativeDesc1}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#FAD4C0] flex items-center justify-between">
                <span className="text-xs font-bold text-[#4A2C2A]">{lang === 'zh' ? '总量' : 'Supply'}: <strong className="font-mono text-[#2D1614]">100,000 JPEPE</strong></span>
                <span className="text-xs font-bold text-[#FF6B35] bg-[#FF6B3511] px-3 py-1 rounded-full border border-[#FF6B3533]">
                  {lang === 'zh' ? '永不流通' : 'Never Circulates'}
                </span>
              </div>
            </motion.div>

            {/* UPEPE Narrative */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-[32px] border border-[#FAD4C0] shadow-xl shadow-[#FF6B3511] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFEAD9]/30 rounded-full blur-xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#FFF3EC] rounded-2xl border border-[#FAD4C0] text-[#FF6B35] font-display font-black text-2xl shadow-inner">
                    🔥
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-black text-[#2D1614]">UPEPE</h3>
                    <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-wider font-mono">ULTIMATE UTILITY TOKEN</p>
                  </div>
                </div>
                <p className="text-base text-[#4A2C2A] leading-relaxed font-normal">
                  {t.narrativeDesc2}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#FAD4C0] flex items-center justify-between">
                <span className="text-xs font-bold text-[#4A2C2A]">{lang === 'zh' ? '总量' : 'Supply'}: <strong className="font-mono text-[#2D1614]">21,000,000 UPEPE</strong></span>
                <div className="flex gap-2">
                  <span className="text-xs font-bold text-[#FF6B35] bg-[#FF6B3511] px-2.5 py-1 rounded-full border border-[#FF6B3533]">
                    {lang === 'zh' ? '销毁500万' : '5M Burned'}
                  </span>
                  <span className="text-xs font-bold text-[#B8860B] bg-[#FFD93D22] px-2.5 py-1 rounded-full border border-[#FFD93D66]">
                    {lang === 'zh' ? '绑定800万' : '8M Bound'}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* JPEPE Backing & UPEPE Value Generation Callout */}
          <div className="mt-12 bg-[#FF6B3511] p-8 rounded-[32px] border border-[#FF6B3533] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <span className="text-xs font-black text-[#FF6B35] tracking-widest uppercase block mb-1 font-mono">
                  NO BACKEND • NO TEAM DUMP
                </span>
                <h4 className="font-display text-2xl font-bold text-[#2D1614] mb-3">
                  {t.synergyTitle}
                </h4>
                <p className="text-sm font-bold text-[#FF6B35] uppercase tracking-wider mb-3">
                  {t.synergySubtitle}
                </p>
                <p className="text-sm text-[#4A2C2A] opacity-90 leading-relaxed max-w-4xl">
                  {t.synergyDesc}
                </p>
              </div>
              <div className="shrink-0 flex gap-4">
                <div className="p-4 bg-white rounded-2xl border border-[#FAD4C0] flex flex-col items-center justify-center text-center w-24">
                  <span className="text-2xl">⚡</span>
                  <span className="text-[10px] font-bold text-[#2D1614] mt-1 uppercase tracking-wider">{lang === 'zh' ? '无项目方' : 'No Owner'}</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[#FAD4C0] flex flex-col items-center justify-center text-center w-24">
                  <span className="text-2xl">🛡️</span>
                  <span className="text-[10px] font-bold text-[#2D1614] mt-1 uppercase tracking-wider">{lang === 'zh' ? '无后台' : 'No Tricks'}</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-[#FAD4C0] flex flex-col items-center justify-center text-center w-24">
                  <span className="text-2xl">🌱</span>
                  <span className="text-[10px] font-bold text-[#2D1614] mt-1 uppercase tracking-wider">{lang === 'zh' ? '真通缩' : 'Deflation'}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* On-Chain Closed-Loop Mechanisms Section */}
      <section id="mechanisms" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-xs font-extrabold tracking-widest text-[#FF6B35] uppercase mb-3">
              Auto Operations / 自动闭环
            </h2>
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#2D1614] tracking-tight">
              {t.featuresTitle}
            </p>
            <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-[#4A2C2A] opacity-80 text-sm sm:text-base">
              {t.featuresSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-3xl border border-[#FAD4C0] shadow-xl shadow-[#FF6B3505] flex flex-col justify-between group hover:border-[#FF6B35] transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF3EC] border border-[#FAD4C0] text-[#FF6B35] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#2D1614] mb-3">
                  {t.feat1Title}
                </h3>
                <p className="text-xs text-[#4A2C2A] opacity-80 leading-relaxed">
                  {t.feat1Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FAD4C0] flex items-center gap-1.5 text-xs font-bold text-[#FF6B35] uppercase tracking-wider">
                <span>Auto-Deflation</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-3xl border border-[#FAD4C0] shadow-xl shadow-[#FF6B3505] flex flex-col justify-between group hover:border-[#FF6B35] transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF3EC] border border-[#FAD4C0] text-[#FF6B35] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#2D1614] mb-3">
                  {t.feat2Title}
                </h3>
                <p className="text-xs text-[#4A2C2A] opacity-80 leading-relaxed">
                  {t.feat2Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FAD4C0] flex items-center gap-1.5 text-xs font-bold text-[#FF6B35] uppercase tracking-wider">
                <span>10% Precision Allocation</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-3xl border border-[#FAD4C0] shadow-xl shadow-[#FF6B3505] flex flex-col justify-between group hover:border-[#FF6B35] transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF3EC] border border-[#FAD4C0] text-[#FF6B35] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#2D1614] mb-3">
                  {t.feat3Title}
                </h3>
                <p className="text-xs text-[#4A2C2A] opacity-80 leading-relaxed">
                  {t.feat3Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FAD4C0] flex items-center gap-1.5 text-xs font-bold text-[#FF6B35] uppercase tracking-wider">
                <span>Dynamic Real-Time Payout</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-3xl border border-[#FAD4C0] shadow-xl shadow-[#FF6B3505] flex flex-col justify-between group hover:border-[#FF6B35] transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF3EC] border border-[#FAD4C0] text-[#FF6B35] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#2D1614] mb-3">
                  {t.feat4Title}
                </h3>
                <p className="text-xs text-[#4A2C2A] opacity-80 leading-relaxed">
                  {t.feat4Desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#FAD4C0] flex items-center gap-1.5 text-xs font-bold text-[#FF6B35] uppercase tracking-wider">
                <span>1.5% Daily Output</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Yield Estimator/Calculator widget (Premium & interactive) */}
      <section id="calculator" className="py-20 bg-gradient-to-b from-[#FFF8F0] to-[#FAF0E3] border-t border-[#FAD4C0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-xs font-extrabold tracking-widest text-[#FF6B35] uppercase mb-3">
              Interactive Tools / 互动计算
            </h2>
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#2D1614] tracking-tight">
              {t.calculatorTitle}
            </p>
            <p className="mt-3 text-[#4A2C2A] opacity-85 text-sm">
              {t.calculatorSubtitle}
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-[40px] border-2 border-[#FAD4C0] shadow-2xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6B35]/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="grid grid-cols-1 gap-8 relative z-10">
              
              {/* Input block */}
              <div>
                <label className="block text-xs font-bold text-[#FF6B35] mb-2 uppercase tracking-widest font-mono">
                  {t.calcInvestment}
                </label>
                <div className="relative mt-1 rounded-2xl shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="text-[#FF6B35] font-extrabold font-mono text-base">$</span>
                  </div>
                  <input
                    type="number"
                    value={calcInput}
                    onChange={(e) => setCalcInput(e.target.value)}
                    placeholder="e.g. 1000"
                    min="0"
                    className="block w-full rounded-2xl border-2 border-[#FAD4C0] bg-[#FFF8F0] py-4 pl-10 pr-24 text-base text-[#2D1614] placeholder-[#4A2C2A]/40 outline-none focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 font-bold font-mono transition-all"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-xs font-bold text-[#FF6B35] bg-[#FFE6D4] py-1.5 px-3 rounded-xl border border-[#FAD4C0] font-mono">
                      USDT
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-xs text-[#FF6B35] font-semibold flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  {t.calcNote}
                </p>
              </div>

              {/* Dynamic Results Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Result Card: Daily */}
                <div className="bg-[#FF6B3511] p-5 rounded-2xl border border-[#FF6B3533] shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#FF6B35] uppercase tracking-wider">{t.calcDailyReturn}</span>
                    <p className="text-2xl sm:text-3xl font-black text-[#FF6B35] mt-2 font-mono">
                      {dailyYield.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-sm font-bold text-[#FF6B35]/75">USDT</span>
                    </p>
                  </div>
                  <div className="mt-4 text-[10px] font-bold text-[#FF6B35] uppercase bg-[#FFF3EC] py-1 px-2.5 rounded-md border border-[#FAD4C0] self-start font-mono">
                    1.5% Daily yield rate
                  </div>
                </div>

                {/* Result Card: Total */}
                <div className="bg-[#2D1614] p-5 rounded-2xl shadow-sm text-white flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#FFD93D] uppercase tracking-wider">{t.calcTotalReturn}</span>
                    <p className="text-2xl sm:text-3xl font-black text-white mt-2 font-mono">
                      {totalYield.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-sm font-bold text-[#FFD93D]/80">USDT</span>
                    </p>
                  </div>
                  <div className="mt-4 text-[10px] font-bold text-white uppercase bg-white/10 py-1 px-2.5 rounded-md self-start font-mono">
                    300% Total linear release
                  </div>
                </div>

              </div>

              <p className="text-[11px] text-[#4A2C2A] opacity-70 leading-relaxed text-center pt-2 border-t border-[#FAD4C0]">
                {t.calcDisclaimer}
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Token parameters / Tokenomics section */}
      <section id="tokenomics" className="py-20 bg-[#FFF8F0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-xs font-extrabold tracking-widest text-[#FF6B35] uppercase mb-3">
              Specifications / 核心参数
            </h2>
            <p className="font-display text-3xl sm:text-4xl font-extrabold text-[#2D1614] tracking-tight">
              {t.tokenomicsTitle}
            </p>
            <div className="h-1 w-20 bg-[#FF6B35] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-[#4A2C2A] opacity-80 text-sm">
              {t.tokenomicsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* JPEPE Specs */}
            <div className="bg-white p-8 rounded-[32px] border-2 border-[#FAD4C0] shadow-xl shadow-[#FF6B3511] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 bg-[#FF6B3511] text-[#FF6B35] font-display font-bold text-xs rounded-bl-2xl uppercase tracking-wider font-mono">
                Anchor Pool
              </div>
              
              <h3 className="font-display text-2xl font-black text-[#2D1614] mb-2 flex items-center gap-2">
                <span className="text-xl">🟢</span>
                JPEPE
              </h3>
              <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-6 font-mono">
                {t.jpepeName}
              </p>

              <div className="space-y-4">
                
                <div className="flex justify-between items-center py-3 border-b border-[#FAD4C0]">
                  <span className="text-sm font-semibold text-[#4A2C2A]">{t.paramSymbol}</span>
                  <span className="text-sm font-black text-[#2D1614] font-mono">JPEPE</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-[#FAD4C0]">
                  <span className="text-sm font-semibold text-[#4A2C2A]">{t.paramChain}</span>
                  <span className="text-sm font-black text-[#2D1614] font-mono">BSC (BEP-20)</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-[#FAD4C0]">
                  <span className="text-sm font-semibold text-[#4A2C2A]">{t.paramSupply}</span>
                  <span className="text-sm font-black text-[#FF6B35] font-mono">{t.jpepeSupply}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-[#FAD4C0]">
                  <span className="text-sm font-semibold text-[#4A2C2A]">{t.paramTax}</span>
                  <span className="text-sm font-black text-[#16A34A] font-mono">{t.jpepeTax}</span>
                </div>

                <div className="py-3">
                  <span className="text-sm font-semibold text-[#4A2C2A] block mb-2">{t.paramFeatures}</span>
                  <div className="bg-[#FFF8F0] p-4 rounded-xl border border-[#FAD4C0] text-xs font-bold text-[#4A2C2A] leading-relaxed">
                    {t.jpepeFeatures}
                  </div>
                </div>

              </div>
            </div>

            {/* UPEPE Specs */}
            <div className="bg-white p-8 rounded-[32px] border-2 border-[#FAD4C0] shadow-xl shadow-[#FF6B3511] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 bg-[#FF6B3511] text-[#FF6B35] font-display font-bold text-xs rounded-bl-2xl uppercase tracking-wider font-mono">
                Utility Engine
              </div>
              
              <h3 className="font-display text-2xl font-black text-[#2D1614] mb-2 flex items-center gap-2">
                <span className="text-xl">🔥</span>
                UPEPE
              </h3>
              <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-6 font-mono">
                {t.upepeName}
              </p>

              <div className="space-y-4">
                
                <div className="flex justify-between items-center py-3 border-b border-[#FAD4C0]">
                  <span className="text-sm font-semibold text-[#4A2C2A]">{t.paramSymbol}</span>
                  <span className="text-sm font-black text-[#2D1614] font-mono">UPEPE</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-[#FAD4C0]">
                  <span className="text-sm font-semibold text-[#4A2C2A]">{t.paramChain}</span>
                  <span className="text-sm font-black text-[#2D1614] font-mono">BSC (BEP-20)</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-[#FAD4C0]">
                  <span className="text-sm font-semibold text-[#4A2C2A]">{t.paramSupply}</span>
                  <span className="text-sm font-black text-[#FF6B35] font-mono">{t.upepeSupply}</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-[#FAD4C0]">
                  <span className="text-sm font-semibold text-[#4A2C2A]">{t.paramTax}</span>
                  <span className="text-sm font-black text-[#FF6B35] font-mono">{t.upepeTax}</span>
                </div>

                <div className="py-3">
                  <span className="text-sm font-semibold text-[#4A2C2A] block mb-2">{t.paramFeatures}</span>
                  <div className="bg-[#FFF8F0] p-4 rounded-xl border border-[#FAD4C0] text-xs font-bold text-[#4A2C2A] leading-relaxed">
                    {t.upepeFeatures}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Community Links & Call to action */}
      <section id="community" className="py-20 bg-gradient-to-b from-[#FFF8F0] to-[#FFEAD9] border-t border-[#FAD4C0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <img 
            src={logoImg} 
            alt="Mascot Golden Frog Logo" 
            className="w-20 h-20 rounded-2xl mx-auto border-4 border-[#FF6B35] shadow-lg mb-8"
            referrerPolicy="no-referrer"
          />

          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#2D1614] tracking-tight mb-4">
            {lang === 'zh' ? '开启您的黄金生态征程' : 'Embrace the Golden Era'}
          </h2>
          <p className="text-base sm:text-lg text-[#4A2C2A] opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">
            {lang === 'zh' 
              ? '加入我们的自治社区，全程链上自动沉淀，真正长久、极致通缩、高额分红的去中心化双币常青生态。' 
              : 'Join our autonomous community today. Absolute long-term viability, 100% automated smart contract security, and continuous deflation value.'
            }
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a 
              href="https://t.me/UPEPE_JPEPE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#2D1614] hover:bg-[#4A2C2A] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              <Coins className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              Telegram Channel
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a 
              href="https://x.com/UPEPE_BSC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#2D1614] hover:bg-[#4A2C2A] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              <Globe className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              Follow Twitter (X)
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D1614] text-[#FAD4C0]/80 py-12 border-t border-[#FAD4C0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* Logo brand */}
            <div className="flex items-center gap-3">
              <img 
                src={logoImg} 
                alt="JPEPE Mascot Footer" 
                className="w-10 h-10 rounded-lg border border-[#FF6B35]"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col text-left">
                <span className="font-display font-black text-sm tracking-tight text-white">
                  JPEPE<span className="text-[#FF6B35]">ECO</span> DUAL-TOKEN
                </span>
                <span className="text-[9px] text-[#FAD4C0] font-mono">
                  BSC IMMUTABLE MECHANISM
                </span>
              </div>
            </div>

            {/* Simple Menu */}
            <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-wider text-[#FAD4C0]/70">
              <a href="#narrative" className="hover:text-white transition-colors">{t.navAbout}</a>
              <a href="#mechanisms" className="hover:text-white transition-colors">{t.navFeatures}</a>
              <a href="#tokenomics" className="hover:text-white transition-colors">{t.navTokenomics}</a>
              <a href="#calculator" className="hover:text-white transition-colors">{t.calculatorTitle}</a>
            </div>

            {/* Copyright */}
            <div className="text-xs text-[#FAD4C0]/60 font-mono text-center md:text-right">
              <p>© 2026 JPEPE & UPEPE Core Team. All rights reserved.</p>
              <p className="mt-1 text-[10px] text-[#FF6B35]">{lang === 'zh' ? '全智能合约驱动 • 零控盘' : 'Fully Smart Contract Driven • Uncontrollable'}</p>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
