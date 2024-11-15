const SpotLight = () => {
  return (
    <section className="pt-[2vh] flex flex-col w-full gap-6 bg-[#121212] px-[6vh]">
      <div className="border-[5px] border-black rounded-[10px] flex flex-col bg-black shadow-[10px_10px_10px_black]">
        <p className="text-[24px] text-white pl-[2vh]">SPotLight</p>

        <div className="flex flex-wrap gap-4 pt-[30px] px-[28px]">
          {Array(24)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="w-[80px] h-[80px] mb-8 rounded-[10px] bg-[#800080] text-white"
                style={{ boxShadow: "2px 2px 5px white" }}
              >
                {/* add hover to img -> hover{box-shadow: 2px 2px 5px #60b3d1;}  */}
                <a
                  href="https://www.aldoshoes.com/us/en_US?gclsrc=aw.ds&&utm_source=google&utm_medium=cpc&utm_campaign=aldo_us_en_search_brand_nogender_core&utm_content=653404197253&utm_term=aldo&device=c&network=g&placement=&gad_source=1&gclid=EAIaIQobChMI1_jp_KaxiQMVrm9HAR0_Sj1YEAAYASAAEgKjY_D_BwE
                       "
                >
                  <img
                    src="/manzashop/assets/aldo.jpeg"
                    className="mr-[23px] inline-block w-[80px] h-[80px] rounded-[10px] bg-[#800080] text-white"
                    style={{ boxShadow: "2px 2px 5px white" }}
                  />
                </a>
              </div>
            ))}
        </div>
      </div>

      <div className="flex flex-col lg:gap-8 gap-10 lg:flex-row lg:justify-around items-center xl:px-36 px-8">
        <div className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px]">
          <p className="bg-black text-white text-[34px] pb-6">Get A Domain</p>

          <a href="https://www.domain.com/my-account/login">
            <img
              src="/manzashop/assets/domain.jpeg"
              className="object-fit h-[265px]"
            />
          </a>
        </div>

        <div className="text-white flex flex-col items-center rounded-[10px] border-[5px] border-black bg-black w-[382px] h-[350px]">
          <p className="bg-black text-white text-[34px] pb-6">
            Build Ur own site
          </p>

          <a href="https://webflow.com/">
            <img
              src="/manzashop/assets/webflow.jpeg"
              className="object-fit h-[265px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpotLight;
