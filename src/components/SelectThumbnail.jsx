import React from "react";

const arrModels = [
  { id: 1, name: "Model 1", image: "/images-modal/avatar-1.jpg" },
  { id: 2, name: "Model 2", image: "/images-modal/avatar-1.jpg" },
  { id: 3, name: "Model 3", image: "/images-modal/avatar-1.jpg" },
  { id: 4, name: "Model 4", image: "/images-modal/avatar-1.jpg" },
  { id: 5, name: "Model 5", image: "/images-modal/avatar-1.jpg" },
];

const SelectThumbnail = () => {
  return (
    <section className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none">
      <div className="absolute right-4 w-[300px] h-[400px] rounded-2xl bg-white/10 backdrop-blur-xs">
        <div className="w-full flex items-center justify-center py-3 border-b border-white/10 text-white font-semibold mb-5">
          Chọn người mẫu
        </div>
        <div className="flex-1 overflow-auto flex flex-col gap-5">
          {arrModels.map((model) => (
            <div
              key={model.id}
              className="w-full flex items-center justify-between px-3"
            >
              <div className="rounded-md overflow-hidden border-2 border-white">
                <img src={model.image} alt="" className="w-10 h-10" />
              </div>
              <p className="text-white">{model.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectThumbnail;
