'use client'

import { Menu, X, Mail, Phone, MapPin, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="bg-white text-gray-800">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-bold flex items-center space-x-2">
              <motion.div
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 bg-black"
              />
              <span>ZIMA <span className="font-light">mimari</span></span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              {['Projeler', 'Hizmetler', 'İletişim'].map((item, index) => (
                <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link href={`#${item.toLowerCase()}`} className="hover:text-gray-600 transition-colors">
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Menüyü aç/kapat</span>
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-white pt-20"
        >
          <nav className="flex flex-col items-center space-y-8 py-8">
            {['Projeler', 'Hizmetler', 'İletişim'].map((item, index) => (
              <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl hover:text-gray-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}

      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/bg-image.jpg"
              alt="Modern mimari"
              style={{ opacity: 0.3, objectFit: 'cover' }}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </motion.div>
          <div className="relative z-10 text-center ">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Geleceği Tasarlıyoruz
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8"
            >
              Modern, sürdürülebilir ve etkileyici mimari çözümler
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="#contact"
                className="bg-white text-gray-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Bize Ulaşın
                <ChevronDown className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="projeler"
          className="py-20 bg-gray-50"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-4">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Projelerimiz
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Proje ${item}`}
                    alt={`Proje ${item}`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Proje {item}</h3>
                    <p className="text-gray-600">Kısa proje açıklaması burada yer alacak.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="hizmetler"
          className="py-20 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-4">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Hizmetlerimiz
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Konsept Tasarım',
                'İç Mekan Tasarımı',
                'Peyzaj Tasarımı',
                'Restorasyon',
                '3D Modelleme',
                'Proje Yönetimi',
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-4">{service}</h3>
                  <p className="text-gray-600">Bu hizmet hakkında kısa bir açıklama yer alacak.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="iletisim"
          className="py-20 bg-gray-800 text-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="container mx-auto px-4">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 text-center">
              İletişim
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-semibold mb-4">Bize Ulaşın</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Mail className="h-6 w-6 mr-2" />
                    <a href="mailto:info@zimamimari.com" className="hover:underline">
                      info@zimamimari.com
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-6 w-6 mr-2" />
                    <a href="tel:+901234567890" className="hover:underline">
                      +90 123 456 7890
                    </a>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-6 w-6 mr-2" />
                    <span>Örnek Mahallesi, Mimarlık Caddesi No: 123, İstanbul</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-semibold mb-4">Mesaj Gönderin</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Adınız"
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
                    required
                  />
                  <input
                    type="email"
                    placeholder="E-posta Adresiniz"
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
                    required
                  />
                  <textarea
                    placeholder="Mesajınız"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400"
                    required
                  ></textarea>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-gray-800 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Gönder
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Zima Mimari. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}