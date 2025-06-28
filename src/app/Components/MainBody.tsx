import Image from "next/image";

function MainBody() {
  return (
    <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
      <div className="flex flex-col lg:items-start md:items-center lg:flex-row justify-between gap-8 lg:gap-12">
        <section className="h-auto flex flex-col ">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold ms:text-4xl lg:text-5xl text-white mb-4 ">
              Discover AI Digital Services &
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text ">
                {" "}
                Grow Business
              </span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl py-6 ">
            Grow Your Business with Our AI Digital Services and Get High Quality
            and Trustful work.
          </p>

          <div className="">
            <button className="group relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 mb-8">
              Get Started
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700 mt-2">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white">
                100%
              </div>
              <div className="text-sm text-gray-400">Work Quaility</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white">
                100+
              </div>
              <div className="text-sm text-gray-400">Project Using AI </div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white">
                100%
              </div>
              <div className="text-sm text-gray-400">Less Market Prizes </div>
            </div>
          </div>
        </section>
        <section>
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-700">
            <Image
              src="/New.jpeg"
              alt="Description"
              width={500}
              height={200}
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110 rounded-2xl"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainBody;
