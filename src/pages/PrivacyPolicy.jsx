import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="dark:bg-gray-dark-main flex justify-center text-red-main dark:text-gray-300 p-10 parallax">
      <div className="flex flex-col gap-3 text-">
        <p className="text-2xl text-red-700 dark:text-white text-center">
          Gizlilik Politikası
        </p>
        <p className="text-red-700 text-center text-lg dark:text-white">
          Son güncellenme: 26/09/2024
        </p>
        <p className="text-sm">
          Güvenliğiniz bizim için önemli. Bu sebeple bizimle paylaşacağınız
          kişisel verileriz hassasiyetle korunmaktadır. Biz, Şirket Adı, veri
          sorumlusu olarak, bu gizlilik ve kişisel verilerin korunması
          politikası ile, hangi kişisel verilerinizin hangi amaçla işleneceği,
          işlenen verilerin kimlerle ve neden paylaşılabileceği, veri işleme
          yöntemimiz ve hukuki sebeplerimiz ile; işlenen verilerinize ilişkin
          haklarınızın neler olduğu hususunda sizleri aydınlatmayı amaçlıyoruz.
        </p>
        <p className="text-red-700 text-xl dark:text-white">
          Toplanan Kişisel Verileriniz, Toplanma Yöntemi ve Hukuki Sebebi
        </p>
        <p className="text-sm">
          IP adresiniz ve kullanıcı aracısı bilgileriniz, sadece analiz yapmak
          amacıyla ve çerezler (cookies) vb. teknolojiler vasıtasıyla, otomatik
          veya otomatik olmayan yöntemlerle ve bazen de analitik sağlayıcılar,
          reklam ağları, arama bilgi sağlayıcıları, teknoloji sağlayıcıları gibi
          üçüncü taraflardan elde edilerek, kaydedilerek, depolanarak ve
          güncellenerek, aramızdaki hizmet ve sözleşme ilişkisi çerçevesinde ve
          süresince, meşru menfaat işleme şartına dayanılarak işlenecektir.
        </p>
        <p className=" text-red-700 text-xl dark:text-white">
          Kişisel Verileri İşlenen Kişi Olarak Haklarınız
        </p>
        <p className="text-red-700 text-lg dark:text-white">
          KVKK madde 11 uyarınca herkes, veri sorumlusuna başvurarak aşağıdaki
          haklarını kullanabilir:
        </p>
        <ul className="text-sm">
          <li className="mt-1">Kişisel veri işlenip işlenmediğini öğrenme,</li>
          <li className="mt-1">
            Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,
          </li>
          <li className="mt-1">
            Kişisel verilerin silinmesini veya yok edilmesini isteme,
          </li>
          <li className="mt-1">
            İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz
            edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya
            çıkmasına itiraz etme,
          </li>
          <li className="mt-1">
            Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara
            uğraması hâlinde zararın giderilmesini talep etme, haklarına
            sahiptir.
          </li>
        </ul>
        <p className="text-red-700 text-lg dark:text-white">
          Yukarıda sayılan haklarınızı kullanmak üzere{" "}
          <Link
            className="text-black hover:text-red-700 dark:text-red-main text-base p-2 dark:hover:text-white"
            to="/contact"
          >
            contact
          </Link>{" "}
          sayfası üzerinden bizimle iletişime geçebilirsiniz.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
