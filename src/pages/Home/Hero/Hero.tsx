const Hero = () => {
  return (
    <div className="md:px-8 px-3">
      <a
        href="#"
        className="flex  flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover flex-1 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="https://5.imimg.com/data5/HC/DQ/MY-9005253/car-wash-chemicals-500x500.jpg"
          alt=""
        />
        <div className="flex gap-48 flex-1 flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Car Washing Foam,इन बेस्ट Car Washing Foam से आपको मिलेगी जबरदस्त
            सफाई, पेंट पर नहींं आएगा स्क्रैच - car washing foam for scratch less
            cleaning - Navbharat
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            घर पर रखी की सफाई बहुत जरूरी होती है। अगर आप इसे साफ करने के लिए
            डिटर्जेंट का इस्तेमाल करते हैं, तो कार के पेंट पर स्क्रैच लगने का
            खतरा काफी बढ़ जाता है। इसी बात को ध्यान में रखकर हम आपके लिए Car
            Wash Shampoo लेकर आए हैं। यह फोम फॉर्म में आते हैं और बेहतरीन सफाई
            देते हैं। इनके इस्तेमाल से कार पर जमी जिद्दी से जिद्दी धूल और गंदगी
            साफ हो जाती है। इनसे पेंट की चमक बनी रहती है और आपकी कार नई जैसी
            दिखती है। इन्हें कार के अलावा बाइक की सफाई के लिए भी इस्तेमाल किया
            जा सकता है।
          </p>
        </div>
      </a>
    </div>
  );
};

export default Hero;
