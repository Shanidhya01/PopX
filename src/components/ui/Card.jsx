export const Card = ({ img, content, name, email, icon }) => {
  return (
    <div className="text-neutral-700 text-[14px] flex flex-col border-b border-dashed border-neutral-300 gap-5 p-4">
      <div className="flex gap-3">
        <div className="relative">
          <img
            className="rounded-full h-[60px] w-[60px] object-cover"
            src={img}
            alt={name}
          />
          {icon && (
            <div className="absolute bottom-0 right-0 bg-violet-600 rounded-full p-1">
              {icon}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-semibold">{name}</div>
          <div>{email}</div>
        </div>
      </div>
      <div>{content}</div>
    </div>
  );
};
