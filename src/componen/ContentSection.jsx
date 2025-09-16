import React from "react";

import dilucImg from "../assets/images/venti.gif";
import ventiImg from "../assets/images/zhongli.gif";
import zhongliImg from "../assets/images/shogun2.gif";
import nahidaImg from "../assets/images/nahida.gif";
import furinaimg from "../assets/images/furina.gif";
import mavuikimg from "../assets/images/mavuika.gif";
import hutaoimg from "../assets/images/hutao.gif";
import eulaimg from "../assets/images/eulagif.gif";

const heroes = [
  { name: "Venti", element: "Anemo", stars: 5, image: dilucImg, color: "from-green-400 to-emerald-500" },
  { name: "Zhongli", element: "Geo", stars: 5, image: ventiImg, color: "from-yellow-400 to-amber-500" },
  { name: "Raiden Shogun", element: "Electro", stars: 5, image: zhongliImg, color: "from-purple-800 to-purple-500" },
  { name: "Nahida", element: "Dendro", stars: 5, image: nahidaImg, color: "from-green-300 to-lime-500" },
  { name: "Furiina", element: "Hydro", stars: 5, image: furinaimg, color: "from-blue-500 to-cyan-500" },
  { name: "Mavuika", element: "Pyro", stars: 5, image: mavuikimg, color: "from-red-400 to-amber-600" },
  { name: "Hu Tao", element: "Pyro", stars: 5, image: hutaoimg, color: "from-red-400 to-amber-600" },
  { name: "Eula", element: "cryo", stars: 5, image: eulaimg, color: "from-cyan-500 to-blue-300" },
];

const ContentSection = () => {
  return (
    <section id="content-section" className="relative bg-gradient-to-b from-gray-700 to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* section title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Meet the characters of <span className="bg-gradient-to-r from-cyan-500 to-purple-300 bg-clip-text text-transparent">Teyvat</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">choose your characters and form the ultimate team to explore every corner of teyvat.</p>
        </div>

        {/* heroes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {heroes.map((hero, index) => (
            <div key={index} className="group bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* hero image */}
              <div className="relative h-60 w-full overflow-hidden">
                <img src={hero.image} alt={hero.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>

              {/* hero info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{hero.name}</h3>
                <div className={`inline-flex items-center bg-gradient-to-r ${hero.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>{hero.element}</div>

                {/* stars */}
                <div className="flex space-x-1 mt-4">
                  {[...Array(hero.stars)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>

                <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">view details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
