export default function Button({ title, style }) {
  return <div className={`py-1 px-2 ${style}`}>{title}</div>;
}
