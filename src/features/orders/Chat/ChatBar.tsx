export const ChatBar: React.FC = () => {
  return (
    <div className="flex w-full gap-4">
      <input
        className="input-bordered input-primary input w-full"
        type="text"
        placeholder="Message Crumbs"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <button className="btn">Send</button>
    </div>
  );
};
