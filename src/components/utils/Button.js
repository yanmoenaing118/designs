export default function Button({ text, type, onClick, className }) {
  return (
    <button
      className={`bg-green-500 text-white font-bold uppercase text-sm rounded px-3 py-2 ${className}`}
      type="text"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
