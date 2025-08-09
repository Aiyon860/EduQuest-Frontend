import NotificationChild from "@/components/NotificationChild";

const NotificationDetail = () => {
  return (
    <div className="h-auto w-96 text-sm text-gray-500 bg-white">
      <div className="border-b border-gray-300 px-4 py-3 flex justify-start">
        <h3
          id="notification-popover"
          className="font-semibold text-gray-900 text-lg"
        >
          Notifikasi
        </h3>
      </div>
      <div className="h-72 overflow-y-auto">
        <NotificationChild LastActivityType="Peringkat Dicapai" description="Anda telah mendapatkan peringkat di kelas 1" date="2022-01-01" isAlreadyRead={true}/>
        <NotificationChild LastActivityType="Penghargaan Baru" description="Anda telah mendapatkan penghargaan di kelas 1" date="2022-01-01" isAlreadyRead={false}/>
        <NotificationChild LastActivityType="Misi Harian" description="Anda telah menyelesaikan misi harian di kelas 1" date="2022-01-01" isAlreadyRead={false}/>
        <NotificationChild LastActivityType="Latihan Soal" description="Anda telah menyelesaikan latihan soal di kelas 1" date="2022-01-01" isAlreadyRead={false}/>
      </div>
    </div>
  );
};

export default NotificationDetail;